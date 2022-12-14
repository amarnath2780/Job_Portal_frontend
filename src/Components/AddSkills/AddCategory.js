import React, { useEffect, useRef, useState } from 'react'
import axios from '../../axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import '../AddCompany/SelectComapy.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function AddCategory() {
    const errRef = useRef()

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
      setName(event.target.value);
    };
    const navigate = useNavigate()


const addCategory=(e)=>{
    e.preventDefault()
    axios.post('/add-category/',{
        category_name:name,
    }).then((res)=>{
        navigate('/Skill')
        if (res.data.error){
          setErrMsg('User already exist')
      }
      setErrMsg('Category already exist')
    })
}

useEffect(() => {
    setErrMsg('')
}, [name]);
    

    <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>

  return (

    
    <div className='pending-table'>

    <form action="" onSubmit={addCategory}>
        <p className='card-title'>Add Company Category</p>
    <Card className='card-box' sx={{ minWidth: 275 }}>
    {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{errMsg}</Alert></Stack> : ''}
            <TextField
            id="outlined-name"
            label=""
            value={name}
            onChange={handleChange}
            />
            <button className='card-button' type='submit'>Submit</button>
    </Card>
        
    </form>
    
        
    </div>
  )
}

export default AddCategory
