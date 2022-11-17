import React from 'react'
import Select from 'react-select';
import logo from '../../Images/s.png';
import art from '../../Images/art.png';
import './SelectComapy.css'



const options = [
    { value: 'Google', label: 'Google' },
    { value: 'Apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' }
  ]



function Application() {
  return (
    <div className='add-company'>
        

        <div className='Content'>
        <h5>Application step 2 of 2</h5>
        <form action="">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" />
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" />
            <label htmlFor="company">Select Your Company</label>
            <Select id='company' name='company' options={options} />
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" />
            <label htmlFor="founder">About</label>
            <textarea rows="10"></textarea>
            <label htmlFor="security-code">Enter the Company Security code</label>
            <input type="text" name="security-code" id="security-code" />

            <button type='submit'>Submit</button>
        </form>
        </div>


        <div className='card-section'>
            <div className='card'>
                <div className='card-img'>
                    <img src={logo} alt="logp" />
                </div>
                <div className='card-content'>
                <hr></hr>
                <p>Add you Company and Join with Trabajo</p>
                <img src={art} alt="" />
                </div>


        </div>
        </div>

    </div>
  )
}

export default Application
