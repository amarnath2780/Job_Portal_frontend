import React from 'react'
import add1 from '../../Images/add1.jpeg'
import add2 from '../../Images/add2.jpeg'
import add3 from '../../Images/add3.jpeg'





function ServiceAdd() {
  return (
    <div className='service-add'>
        <div className="service-add-content">
            <div className="title">
                <h5>Remove iPhone/iPad/iPod Passcode in All Scenarios</h5>
            </div>
            <div className="justify">
                <div className="cell">
                    <img src={add1} alt="" style={{width:"160px"}} />
                    <div className="sub">
                        <p>Bypass Forgotten iPhone/iPad Passcode </p>
                    </div>
                    <p id='p'>1 click to erase forgotten passcode. Removes touch ID and face ID info in a few minutes as well.</p>
                </div>

                <div className="cell">
                    <img src={add2} alt="" style={{width:"160px"}} />
                    <div className="sub">
                        <p>Bypass Forgotten iPhone/iPad Passcode </p>
                    </div>
                    <p id='p'>1 click to erase forgotten passcode. Removes touch ID and face ID info in a few minutes as well.</p>
                </div>

                <div className="cell">
                    <img src={add3} alt="" style={{width:"160px"}} />
                    <div className="sub">
                        <p>Bypass Forgotten iPhone/iPad Passcode </p>
                    </div>
                    <p id='p'>1 click to erase forgotten passcode. Removes touch ID and face ID info in a few minutes as well.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ServiceAdd
