import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function Landing() {
  return (
    <div className='top-banner'>
      <div className="banner-section">
        <div className="lft">
          <div className="sub">
            <p>TrabaJo For A Job</p>
          </div>
          <h5 class="title">If You Haven't Found It Yet Keep Looking</h5>
          <p class="tip">May Your Search For a Job, Be Shorter Than Your Resume</p>

          <div className="flexible">
            <Link to='Job' >Search Jobs</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Landing
