import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    "apiKey": "AIzaSyAWWSLiaOA8560J3U18gmeMb1H6jJrWqFs",
    "authDomain": "mf-auth-6bbe7.firebaseapp.com",
    "projectId": "mf-auth-6bbe7",
    "storageBucket": "mf-auth-6bbe7.appspot.com",
    "messagingSenderId": "312870716035",
    "appId": "1:312870716035:web:559cba94a1716a2865d1b6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;