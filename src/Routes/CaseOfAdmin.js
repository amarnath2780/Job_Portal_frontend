import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import {Navigate,Outlet,useNavigate}  from 'react-router-dom'

function CaseOfAdmin() {
    let {user}=useContext(AuthContext)
   const val= localStorage.getItem('adminAuthToken')
    return val ? <Navigate to='/login'></Navigate>:<Outlet/>
    }
    


export default CaseOfAdmin