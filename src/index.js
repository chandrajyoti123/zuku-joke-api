import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './view/Dashboard/Dashboard';
import SignUp from './view/SignUP/SignUp';
import Login from './view/Login/Login';
const router=createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider  router={router}/>
);


