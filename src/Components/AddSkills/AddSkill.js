import React, { useEffect, useRef, useState } from 'react'
import axios from '../../axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import '../AddCompany/SelectComapy.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function AddSkill() {
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


const addCategory=(e)=>{
    e.preventDefault()
    axios.post('/add-skill/',{
        skill_name:name,
        department:cat,
    }).then((res)=>{
        console.log(res.data);
        navigate('/Skill')
        if (res.data.error){
          setErrMsg('User already exist')
      }
      setErrMsg('Category already exist')
    })
}


const handleCategory=(e)=>{
    setcat(e.target.value)
  }




const listCompany=()=>{
  axios.get('/list-department/').then((res)=>{
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

    
    <div className='pending-table'>

    <form action="" onSubmit={addCategory}>
        <p className='card-title'>Add New Skills</p>
    <Card className='card-box' sx={{ minWidth: 275 }}>
    {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{errMsg}</Alert></Stack> : ''}
            <div className='add-company-select'>
                <label htmlFor="company">Skill</label>
                <TextField
                id="outlined-name"
                label=""
                value={name}
                onChange={handleChange}
                />
            </div>
            <div className='add-company-select'>
            <label htmlFor="company">Company</label>
                <select onChange={handleCategory}  name="company" id="">
                    <option>Select</option>
                    {category ? category.map((item ,key)=>
                    <option key={item.id} value={item.id} >{item.department_name}</option>
                    ) : ''}
                </select>
            </div>
            <button className='card-button' type='submit'>Submit</button>
    </Card>
        
    </form>
    
        
    </div>
  )
}

export default AddSkill
