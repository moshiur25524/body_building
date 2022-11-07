import React from 'react';
import { useParams } from 'react-router-dom';

const ExpertDetail = () => {
    const {expertId} = useParams()
    return (
        <div>
            <h1 className='text-center text-secondary'>Some Details of Expert Gymist: {expertId}</h1>
        </div>
    );
};

export default ExpertDetail;