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
  const [userCategory, setUserCategory] = useState('');

  const profile_id = localStorage.getItem("profile_id")

  /* Filter Values */
  const [filter, setFilter] = useState({});

  const getData = (data) =>{
    axios.get(`search-filter/?search=${data}`).then((res)=>{
      setJob(res.data)
  })
  }

  const getFilter = (data) =>{
    axios.get(`filter-job/?category=${data.category}&department=${data.department}&level=${data.level}&experience=&job_type=${data.type}`).then((res)=>{
      setJob(res.data)
  })
  }

  useEffect(() => {
    UserCategory()
  }, []);

  const UserCategory=()=>{
    axios.get(`view-profile/?id=${profile_id}`).then((res)=>{
      setUserCategory(res.data.category)
      axios.get(`filter-job/?category=${res.data.category}&department=&level=&experience=&job_type=`).then((res)=>{
        setJob(res.data)
    })
  })
  }


  return (
    <div>
      <Navbar onData={getData}/>
      <div className='job-View-set'>
        <Filter onFilter={getFilter}/>
        <JobView job={job}/>
      </div>
    </div>
  )
}

export default Home
