import React from 'react'
import { Link } from 'react-router-dom'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function BottomBanner() {
  return (
    <div className='bottom-banner'>
        <div className="bottom-banner-container">
            <div className="sub">
                <p>Tenorshare 4uKey</p>
            </div>
            <div className="title">
                <p>Best Software to Bypass Forgotten iPhone/iPad Passcode</p>
            </div>
            <div className="button">
                <WorkOutlineIcon/>
                <Link>Search Job</Link>
            </div>
        </div>
    </div>
  )
}

export default BottomBanner
