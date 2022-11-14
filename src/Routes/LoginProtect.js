import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import {Navigate,Outlet,useNavigate}  from 'react-router-dom'

function CaseOfAdmin() {
    let {user}=useContext(AuthContext)
   const val= localStorage.getItem('adminAuth')
    return val ? <Navigate to='/admin'></Navigate>:<Outlet/>
    }
    


export default CaseOfAdmin