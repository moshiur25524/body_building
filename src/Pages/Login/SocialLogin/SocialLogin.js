import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/'

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const googleSignIn = () => {
        signInWithGoogle()
        console.log(user);
    }

    if(user){
        navigate(from, { replace: true });
    }

    let errorElement;

    if (error) {
       errorElement = (
            <div>
                <p className='text-danger'>{error?.message}</p>
            </div>)
    }

    if (loading) {
        return (
            <div>
                <p className='text-warning'>Loading...</p>
            </div>)
    }
    return (
        <div>
            <div className="border border-bottom border-2 border-warning my-2"></div> <p className='text-center'>OR</p>
            <div className="border border-bottom border-2 border-warning my-2"></div>
            
            <p className='text-danger'>{errorElement}</p>

            <div className="d-grid gap-2">
                <Button onClick={googleSignIn} variant="outline-info" size="md">
                    <i class="fab fa-google"></i> Google Login
                </Button>
                <Button onClick={googleSignIn} variant="outline-primary" size="md">
                    <i class="fab fa-facebook"></i> Facebook Login
                </Button>
                <Button onClick={googleSignIn} variant="outline-secondary" size="md">
                    <i class="fab fa-github"></i> github Login
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;