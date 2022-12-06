import React, { useContext, useEffect, useState } from 'react'
import './Css/Recruiter.css'
import UserContext from '../Context/UserContext'
import { Link } from "react-router-dom";
import ReNavbar from '../Components/ReNavbar';
import axios from '../axios';

function Recruiter() {
  const user = localStorage.getItem("userId")
  const profile_id = localStorage.getItem("profile_id")
  console.log(user);

  useEffect(() => {
    userProfile()
  }, []);

  const [profile, setprofile] = useState([]);


  const userProfile=()=>{
    axios.get(`/recruiter-profile/?id=${profile_id}`).then((res)=>{
        setprofile(res.data)
      })
}

  return (
    <div className='recruiter'>
      <ReNavbar/>
      
      <div className='posted'>


        {profile.is_requested ? <p style={{color: '#fff'}}>'You request is pending'</p> : profile.is_acceped ?  <p style={{color: '#fff'}}>'You can add Job Now  <Link style={{color: '#fff'}}  to='/post-job'>Here</Link>'</p> : 
          <div>
          <h1 style={{color: '#fff'}}>If your Company already listed complete the Application<Link to='/application'>Here</Link> </h1>
          <h1 style={{color: '#fff'}}>If your Company not listed Add your Company<Link to='/add-company'>Here</Link> </h1>
          </div>
        }
      </div>
      
    </div>
  )
}

export default Recruiter
