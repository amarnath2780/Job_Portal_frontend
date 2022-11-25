import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from '../../axios';


function JobView() {

    const [job, setJob] = useState([]);

    useEffect(() => {
        allJobs()
    }, []);


    const allJobs =()=> {
        axios.get('/all-jobs/').then((res)=>{
            console.log(res.data);
            setJob(res.data)
        })
    }

  return (
    <div className='job-view'>
      <div style={{width:"100%"}}>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 3,
                height: 450,
                },
            }}
        >

            {job ? job.map((item ,key)=>
            <Paper key={item.id} elevation={6} >
            <div className='card'>
                <img src="https://images.pexels.com/photos/7130457/pexels-photo-7130457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div>
                    <h3>{item.job_title}</h3>
                    <p>{item.company.company_name}</p>
                    {item.state ? <p>state:  {item.state}  </p> :""}
                    {item.country ? <p>country:  {item.country}  </p> :""}
                </div>
            </div>
            <hr />
            <div>
                <h5>Job  Description</h5>
                <div style={{display:"flex"}}>
                    {item.min_salary ? <p>₹{item.min_salary} - </p> : ''}
                    {item.max_salary ? <p>₹ {item.max_salary}</p> : ''}
                </div>
                <p>{item.job_type}</p>
                <p>job Short deatils</p>
            </div>

            <button>read more</button>
            </Paper>
            ) : ''}
            
            
        </Box>    
      </div>
    </div>
  )
}

export default JobView
