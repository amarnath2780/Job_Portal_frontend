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


export default function AppliedJobDetails({id}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [skill, setSkill] = useState('');
  const [department, setDepartment] = useState('');
  const [dep, setDep] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate()

   useEffect(() => {
        listCompany()
        console.log(id);
      }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const [job, setJob] = useState([]);


  const listCompany=()=>{
    axios.get(`applied-single-job/?id=${id}`).then((res)=>{
      setJob(res.data)
      console.log(res.data);
  })
}

  const PDF_URL = `https://timbre-shop.shop${job.resume}`


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
          {"Edit The Skills"}
        </DialogTitle>
        <DialogContent>
              {job.resume}
              <embed src={PDF_URL} width="800px" height="2100px" />

              <a href={PDF_URL}>link</a>

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