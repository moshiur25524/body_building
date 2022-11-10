import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ExpertDetail = () => {
    const {expertId} = useParams()
    return (
        <div>
            <PageTitle title='ExpertDetail'></PageTitle>
            <h1 className='text-center text-secondary'>Some Details of Expert Gymist : {expertId}</h1>
        </div>
    );
};

export default ExpertDetail;