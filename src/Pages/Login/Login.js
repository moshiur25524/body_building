import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const googleSignIn = () => {
        signInWithGoogle()
        console.log(user);
    }

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password)
        e.target.reset()
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center text-primary'>LOGIN Please !!</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p>New Here? <Link to={'/register'}>Register please</Link></p>
                <Button variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
            <div className="border border-bottom border-2 border-warning my-2"></div> <p className='text-center'>OR</p>
            <div className="border border-bottom border-2 border-warning my-2"></div>
            <div className="d-grid gap-2">
                <Button onClick={googleSignIn} variant="outline-info" size="md">
                    Google Login
                </Button>
            </div>
        </div>
    );
};

export default Login;