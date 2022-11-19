import React ,{useState} from 'react'
import './AdminHome.css'
import Pending from './Pending'

function StatusBar() {

  const [pending, setPending] = useState(false);


  const handlingPending=()=>{
    setPending(true)
  }


  return (
    <div className='status-bar'>

      <div className='status'>
        <div className='pending' >
          <button onClick={handlingPending}  >Pending</button>
        </div>
        <div className='accept'>
          <button>Accepted</button>
        </div>
        <div className='rejected'>
          <button>Rejected</button>
        </div>
      </div>



      <div className='status-table'>
        {pending ? <Pending/> : ''}
      </div>

    </div>
  )
}

export default StatusBar
