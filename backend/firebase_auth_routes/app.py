from flask import Flask, jsonify, request, make_response, session
from OTP import getOTPApi
from os import getenv
from config import config
import pyrebase
import os


app = Flask(__name__)
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
app.secret_key = os.getenv('MF-AUTH_SECRET')


@app.route('/', methods=['GET'], strict_slashes=True)
def index():
    try:
        return jsonify({ 'Message': 'Welcome to MF-Auth. '}), 200
    except Exception as e:
        return jsonify({"Not found": str(e)}), 404


@app.route('/signup', methods=['POST'], strict_slashes=True)
def signup():
    """create a new user account"""
    email = request.form['email']
    password = request.form['password']
    confirm_password = request.form['confirm_password']

    if password != confirm_password:
        return jsonify({ 'Error': 'Passwords do not match!!' }), 400

    try:
        new_user = auth.create_user_with_email_and_password(email, password)
        auth.send_email_verification(new_user['idToken'])
        return jsonify({ 'Message': 'User created successfully' }), 200       
    except Exception as e:
        return jsonify({'User not created': str(e)}), 500


@app.route('/login', methods=['POST'], strict_slashes=True)
def login():
    """Authenticate a user"""
    try:
        email = request.form['email']
        password = request.form['password']
        user_info = auth.sign_in_with_email_and_password(email, password)
        account_info = auth.get_account_info(user_info['idToken'])

        if account_info['users'][0]['emailVerified'] == False:
            return jsonify({'Error': 'Please verify your email'}), 401

        response = make_response(jsonify({'Message': 'Login successful'}), 200)

        response.set_cookie('user_email', email)
        response.set_cookie('local_id', account_info['users'][0]['localId'])

        return response
    except Exception as e:
        return jsonify({'Ooops unauthorized': str(e)}), 401


@app.route('/edit_password', methods=['POST'], strict_slashes=True)
def edit_password():
    """Edit user password"""
    try:
        email = request.form['email']
        auth.send_password_reset_email(email)

        return jsonify({'Message': 'Password updated successfully'}), 200
    except Exception as e:
        return jsonify({'Error': f'Failed to update password: {str(e)}'}), 500


@app.route('/getOTP', methods=['POST'], strict_slashes=True)
def getOTP():
    """Get One Time Password"""
    try:
        phone_number = request.form['phone_number']
        val = getOTPApi(phone_number, session)
        if val:
            return jsonify({'Message': 'The OTP value has been created'}), 201
    except Exception as e:
        return jsonify({'Error': f'Failed to generate OTP: {str(e)}'}), 500


@app.route('/validateOTP', methods=['POST'], strict_slashes=True)
def validateOTP():
    """Validate One Time Password"""
    try:
        otp = request.form['otp']
        if 'response' in session:
            s = session['response']
            session.pop('response', None)
            if s == otp:
                return jsonify('successfully authenticated'), 200
            else:
                return jsonify({'Error': 'Log in Failed'}), 401
    except Exception as e:
        return jsonify({'Error': f'Log in failed: {str(e)}'}), 500


@app.route('/logout', methods=['POST'], strict_slashes=True)
def logout():
    """Log out the user"""
    response = make_response(jsonify({'Message': 'user logged out successfully'}), 200)
    response.delete_cookie('user_email')
    response.delete_cookie('local_id')

    return response


@app.route('/delete_user', methods=['DELETE'], strict_slashes=True)
def delete_user():
    """Delete a user"""
    try:
        user_info = auth.current_user
        local_id = user_info['idToken']
        user_email = user_info['email']

        if not local_id:
            return jsonify({'Error': 'No user token provided'}), 400

        auth.delete_user_account(local_id)

        response = make_response(jsonify({'Message': f'user {user_email} deleted successfully'}), 200)
        response.delete_cookie('user_email')
        response.delete_cookie('local_id')

        return response
    except Exception as e:
        return jsonify({'Error': f'Failed to delete user: {str(e)}'}), 500


if __name__ == '__main__':
    port = getenv('MF-AUTH_PORT', '5000')
    host = getenv('MF-AUTH_HOST', '0.0.0.0')
    app.run(host=host, port=port, debug=True)
