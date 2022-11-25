import React from 'react'
import Fliterbar from '../Components/HomePage/Fliterbar';
import JobView from '../Components/HomePage/JobView';
import Navbar from '../Components/Navbar';
import JobDetails from '../Components/HomePage/JobDetails';


function Home() {
  return (
    <div>
      <Navbar/>
      <Fliterbar/>
      <div className='job-View-set'>
        <JobView/>
      </div>
    </div>
  )
}

export default Home
