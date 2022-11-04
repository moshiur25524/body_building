import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

const Register = () => {

    const [updateProfile, updating] = useUpdateProfile(auth);
    const [displayName, setDisplayName] = useState('');

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [email, setEmail] = useState('');

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    // const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = async e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // if(!/^(?=.*[A-Z])/.test(password)){
        //     setError('Password must have at least one Uppercase Character.')
        //     return 
        // }
        // setError('')
        setDisplayName(name)
        setEmail(email)
        createUserWithEmailAndPassword(email, password)
        console.log(user);
        e.target.reset()

        await sendEmailVerification();
          alert('Please check your email to verify your email');
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
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email'  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {error && <p className='text-danger'>{error.message}</p>}
                <p>Already Have an Account? <Link to={'/login'}>Login please</Link></p>
                <Button variant="primary" type="submit">
                    REGISTER
                </Button>
                <Button variant="warning"
                    onClick={async () => {
                        await updateProfile({ displayName });
                        alert('Updated profile');
                    }}
                >
                    Update profile
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