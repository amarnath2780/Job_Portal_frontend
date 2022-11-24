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


export default function Recurement({id}) {
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
      }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit=(cellvalues)=>{
    console.log(cellvalues.row);
    axios.put(`edit-skill/?id=${id}`,{
        skill_name :skill,
        department: dep,
  }).then((res)=>{
      console.log(res.data);
      navigate('Skill/')
      if (res.data.error){
        console.log(res.data.errors)
    }
  })
  }

  const listCompany=()=>{
  axios.get('/list-department/').then((res)=>{
    setDepartment(res.data)
  })
}

const handleDepartment=(e)=>{
    setDep(e.target.value)
  }

  return (
    <div>
      <Button variant="contained" 
        style ={{
          background: "none",
          border: "none",
          color: "#000",
          boxShadow:"none",
      }}
       endIcon={<SendIcon />} onClick={handleClickOpen}>
        Add Requirement
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
        <form action="" onSubmit={handleEdit}>
                <p className='card-title'>Add New Skills {id}</p>
            <Card className='card-box' sx={{ minWidth: 275 }}>
                    {/* emial */}
                    <label htmlFor="name">Skill Name
                    </label>
                    <input type="text"
                    id='name'
                    autoComplete="off"
                    onChange={(e) => setSkill(e.target.value)}
                    required/>


                <div className='add-company-select'>
                    <label htmlFor="company">Company</label>
                        <select onChange={handleDepartment}  name="company" id="">
                            <option>Select</option>
                            {department ? department.map((item ,key)=>
                            <option key={item.id} value={item.id} >{item.department_name}</option>
                            ) : ''}
                        </select>
                </div>
                    <button className='card-button' type='submit'>Submit</button>
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