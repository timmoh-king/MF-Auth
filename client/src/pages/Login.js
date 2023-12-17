import React, { useEffect } from 'react'
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleSignInWithGoogle = async() => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user !== null){
            navigate('/dashboard');
        }
    }, [user]);

    return (
        <div>
            <h1>Hello welcome to MFAuth app</h1>
            <br />
            <GoogleButton onClick={handleSignInWithGoogle} />
        </div>
    )
}

export default Login
