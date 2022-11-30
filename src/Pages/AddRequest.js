import React from 'react'
import Navbar from '../Components/Navbar'
import RequestCat from '../Components/AddSkills/RequestCat'
import RequestStatusBar from '../Components/AddSkills/RequestStatusBar'

function AddRequest() {
  return (
    <div style={{color:"#000"}}>
      <Navbar/>
      <RequestStatusBar/>
    </div>
  )
}

export default AddRequest
