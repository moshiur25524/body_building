import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {

    // const [error, setError] = useState([])

    const location = useLocation()
    const navigate = useNavigate()

    let from = location?.state?.from?.pathname || '/'

    // const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, rerror] = useSendPasswordResetEmail(
        auth
    );


    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const googleSignIn = () => {
        signInWithGoogle()
        navigate(from, { replace: true });
        console.log(guser);
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.stopPropagation();
        // }
        // setValidated(true);

        signInWithEmailAndPassword(email, password)
        // navigate(from, { replace: true })
        e.target.reset()
        console.log(user);
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center text-primary'>LOGIN Please !!</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                    {/* <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                    </Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    {/* <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback> */}
                </Form.Group>

                {error && <p className='text-danger'>{error.message}</p>}
                <Button variant="link" onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert('Sent email');
                }}>Forget Password ?</Button> <br />
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