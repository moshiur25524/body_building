import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
   const [services, setServices] = useServices()
    return (
        <div>
            <h1 className='text-center'>All the services: {services.length}</h1>
            <div className='services container'>
                {
                    services.map(service => <Service 
                    key={service.id}
                    service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;