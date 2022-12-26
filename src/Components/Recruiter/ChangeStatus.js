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
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ChangeStatus({id,job_id,seeker_id,company,status}) {


    const [age, setAge] = React.useState('Shortlised');

    const handleChange = (event) => {
      setAge(event.target.value);
      console.log(event.traget.value);
    };


  const user_id = localStorage.getItem("userId")
  const profile_id = localStorage.getItem("profile_id")
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [joinDate, setJoinDate] = useState('');

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

  const JobDetails = () => {
    axios.get()
  }

 
  const applyJob=(e)=>{

    console.log(seeker_id,job_id,age,company);
    // e.preventDefault()
    axios.put(`change-job-status/?id=${id}`, {
        seeker_id : seeker_id,
        job_id : job_id,
        status : age,
        company:company,
    }).then((res)=>{
      console.log(res.data);
    })
}




  return (
    <div>
      <Button variant="contained" style={{color:"#fff" , fontSize: "12px" , background: "#000"}}  endIcon={<SendIcon />} onClick={handleClickOpen}>
        Change Status
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
          {"Change the Application Status"}
        </DialogTitle>
        <DialogContent>
        <form action="" onSubmit={applyJob}>
                {/* <p className='card-title'><u>Send Offer Letter</u></p> */}
            <Card className='apply-form' id='boxer' sx={{ minWidth: 275 , gap: '21px' }}> 
                    {/* <label>
                      Join data
                    </label>
                    <input id='shortlister' type="date"
                    name='resume'
                    autoComplete="off"
                    onChange={(e) => setJoinDate(e.target.value)}
                    required/> */}
                    <InputLabel id="demo-select-small">Change the Status</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={status}
                        label="Age"
                        // onChange={handleChange}
                        onChange={(e) => {
                            setAge(e.target.value)
                            console.log(e.target.value);
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value='Shortlised'>Shortlised</MenuItem>
                        <MenuItem value='Tech-Interview'>Tech-Interview</MenuItem>
                        <MenuItem value='HR-Round'>Thirty</MenuItem>
                    </Select>
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