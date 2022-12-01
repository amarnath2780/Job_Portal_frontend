import React, { useEffect, useRef, useState } from 'react'
import axios from '../../axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import '../AddCompany/SelectComapy.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function RequestDepartment() {
    const errRef = useRef()
    const [category, setCategory] = useState([]);
    const [cat, setcat] = useState('');

    useEffect(() => {
        listCompany()
      }, []);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
      setName(event.target.value);
    };
    const navigate = useNavigate()

    const handleCategory=(e)=>{
      console.log(e.target.value);
      setcat(e.target.value)
    }
  

const addCategory=(e)=>{
    e.preventDefault()
    axios.post('/req-cat/',{
        category_name:name,
    }).then((res)=>{
        console.log(res.data);
        navigate('/post-job/')
        if (res.data.error){
          setErrMsg('User already exist')
          console.log(res.data.errors)
      }
      setErrMsg('Category already exist')
    })
}

const listCompany=()=>{
  axios.get('/company-category/').then((res)=>{
    console.log(res.data);
    setCategory(res.data)
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
        <p className='card-title'>Request to add  Department</p>
    <Card className='card-box' sx={{ minWidth: 275 }}>
    {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{errMsg}</Alert></Stack> : ''}
            <div className='add-company-select'>
                <label htmlFor="company">Department Name</label>
                <TextField
                id="outlined-name"
                label=""
                value={name}
                onChange={handleChange}
                />
            </div>
            <div className='add-company-select'>
            <label htmlFor="company">Category</label>
                <select onChange={handleCategory}  name="company" id="">
                    <option>Select</option>
                    {category ? category.map((item ,key)=>
                    <option key={item.id} value={item.id} >{item.category_name}</option>
                    ) : ''}
                </select>
            </div>
            <button className='card-button' type='submit'>Submit</button>
    </Card>
        
    </form>
    
        
    </div>
  )
}

export default RequestDepartment
