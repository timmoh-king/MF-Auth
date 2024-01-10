from flask import Flask, redirect, request, url_for, jsonify, make_response
from flask_login import (
    LoginManager,
    current_user,
    UserMixin,
    login_required,
    login_user,
    logout_user,
)
from oauthlib.oauth2 import WebApplicationClient
from flask_cors import CORS
import requests
from os import getenv
import os
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": [
    "http://localhost:3000",
    "https://mf-auth-e27f78z3x-timmoh-king.vercel.app/",
    "https://mf-auth-six.vercel.app/"
]}})
login_manager = LoginManager()
login_manager.init_app(app)

app.secret_key = os.getenv('MF-AUTH_SECRET')

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)

client = WebApplicationClient(GOOGLE_CLIENT_ID)

def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()


class User(UserMixin):
    def __init__(self, user_id, email):
        self.id = user_id
        self.email = email


@app.route("/")
def index():
    if current_user.is_authenticated:
        return (
            "<p>Hello, {}! You're logged in! Email: {}</p>"
            "<div><p>Google Profile Picture:</p>"
            '<img src="{}" alt="Google profile pic"></img></div>'
            '<a class="button" href="/logout">Logout</a>'.format(
                current_user.name, current_user.email, current_user.profile_pic
            )
        )
    else:
        return '<a class="button" href="/login_with_google">Google Login</a>'


@app.route("/login_with_google")
def login():
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]

    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    return redirect(request_uri)


@app.route("/login_with_google/callback")
def callback():
    # Get authorization code Google sent back to you
    code = request.args.get("code")

    # Find out what URL to hit to get tokens that allow you to ask for
    # things on behalf of a user
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]

    # Prepare and send a request to get tokens! Yay tokens!
    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code
    )

    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )

    # Parse the tokens!
    client.parse_request_body_response(json.dumps(token_response.json()))
    client.parse_request_body_response(token_response.content.decode("utf-8"))

    # id_Token = token_response.json().get("id_token")
    # print(id_Token)

    # Now that you have tokens (yay) let's find and hit the URL
    # from Google that gives you the user's profile information,
    # including their Google profile image and email
    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    # You want to make sure their email is verified.
    # The user authenticated with Google, authorized your
    # app, and now you've verified their email through Google!
    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]
        users_email = userinfo_response.json()["email"]

        # Create a user in your db with the information provided
        # by Google
        user = User(
            user_id=unique_id, email=users_email
        )

        login_user(user)
        
        response = make_response(jsonify({'Message': 'Login successful'}), 200)

        # Set cookies for user_email and local_id
        response.set_cookie('user_email', users_email)
        response.set_cookie('local_id', unique_id)
        # login_user(unique_id)

        return response
    else:
        return jsonify({ 'Error': "User email not available or not verified by Google." }), 400


@app.route("/logout_with_google")
def logout():
    response = make_response(jsonify({'Message': 'user logged out successfully'}), 200)
    response.delete_cookie('user_email')
    response.delete_cookie('local_id')
    response.delete_cookie('session')

    return response


if __name__ == '__main__':
    port = getenv('GOOGLE_CLIENT_PORT', '5005')
    host = getenv('GOOGLE_CLIENT_HOST', '0.0.0.0')
    # app.run(host=host, port=port, debug=True)
    app.run(host=host, port=port, debug=True, ssl_context="adhoc")
