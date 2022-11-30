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
        console.log(res.data);
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
          <div className='details'>
            <h1>{job.job_title}</h1>
            <div className="details-part">
            <div className="details-portion">
              <p>Job Type : {job.job_type}</p>
            </div>
            <div className="details-portion">
              <p>Job Level : {job.level}</p>
            </div>
            <div className="details-portion">
              <p>Max Salary : {job.max_salary}</p>
            </div>
            <div className="details-portion">
             <p>Min Salary : {job.min_salary}</p>
            </div>
            </div>

            <div className="details-part">
            <div className="details-portion">
              <p>Experience : {job.experience}</p>
            </div>
            <div className="details-portion">
              <p>State : {job.state}</p>
            </div>
            <div className="details-portion">
              <p>Country : {job.country}</p>
            </div>
            <div className="details-portion">
              <p>Vacancy :  {job.vacancy}</p>
            </div>
            </div>
            <div className="details-portion">
              <p>{job.full_discription}</p>
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