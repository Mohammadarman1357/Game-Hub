import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;
    } else {
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
    // if-> use exist return children

    // else -> navigate --> login
};

export default PrivateRoute;