import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import React,{useContext} from 'react'




const PrivateRoutes = () => {
  let {authToken}=useContext(AuthContext) 
  return authToken ? <Outlet /> : <Navigate to="/login"/> 
}

export default PrivateRoutes

