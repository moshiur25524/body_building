import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const googleSignIn = () =>{
        signInWithGoogle()
    }
    return (
        <div className='container'>
            <h1>LogIn page</h1>
            <div className="d-grid gap-2">
                <Button onClick={googleSignIn} variant="outline-info" size="md">
                    Google Login
                </Button>
            </div>
        </div>
    );
};

export default Login;