import React from 'react';
import { useRoutes } from 'react-router-dom';
import LoginContainer from '../pages/user/LoginContainer';
import MainLayout from '../layouts/MainLayout';

const Routers = () => {
    
    return useRoutes([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                { path: "user/login", element: <LoginContainer/>  }
            ]
        },
       
       
    ]);
};

export default Routers;