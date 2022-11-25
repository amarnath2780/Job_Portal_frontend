import React from 'react'
import './Homepage.css';
import TextField from '@mui/material/TextField';



function Fliterbar() {
  return (
    <div className='Fliter-bar'>
      <div className='filter-search'>
        <div className='filter'>
        <TextField fullWidth label="" id="fullWidth"  placeholder='Search'/>
        </div>
      </div>
    </div>
  )
}

export default Fliterbar
