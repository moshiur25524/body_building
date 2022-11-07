import React from 'react';
import notFoundBackground from "../../../src/assets/404-pages.jpg";

const NotFound = () => {
    const myStyle={
        backgroundImage: `url(${notFoundBackground})`,
        height:'100vh',
        // marginTop:'-70px',
        fontSize:'50px',
        objectFit:'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="" style={myStyle}>
            <h1 className='text-center text-danger display-3 fw-bold'>404</h1>
        </div>
    );
};

export default NotFound;