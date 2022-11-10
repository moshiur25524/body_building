import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
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
                <Card.Img variant="top" className='card-image w-100' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {description.slice(0,65)} <Link to={`/checkout/${id}`}>see more</Link>
                    </Card.Text>
                    <p className="text-secondary display-5">$ {price}</p>
                    <Button onClick={()=>handleCheckout(id)} variant="warning">Enroll Now</Button>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;