import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
        e.target.reset()
    }

    const googleSignIn = () => {
        signInWithGoogle()
        console.log(user);
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center text-primary'>REGISTER Please</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>Already Have an Account? <Link to={'/login'}>Login please</Link></p>
                <Button variant="primary" type="submit">
                    REGISTER
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

export default Register;