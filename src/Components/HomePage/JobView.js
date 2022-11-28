import React, { useContext, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from '../../axios';
import Apply from './Apply';
import { JobContext } from '../../Context/JobContext';

function JobView() {

    const [job, setJob] = useState([]);


    useEffect(() => {
        allJobs()
    }, []);

    const {setJobDetails} = useContext(JobContext);

    const allJobs =()=> {
        axios.get('/all-jobs/').then((res)=>{
            console.log(res.data);
            setJob(res.data)
        })
    }

  return (
    <div className='job-view'>
      <div className='job-cards'>

            {job ? job.map((item ,key)=>
            <Paper className='job-card' key={item.id} elevation={6} >
            <div style={{width:" 16rem"}} className='card'>
                <img src="https://images.pexels.com/photos/7130457/pexels-photo-7130457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className='card-first'>
                    <p style={{}}>Company : {item.company_id.company_name}</p>
                    {item.state ? <p>state:  {item.state}  </p> :""}
                    {item.country ? <p>country:  {item.country}  </p> :""}
                </div>
            </div>
            <hr />
            <div className='card-content' >
                <h4>{item.job_title}</h4>

                <h6>Job  Description</h6>
                <div style={{display:"flex"}}>
                    {item.min_salary ? <p>₹{item.min_salary} - </p> : ''}
                    {item.max_salary ? <p>₹ {item.max_salary}</p> : ''}
                </div>
                <p>{item.job_type}</p>
                <p style={{fontSize: '10px'}}>{item.full_discription}</p>
            </div>


            <div>
            <button
            style={{border:"none",background:"none"}}
            className='btn-pending'>
            <Apply id={item.id} recruiter={item.recruiter.email} company={item.company_id.id}/>
        </button>
            </div>

            
            </Paper>
            ) : ''} 
      </div>
    </div>
  )
}

export default JobView
