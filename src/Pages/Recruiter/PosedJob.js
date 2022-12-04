import React, { useState } from 'react'
import ReNavbar from '../../Components/ReNavbar'
import PostedJobs from '../../Components/Recruiter/PostedJobs';
import ListAppliedUsers from '../../Components/Recruiter/ListAppliedUsers';
import './RecruiterJob.css'
import axios from '../../axios';



function PosedJob() {

  const [jobState, setJobState] = useState([]);

  const getData = (data) =>{
    console.log('data is here home',data);
    axios.get(`applied-job-seekers/?id=${data}`).then((res)=>{
        setJobState(res.data);
    })
  }



  return (
    <div className='PostedJobs'>
        <ReNavbar/>
        <div className="posted-job-details">
            <PostedJobs onData={getData}/>
            <ListAppliedUsers  job={jobState}/>
        </div>

    </div>
  )
}

export default PosedJob
