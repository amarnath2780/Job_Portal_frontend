import React, { useEffect, useRef, useState } from 'react'
import axios from '../../axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import '../AddCompany/SelectComapy.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function RequestSkill() {
    const errRef = useRef()

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [name, setName] = React.useState('');
    const [department, setDepartment] = useState([]);
    const [depart, setDepart] = useState('');

    const handleChange = (event) => {
      setName(event.target.value);
    };
    const navigate = useNavigate()

  useEffect(() => {
      setErrMsg('')
      listCompany()
  }, [name]);

const addCategory=(e)=>{
    e.preventDefault()
    axios.post('/req-skill/',{
        skill_name :name,
        department_id:depart,
    }).then((res)=>{
        console.log(res.data);
        setErrMsg(res.data.message)
        if (res.data.error){
          setErrMsg('User already exist')
          console.log(res.data.errors)
      }
      setErrMsg('Category already exist')
    })
}

const listCompany=()=>{
  axios.get('/list-department/').then((res)=>{
    setDepartment(res.data)
  })
}

const handleCategory=(e)=>{
  console.log(e.target.value);
  setDepart(e.target.value)
}


    

  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>

  return (

    
    <div className='pending-table' style={{width:"100%" , padding:"2px 20%"}}>

<form action="" onSubmit={addCategory}>
        <p className='card-title'>Request to add Skills</p>
    <Card className='card-box' style={{justifyContent: "space-evenly" ,height: '75vh'}} sx={{ minWidth: 275 }}>
    {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">{errMsg}</Alert></Stack> : ''}
            <div className='add-company-select'>
                <label htmlFor="company">Skill Name</label>
                <TextField
                id="outlined-name"
                label=""
                value={name}
                onChange={handleChange}
                />
            </div>
            <div className='add-company-select'>
            <label htmlFor="company">Department</label>
                <select onChange={handleCategory}  name="company" id="">
                    <option>Select</option>
                    {department ? department.map((item ,key)=>
                    <option key={item.id} value={item.id} >{item.department_name}</option>
                    ) : ''}
                </select>
            </div>
            <button style={{width: '12rem'}} className='card-button' type='submit'>Submit</button>
    </Card>
        
    </form>
    
        
    </div>
  )
}

export default RequestSkill
