import React from 'react'
import Select from 'react-select';
import logo from '../../Images/s.png';
import art from '../../Images/art.png';
import './SelectComapy.css'



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



function AddCompany() {
  return (
    <div className='add-company'>
        

        <div className='Content'>
        <h5>Application step 1 of 2</h5>
        <form action="">
            <label htmlFor="name">Name of the Company</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="category">Select Company Category</label>
            <Select id='category' name='category' options={options} />
            <label htmlFor="logo">Upload Company Logo</label>
            <input type="file" name="logo" id="logo" />
            <label htmlFor="founder">Founder</label>
            <input type="text" name="founder" id="founder" />
            <label htmlFor="ceo">CEO's Name</label>
            <input type="text" name="ceo" id="ceo" />
            <label htmlFor="ceo-img">CEO's Image</label>
            <input type="file" name="ceo-img" id="ceo-img" />
            <label htmlFor="head-office">Where is your head office located?</label>
            <input type="text" name="head-office" id="head-office" />
            <label htmlFor="security-code">Create a Security code</label>
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

export default AddCompany
