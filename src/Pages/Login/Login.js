import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader/Loader';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const emailRef = useRef()

    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || '/'

    // const [email, setEmail] = useState('');
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
    }

    if(loading || sending){
        return (
            <Loader></Loader>
        )
    }

    if (user) {
        navigate(from, { replace: true });
        console.log(user);
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        } else {
            toast("Please enter your email");
        }
    };
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center text-primary'>LOGIN !!</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    LOGIN
                </Button>

                {error && <p className='text-danger'>{error?.message}</p>}
                <Button variant="link" className='text-decoration-none' onClick={resetPassword}>Forget Password ?</Button> <br />

                <p>New Here? <Link className='text-decoration-none' to={'/register'}>Register please</Link></p>
                {loading && <Loader></Loader>} <br />
                {/* {gloading && <p className='highlight'>Loading...</p>} */}

            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;