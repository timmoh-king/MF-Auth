import os
from os import getenv

config = {
  "apiKey": os.getenv('FIREBASE_API_KEY'),
  "authDomain": "mf-auth-6bbe7.firebaseapp.com",
  "projectId": "mf-auth-6bbe7",
  "storageBucket": "mf-auth-6bbe7.appspot.com",
  "messagingSenderId": "312870716035",
  "appId": "1:312870716035:web:559cba94a1716a2865d1b6",
  "databaseURL": os.getenv('DATABASE_URL')
};
