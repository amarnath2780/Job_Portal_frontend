import React, { useContext, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from '../../axios';
import Apply from '../HomePage/Apply';
import JobDetails from '../HomePage/JobDetails'
import { JobContext } from '../../Context/JobContext';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import HistoryIcon from '@mui/icons-material/History';
import jober from '../../Images/jober-part.png'



function PostedJobs(props) {

    const [job, setJob] = useState([]);

    const user_id = localStorage.getItem("userId")


    useEffect(() => {
        allJobs()
    }, []);

    const {setJobDetails} = useContext(JobContext);

    const allJobs =()=> {
        axios.get(`jobs-recruiter-posted/?id=${user_id}`).then((res)=>{
            setJob(res.data)
        })
    }



    

  return (
    <div className='job-view'>
      <div className='job-cards'>
        
            {job ? job.map((item ,key)=>
            <>
            <a onClick={(e)=>{
                e.preventDefault()
                props.onData(item.id)
            }}>
            <Paper className='paper' elevation={8} >
                <div className="jobTupleHeader">
                    <div className="job-info">
                        <a href="">{item.job_title}</a>
                        <div className="company-info">
                            <a href="">{item.company_id.company_name}</a>
                        </div>
                        <ul>
                            <li className="experience">
                                <WorkOutlineIcon className='icons'/>
                                <span title="1-5 Yrs " class="ellipsis fleft fs12 lh16 expwdth">{item.experience}Yrs</span>
                            </li>
                            <li className="salary">
                                <CurrencyRupeeIcon className='icons'/>
                                <span title="Not disclosed " class="ellipsis fleft fs12 lh16 ">{item.max_salary}</span>
                            </li>
                            <li className="place">
                                <LocationOnIcon className='icons'/>
                                <span title="Noida " class="ellipsis fleft fs12 lh16 locWdth">{item.state}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rec-img"> 
                        <img class="compImg fright" style={{width:"50px"}} alt="company" src={jober}/>
                    </div>
                </div>
                <div className="job-description">
                    <DescriptionIcon className='icon'/>
                    {item.short_discription}
                </div>

                <div className="jobTupleFooter">
                    <div className='footer-button'>
                        {/* <button
                            style={{border:"none",background:"none"}}
                            className='btn-pending'>
                            <Apply id={item.id} recruiter={item.recruiter.email} company={item.company_id.id}/>
                        </button> */}
                    </div>
                    {/* <div className='job-type'>
                        <HistoryIcon className='icon'/>
                        <span class="fleft fw500">5 Days Ago</span>
                    </div> */}
                </div>

                
            </Paper>
            </a>
            </>
            ) : ''} 

      </div>
    </div>
  )
}

export default PostedJobs
