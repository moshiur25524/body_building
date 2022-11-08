import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader/Loader';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || '/'

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, rerror] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

        e.target.reset()
        console.log(user);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center text-primary'>LOGIN Please !!</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                {error && <p className='text-danger'>{error.message}</p>}
                <Button variant="link" onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert('Sent email');
                }}>Forget Password ?</Button> <br />
                
                <p>New Here? <Link to={'/register'}>Register please</Link></p>
                {loading && <Loader></Loader>} <br />
                {/* {gloading && <p className='highlight'>Loading...</p>} */}

                <Button variant="primary" type="submit">
                    LOGIN
                </Button>

            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;