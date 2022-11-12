import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import {Navigate,Outlet,useNavigate}  from 'react-router-dom'

function CaseOfReverse() {
    let {user}=useContext(AuthContext)
   const val= localStorage.getItem('token')
    return val ? <Navigate to='/'></Navigate>:<Outlet/>
    }
    


export default CaseOfReverse