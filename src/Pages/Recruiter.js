import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import './Css/Recruiter.css'
import {useDispatch ,useSelector} from 'react-redux'
import { AuthProvider } from '../Context/AuthContext';
import { Link } from "react-router-dom";

function Recruiter() {


  return (
    <div className='recruiter'>
      <Navbar/>
      
      <h1>If your Company already listed complete the Application<Link to='/application'>Here</Link> </h1>
      <h1>If your Company not listed Add your Company<Link to='/add-company'>Here</Link> </h1>
 
      
    </div>
  )
}

export default Recruiter
