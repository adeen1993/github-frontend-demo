 import React,  { useEffect } from 'react'
import {useNavigate, useRoutes} from 'react-router-dom'

//Pages list
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Profile from "./components/user/Profile"
import Dashboard from "./components/dashboard/Dashboard"

//Auth Context
import {useAuth} from "./authContext";

const ProjectRoutes = () => {
    const {currUser, setCurrUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');

        if(userIdFromStorage && !currUser) {
            setCurrUser(userIdFromStorage);
        }
        if (!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname)) {
        navigate("/auth")
    }
    },[currUser, navigate, setCurrUser]);

    let element = useRoutes([
        {
            path: "/",
            element: <Dashboard/>
        },
        {
            path: "/auth",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
        {
            path: "/profile",
            element: <Profile/>
        }
    ]);

    return element;

}

export default ProjectRoutes;