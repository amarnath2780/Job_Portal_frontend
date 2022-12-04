import React, { useContext, useEffect } from 'react'
import './Css/Recruiter.css'
import UserContext from '../Context/UserContext'
import { Link } from "react-router-dom";
import ReNavbar from '../Components/ReNavbar';


function Recruiter() {
  const user = localStorage.getItem("userId")
  console.log(user);

  useEffect(() => {
    
  }, []);

  return (
    <div className='recruiter'>
      <ReNavbar/>
      
      <div className='posted'>
      <h1>If your Company already listed complete the Application<Link to='/application'>Here</Link> </h1>
      <h1>If your Company not listed Add your Company<Link to='/add-company'>Here</Link> </h1>
      </div>
      
    </div>
  )
}

export default Recruiter
