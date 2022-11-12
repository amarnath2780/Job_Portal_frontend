import React,{useContext} from 'react'
import {Navigate,Outlet}  from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

function LoginProtect() {
    let {authToken}=useContext(AuthContext) 
   
    return authToken ? <Outlet /> : <Navigate to="/login"/> 
    }


export default LoginProtect