import React from 'react'
import RequestCat from '../Components/AddSkills/RequestCat'
import RequestStatusBar from '../Components/AddSkills/RequestStatusBar'
import ReNavbar from '../Components/ReNavbar'

function AddRequest() {
  return (
    <div style={{color:"#000"}}>
      <ReNavbar/>
      <RequestStatusBar/>
    </div>
  )
}

export default AddRequest
