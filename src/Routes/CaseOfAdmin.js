import React, { useContext, useEffect } from 'react'
import AuthContext from '../Context/AuthContext'
import {Navigate,Outlet,useNavigate}  from 'react-router-dom'

function CaseOfAdmin() {
    let {admin}=useContext(AuthContext) 

   
    return admin ? <Outlet /> : <Navigate to="/login"/> 
    }
    


export default CaseOfAdmin