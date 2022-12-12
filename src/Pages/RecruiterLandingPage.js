import React, { useEffect, useState } from 'react'
import Landing from '../Components/Landingpage/Landing'
import Services from '../Components/Landingpage/Services'
import ServiceAdd from '../Components/Landingpage/ServiceAdd'
import Navbar from '../Components/Navbar'
import Features from '../Components/Landingpage/Features'
import BottomBanner from '../Components/Landingpage/BottomBanner'
import Footer from '../Components/Landingpage/Footer'
import ClockLoader from "react-spinners/ClockLoader";
import ReNavbar from '../Components/ReNavbar'

export default function RecruiterLandingPage() {

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)

    setTimeout(()=>{
      setloading(false)
    },2000)
  }, []);

  return (
    <div>
      
      {loading ? 
      <div id='loading'>
        <ClockLoader
        color="#3ac2e6"
        loading={loading}
        cssOverride={{}}
      />
      </div>
     : <>
      <ReNavbar/>
      <Landing/>
      <Services/>
      <ServiceAdd/>
      <Features/>
      <BottomBanner/>
      <Footer/></>}
      
    </div>
  )
}
