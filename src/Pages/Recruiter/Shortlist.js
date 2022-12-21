import React, { useState } from 'react'
import ReNavbar from '../../Components/ReNavbar'
import PostedJobs from '../../Components/Recruiter/PostedJobs';
import ShortlistedUsers from '../../Components/Recruiter/ShortlistedUsers';
import './RecruiterJob.css'
import axios from '../../axios';




function Shortlist() {

  const [jobState, setJobState] = useState([]);
  const [job_id, setjob_id] = useState('');

  const getData = (data) =>{
    axios.get(`shortlist-view/?id=${data}`).then((res)=>{
        setJobState(res.data);
        setjob_id(data)
    })
  }



  return (
    <div className='PostedJobs'>
        <ReNavbar/>
        <div className="posted-job-details">
            <PostedJobs onData={getData}/> 
            <ShortlistedUsers  job={jobState}  job_id={job_id}/>
        </div>

    </div>
  )
}

export default Shortlist