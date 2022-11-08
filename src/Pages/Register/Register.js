import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {

    const [updateProfile, updating] = useUpdateProfile(auth);
    const [displayName, setDisplayName] = useState('');
    const [agree, setAgree] = useState(false)

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [email, setEmail] = useState('');

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
        // const agree = e.target.terms.checked;

        if (agree) {
            createUserWithEmailAndPassword(email, password)
            console.log(user);
            await sendEmailVerification();
            alert('Please check your email to verify your email');
            e.target.reset()
        }

        // if(!/^(?=.*[A-Z])/.test(password)){
        //     setError('Password must have at least one Uppercase Character.')
        //     return 
        // }
        // setError('')
        setDisplayName(name)
        setEmail(email)

    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center text-primary'>REGISTER </h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=>setAgree(!agree)} className={agree ? 'text-success':'text-danger'} type="checkbox" name='terms' label="Accept Body Building Terms and Condition" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={`ps-2 ${!agree && 'text-danger'}`} type="checkbox" name='terms' label="Accept Body Building Terms and Condition" />
                </Form.Group> */}

                <Button variant="primary" disabled={!agree} type="submit">
                    REGISTER
                </Button>
                <Button variant="warning"
                className='ms-3'
                    onClick={async () => {
                        await updateProfile({ displayName });
                        alert('Updated profile');
                    }}
                >
                    Update profile
                </Button>
                {error && <p className='text-danger'>{error?.message}</p>}
                <p>Already Have an Account? <Link to={'/login'}>Login please</Link></p>

            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;