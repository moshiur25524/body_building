import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {id, name, img, price, description } = service;
    const navigate = useNavigate()

    const handleCheckout = id =>{
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='my-3'>
            <Card className='shadow' border='warning' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='card-image' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                    <p class="text-secondary display-4">$ {price}</p>
                    <Button onClick={()=>handleCheckout(id)} variant="warning">Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;