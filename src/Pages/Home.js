import React from 'react'
import Fliterbar from '../Components/HomePage/Fliterbar';
import JobView from '../Components/HomePage/JobView';
import Filter from '../Components/HomePage/Filter';
import Navbar from '../Components/Navbar';
import JobDetails from '../Components/HomePage/JobDetails';


function Home() {
  return (
    <div>
      <Navbar/>
      <div className='job-View-set'>
        <Filter/>
        <JobView/>
      </div>
    </div>
  )
}

export default Home
