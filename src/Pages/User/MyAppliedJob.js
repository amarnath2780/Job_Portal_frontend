import React, { useContext, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from '../../axios';
import Navbar from '../../Components/Navbar'
import JobDetails from '../../Components/HomePage/JobDetails'
import { JobContext } from '../../Context/JobContext';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import HistoryIcon from '@mui/icons-material/History';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';



function MyAppliedJob() {

    let user_id = localStorage.getItem('profile_id')
    const [job, setJob] = useState([]);
    const [appliedJobs, setappliedJobs] = useState('');


    useEffect(() => {
        // appliedJob()
        allJobs()
    }, []);

    const {setJobDetails} = useContext(JobContext);

    const allJobs =()=> {
        axios.get(`/applied-by-me/?id=${user_id}`).then((res)=>{
            setJob(res.data)
        })
    }


   


  return (
    <div className='job-view'>
        <Navbar/>
        <br />
        <br />
      <div className='job-cards'>
            
            {job[0] ? job.map((item ,key)=>
            <>
            <Paper className='paper' elevation={8} >
                <div className="jobTupleHeader">
                    <div className="job-info">
                        <a href="">{item.job_id.job_title}</a>
                        <div className="company-info">
                            <a href="">{item.job_id.company_id.company_name}</a>
                        </div>
                        <ul>
                            <li className="experience">
                                <WorkOutlineIcon className='icons'/>
                                <span title="1-5 Yrs " class="ellipsis fleft fs12 lh16 expwdth">{item.job_id.experience}Yrs</span>
                            </li>
                            <li className="salary">
                                <CurrencyRupeeIcon className='icons'/>
                                <span title="Not disclosed " class="ellipsis fleft fs12 lh16 ">{item.job_id.max_salary}</span>
                            </li>
                            <li className="place">
                                <LocationOnIcon className='icons'/>
                                <span title="Noida " class="ellipsis fleft fs12 lh16 locWdth">{item.job_id.state}</span>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="job-description">
                    <DescriptionIcon className='icon'/>
                    {item.job_id.short_discription}
                </div>

                <div className="jobTupleFooter">
                    <div className='footer-button'>
                        <button
                            style={{border:"none",background:"none"}}
                            className='btn-pending'>
                            {/* <Apply id={item.id} recruiter={item.recruiter_id.email} company={item.company_id.id}/> */}
                        </button>
                        <button
                            style={{border:"none",background:"none"}}
                            className='btn-pending'>
                            <JobDetails id={item.job_id.id} recruiter={item.job_id.recruiter_id.email} company={item.job_id.company_id.id}/>
                        </button>
                    </div>
                    <div className='job-type'>
                        <HistoryIcon className='icon'/>
                        <span class="fleft fw500">5 Days Ago</span>
                    </div>
                </div>

                
            </Paper>
            </>
            ) : <>
            
            <div className="no-job-found">
                <h1><span id='errorLog'><ReportProblemIcon style={{fontSize:"63px"}}/></span> No Job Found</h1>
            </div>
            </>} 
      </div>
      
    </div>
  )
}

export default MyAppliedJob
