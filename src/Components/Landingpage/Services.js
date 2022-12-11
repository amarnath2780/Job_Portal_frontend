import React from 'react'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import BusinessIcon from '@mui/icons-material/Business';



function Services() {
  return (
    <div className='services-nav-link'>
        <div className="services-containers">
            <div className="services-first">
                <WorkOutlineIcon/>
                <p>Find A Job You Like And You Add Five Day To Every Week</p>
            </div>
            <div className="services-first">
                <Diversity1Icon/>
                <p>Your Network Is Your Net Worth</p>
            </div>
            <div className="services-first">
                <BusinessIcon/>
                <p>Together We Can Do Great Things</p>
            </div>
        </div>
      
    </div>
  )
}

export default Services
