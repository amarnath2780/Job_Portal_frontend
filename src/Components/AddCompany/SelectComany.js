import React, { useState } from 'react';
import Select from 'react-select';
import './SelectComapy.css';




 const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

function SelectComany() {
  return (
    <div className='add'>
      <div className='select-box'>


      

      <div class="container">
        <div class="content">
          <form >
            <span class="input">
            <Select  options={options} />
            </span>
            <span class="input">
            <input style={{border:"none"}} type="text" name="" id="" placeholder='Security Code' />
            </span>
            
            <button type='submit' >Submit</button>
          </form>
        </div>
        <div class="flap"></div>
      </div>

      </div>
    </div>
  )
}

export default SelectComany
