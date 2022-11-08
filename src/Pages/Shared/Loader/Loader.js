import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div style={{ height: '400px' }} className=' d-flex justify-content-center align-items-center' >
      <Spinner animation="border" variant='primary'>
        {/* <span className="visually-hidden">Loading...</span> */}
      </Spinner>
    </div>
  );
};

export default Loader;