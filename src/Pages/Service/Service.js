import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div>
            <Card border='warning' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='card-image' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                    <Button variant="primary">Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;