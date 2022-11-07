import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleRefSubmit = e =>{
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
        e.target.reset()
    }
    return (
        <div className='container w-50 mx-auto mt-3'>
            <h1 className='highlight text-center'>Contact Page</h1>
            <Form onSubmit={handleRefSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;