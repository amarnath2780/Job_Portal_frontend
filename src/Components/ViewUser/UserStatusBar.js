import React ,{useState} from 'react'
import '../AdminHome/AdminHome.css'
import Allseekers from'./Allseekers'
import Allrecruiter from './Allrecruiter'
import Spam from './Spam'


function UserStatusBar() {

  const [seeker, setSeeker] = useState(true);
  const [recruiter, setRecruiter] = useState(false);
  const [spams, setSpam] = useState(false);


  const handlingSeeker=()=>{
    setSeeker(!seeker)
    setRecruiter(false)
    setSpam(false)
  }

  const handlingRecruiter=()=>{
    setRecruiter(!recruiter)
    setSeeker(false)
    setSpam(false)
  }

  const handlingSpam=()=>{
    setSpam(!spams)
    setRecruiter(false)
    setSeeker(false)
  }

  return (
    <div className='status-bar'>

      <div className='status'>
        <div className='pending' >
          <button onClick={handlingSeeker} >Seeker</button>
        </div>
        <div className='accept'>
          <button onClick={handlingRecruiter} >Recruiter</button>
        </div>
        <div className='rejected'>
          <button onClick={handlingSpam} >Scam's</button>
        </div>
      </div>


      <div id="admin-title">
        <h5>All Users View  Section</h5>
      </div>


      <div className='status-table'>
        {seeker ? <Allseekers/> : ''}
        {recruiter ? <Allrecruiter/> : ''}
        {spams ? <Spam/> : ''}
      </div>

    </div>
  )
}

export default UserStatusBar
