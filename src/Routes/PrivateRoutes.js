import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import React,{useContext, useEffect} from 'react'




const PrivateRoutes = () => {
  let {authToken}=useContext(AuthContext) 
  let auth = localStorage.getItem("authToken")

  return authToken ? <Outlet /> :  auth ? <Outlet /> : <Navigate to="/login"/> 
}

export default PrivateRoutes

