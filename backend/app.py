import os
from flask import Flask, jsonify
from os import getenv

app = Flask(__name__)


@app.route('/', methods=['GET'], strict_slashes=True)
def index():
    try:
        print(os.getenv('FIREBASE_API_KEY'))
        return jsonify({ 'Message': 'Welcome to MF-Auth. '}), 200
    except Exception as e:
        return jsonify({"Not found": str(e)}), 404


if __name__ == '__main__':
    port = getenv('MF-AUTH_PORT', '5000')
    host = getenv('MF-AUTH_HOST', '0.0.0.0')
    app.run(host=host, port=port, debug=True)
