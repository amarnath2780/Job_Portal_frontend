import React from 'react'
import features from '../../Images/feature.png'
import features1 from '../../Images/feature1.png';



function Features() {
  return (
    <div>
      <div className="factory-reset">
        <div className="features-container">
            <div className="title">
                <h5>Factory Reset iPhone Without Passcode & iTunes. 1-Click Operation!</h5>
            </div>
            <div className="justify">
                <div className="cell">
                    <img src={features} alt="" />
                    <div className="sub">

                    </div>
                    <p>
                        Before selling or giving away iPhone/iPad/iPod touch, Tenorshare 4uKey enables you to wipe an iPhone without passcode and restore it like new. Everything need to do is set it as a new iPhone without restrictions.
                    </p>
                </div>

                <div className="cell">
                    <img src={features1} alt="" />
                    <div className="sub">

                    </div>
                    <p>
                        Before selling or giving away iPhone/iPad/iPod touch, Tenorshare 4uKey enables you to wipe an iPhone without passcode and restore it like new. Everything need to do is set it as a new iPhone without restrictions.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
