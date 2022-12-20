import React, { useEffect, useRef, useState } from 'react'
import axios from '../../axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import '../AddCompany/SelectComapy.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function RequestCat() {
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
    axios.post('/req-cat/',{
        category_name:name,
    }).then((res)=>{
        setErrMsg(res.data.message)
        if (res.data.errors){
          setErrMsg('User already exist')
      }
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

    
    <div className='pending-table' style={{width:"100%" , padding:"2px 20%"}}>

    <form action="" onSubmit={addCategory}>
        <p className='card-title'>Request to add Category</p>
    <Card className='card-box' sx={{ minWidth: 275 }}>
    {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">{errMsg}</Alert></Stack> : ''}
          <div className="card-box-form">
            <TextField
              id="outlined-name"
              label=""
              value={name}
              onChange={handleChange}
            />
              <button className='card-button' style={{marginTop: "0rem"}} type='submit'>Submit</button>
          </div>
    </Card>
        
    </form>
    
        
    </div>
  )
}

export default RequestCat
