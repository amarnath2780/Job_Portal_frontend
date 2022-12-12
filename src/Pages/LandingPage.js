import React from 'react'
import Landing from '../Components/Landingpage/Landing'
import Services from '../Components/Landingpage/Services'
import ServiceAdd from '../Components/Landingpage/ServiceAdd'
import Navbar from '../Components/Navbar'

export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Services/>
      <ServiceAdd/>
    </div>
  )
}
