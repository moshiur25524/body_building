import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

    const [agree, setAgree] = useState(false)

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleRefSubmit = e => {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        console.log(email, password);
        e.target.reset()


    }
    return (
        <div className='container w-50 mx-auto mt-3'>
            <Helmet>
                <title>Contact - Body Building</title>
            </Helmet>
            <h1 className='highlight text-center'>Contact Page</h1>
            <Form onSubmit={handleRefSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={agree? 'text-primary': 'text-danger'} type="checkbox" label="Agree our terms and condition" />
                </Form.Group>
                <Button variant="primary" disabled={!agree} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;