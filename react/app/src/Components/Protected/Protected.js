import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
// import Home from '../Home/Home';
// import Search from '../SearchPage/Search';
import { Appcontext } from '../../ContextApi/Context';
import { useContext } from "react";

function Protected() {
    const { token } = useContext(Appcontext);
   console.log("pro",token);
    
    const loggedIn = () => {
        return (
            
                <Outlet />
                
            
        )
    }


    const notLoggedIN = () => {
        return <Navigate to={"/"} />
    }

    return (
        <>
            <h1>protected</h1>

            {
                token ? loggedIn() : notLoggedIN()
            }


        </>
    )
}

export default Protected
