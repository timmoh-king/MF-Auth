from flask import Flask, jsonify, request, make_response
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from oauthlib.oauth2 import WebApplicationClient
import requests
from os import getenv
import os

app = Flask(__name__)
app.secret_key = os.getenv('GOOGLE_APP_SECRET')

GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", None)
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", None)
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)

if __name__ == '__main__':
    port = getenv('GOOGLE_CLIENT_PORT', '5000')
    host = getenv('GOOGLE_CLIENT_HOST', '0.0.0.0')
    app.run(host=host, port=port, debug=True)