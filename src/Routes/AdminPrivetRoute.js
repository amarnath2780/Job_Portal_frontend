import React,{useContext, useEffect} from 'react'
import {Navigate,Outlet}  from 'react-router-dom'
import AuthContext from '../Context/AuthContext'


function AdminPrivetRoute() {

    let {adminAuthToken}=useContext(AuthContext) 
    let auth = localStorage.getItem("adminAuthToken")
    
    useEffect(() => {
     console.log(adminAuthToken);
    }, []);
    return (
        adminAuthToken ? <Outlet/> : auth ? <Outlet/> : <Navigate to="/login"/>
    ) 
    }

export default AdminPrivetRoute

// adminAuthToken ? <Outlet /> : <Navigate to="/login"/>