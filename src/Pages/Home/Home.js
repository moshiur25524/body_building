import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import './Home.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    const [services] = useServices()
    const slicedServices = services.slice(0,3)
    return (
        <div className='container'>
            <Helmet>
                <title>Home - Body Building</title>
            </Helmet>
            <Banner></Banner>
            <h1 className='text-center highlight my-2 mt-5'>Our Services</h1>
            <div className='service-home'>
                {
                    slicedServices.map(service => <Service key={service.id} service={service} />)
                }
            </div>
            <hr class="border border-danger border-2 opacity-50"></hr>
            <Experts></Experts>
        </div>
    );
};

export default Home;