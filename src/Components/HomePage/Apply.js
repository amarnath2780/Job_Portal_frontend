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
import FolderIcon from '@mui/icons-material/Folder';


export default function Apply({id , recruiter ,company}) {


  const user_id = localStorage.getItem("userId")
  const profile_id = localStorage.getItem("profile_id")
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [num, setNum] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate()

   useEffect(() => {
    UserDetails()
      }, []);


  const handleClose = () => {
    setOpen(false);
  };


  function refreshPage() {
    window.location.reload(false);
  }

  const [userDetails, setUserDetails] = useState([]);

  const UserDetails=()=>{
    axios.get(`user-details/?id=${user_id}`).then((res)=>{
      setUserDetails(res.data);
    })
  }




  const applyJob=(e)=>{
    const formData = new FormData()
    formData.append('job_id' , id)
    formData.append('seeker_id' , profile_id)
    formData.append('company_id' , company)
    formData.append('recruiter' , recruiter)
    formData.append('resume' , file)
    formData.append('first_name' , userDetails.first_name)
    formData.append('last_name' , userDetails.last_name)
    formData.append('email' , userDetails.email)
    formData.append('phone' , userDetails.phone_number)

    e.preventDefault()
    let url = 'apply-job/'
    axios.post(url , formData).then((res)=>{
        refreshPage()
        console.log(res.data);
      })
}





  return (
    <div>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleClickOpen}>
        Apply
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
          {"Apply for the Job"}
        </DialogTitle>
        <DialogContent>
        <form action="" onSubmit={applyJob}>
                <p className='card-title'><u>Apply Form</u></p>
            <Card className='apply-form' sx={{ minWidth: 275 , gap: '21px' }}>
                    {/* emial */}
                    {/* <label htmlFor="name">
                      First Name 
                    </label>
                    <input type="text"
                    id='name'
                    autoComplete="off"
                    onChange={(e) => setFName(e.target.value)}
                    required/> */}

                    {/* <label htmlFor="name">
                      Last Name
                    </label>
                    <input type="text"
                    id='name'
                    autoComplete="off"
                    onChange={(e) => setLName(e.target.value)}
                    required/> */}

                    {/* <label htmlFor="name">
                      Email
                    </label>
                    <input type="text"
                    id='name'
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required/> */}

                    {/* <label htmlFor="name">
                      Phone
                    </label>
                    <input type="text"
                    id='name'
                    autoComplete="off"
                    onChange={(e) => setNum(e.target.value)}
                    required/> */}



                  <label htmlFor="resume">
                      Resume
                    </label>
                    <input type="file"
                    id='name'
                    for='resume'
                    autoComplete="off"
                    onChange={(e) => setFile(e.target.files[0])}
                    required/>

                    <button  className='card-button' type='submit'>Submit</button>
            </Card>
                
            </form>
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