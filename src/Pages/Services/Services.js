import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('servicesData.json')
        .then(res =>res.json)
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1>All the services</h1>
        </div>
    );
};

export default Services;