import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import  { useEffect, useRef, useState } from 'react'
import axios from '../../axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Navigate, useNavigate } from 'react-router-dom';
import '../AddCompany/SelectComapy.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function Apply({id , recruiter ,company}) {


  const user_id = localStorage.getItem("userId")
  const profile_id = localStorage.getItem("profile_id")
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [job, setJob] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate()

   useEffect(() => {
      singleJob()
    }, []);


  const handleClose = () => {
    setOpen(false);
  };


  function refreshPage() {
    window.location.reload(false);
  }



  const singleJob =()=> {
    axios.get(`/job/?id=${id}`).then((res)=>{
        setJob(res.data)
    })
}



  return (
    <div>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Detail of the Job"}
        </DialogTitle>
        <DialogContent>

        <div className="job-details">
                <div className="job-details-head">
                  <div className="Header-title-container">
                        <h1>{job.job_title}</h1>
                  </div>
                  <div className="jobsearch-CompanyInfoContainer">
                    <div className="company">
                      <p><span>www.jubna.com</span></p>
                    </div>
                    <div className="company-location">
                      <p><span>{job.state}, {job.country}</span></p>
                    </div>
                  </div>
                </div>

                <div className="JobComponent-description">
                  <div className="JobDescriptionSection">
                    <div className="jobDetailsSection">
                      <div className="JobDescriptionSection-title">
                        <h2>Job details</h2>
                      </div>
                      <div className="JobDescriptionSection-sectionItem">
                        <div className="JobDescriptionSection-sectionItemKey-title">
                          <p><u>Job Type</u></p>
                        </div>
                        <div className="JobDescriptionSection-sectionItemKey-content">
                          <p>{job.job_type}</p>
                          <p>{job.level}</p>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <h2>Full Job Description</h2>

                    <div className="jobDescriptionText">
                      <p>Job Description :</p>
                      <p>{job.full_discription}.</p>
                      
                      <p id='p'>Job Types: Full-time, Regular / Permanent</p>
                      <p id='p'>Salary: ₹{job.max_salary} - ₹{job.min_salary}  {job.salary_type}</p>

                      <p id='p'>Experience:</p>
                      <ul id='ul'>
                        <li>{job.experience} years Preferred</li>
                      </ul>
                    </div>

                    <hr />

                    <h2>Hiring Insights</h2>

                    <div className="hiring-insights">
                      <p>Hiring  <b>{job.vacancy}</b> candidate for this role</p>
                    </div>
                    <div className="hiring-insights">
                     {job.urgent ? <p>Urgently hiring</p> : ''} 
                    </div>
                  </div>
                </div>
            </div>



        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}