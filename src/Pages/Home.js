import React, { useEffect, useState } from 'react'
import Fliterbar from '../Components/HomePage/Fliterbar';
import JobView from '../Components/HomePage/JobView';
import Filter from '../Components/HomePage/Filter';
import Navbar from '../Components/Navbar';
import JobDetails from '../Components/HomePage/JobDetails';
import axios from '../axios';

function Home() {

  const [search, setSearch] = useState('');
  const [job, setJob] = useState([]);

  const getData = (data) =>{
    axios.get(`search-filter/?search=${data}`).then((res)=>{
      console.log(res.data);
      setJob(res.data)
  })
  }

  useEffect(() => {
    allJobs()
  }, []);


  const allJobs =()=> {
    axios.get(`search-filter/?search=${search}`).then((res)=>{
        console.log(res.data);
        setJob(res.data)
    })
}



  return (
    <div>
      <Navbar onData={getData}/>
      <div className='job-View-set'>
        <Filter/>
        <JobView job={job}/>
      </div>
    </div>
  )
}

export default Home
