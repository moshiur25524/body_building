import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate()

    const handleCheckout = () =>{
        navigate('/checkout')
    }
    return (
        <div className='my-3'>
            <Card border='warning' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='card-image' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                    <p class="text-secondary display-4">$ {price}</p>
                    <Button onClick={handleCheckout} variant="primary">Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;