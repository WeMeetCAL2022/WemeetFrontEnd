import {Route, Redirect, Navigate} from "react-router-dom";


import React from 'react';

const PrivateRoute = ({children}) => {
    const token = sessionStorage.getItem('token');

    return token ? children : <Navigate to={'/login'} />;

};

export default PrivateRoute;