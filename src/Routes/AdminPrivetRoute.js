import React,{useContext} from 'react'
import {Navigate,Outlet}  from 'react-router-dom'
import AuthContext from '../Context/AuthContext'


function AdminPrivetRoute() {
    let {adminAuthToken}=useContext(AuthContext) 
   
    return adminAuthToken ? <Outlet /> : <Navigate to="/login"/> 
    }

export default AdminPrivetRoute