import React from 'react';
import { Link } from 'react-router-dom';

const Expert = ({ expert }) => {
    const { id, name, img } = expert;
    return (
        <div className='g-5 col-12 col-md-6 col-lg-4'>
            <div className="card " style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <Link to={`/expert/${id}`} className="btn btn-primary">Know More</Link>
                </div>
            </div>
        </div>
    );
};

export default Expert;