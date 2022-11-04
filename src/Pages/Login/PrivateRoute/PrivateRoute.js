import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const {pathname} = useLocation();
  
    return user ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: pathname }} replace />
    );
  };
  

export default PrivateRoute;