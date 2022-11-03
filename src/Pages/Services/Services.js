import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';

const Services = () => {
   const [services, setServices] = useServices()
    return (
        <div>
            <h1 className='text-center'>All the services: {services.length}</h1>
        </div>
    );
};

export default Services;