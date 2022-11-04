import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    const [services] = useServices()
    const slicedServices = services.slice(0,3)
    return (
        <div className='container'>
            <Banner></Banner>
            <h1 className='text-center text-primary my-2'>Our Services</h1>
            <div className='service-home'>
                {
                    slicedServices.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Home;