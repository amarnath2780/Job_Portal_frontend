import React ,{useState} from 'react'
import './AdminHome.css'
import Pending from './Pending'
import Accepted from './Accepted'
import Rejected from './Rejected';


function StatusBar() {

  const [pending, setPending] = useState(true);
  const [accept, setAccept] = useState(false);
  const [rejected, setRejected] = useState(false);


  const handlingPending=()=>{
    setPending(!pending)
    setAccept(false)
    setRejected(false)
  }

  const handlingAccept=()=>{
    setAccept(!accept)
    setPending(false)
    setRejected(false)
  }

  const handlingRejected=()=>{
    setRejected(!rejected)
    setAccept(false)
    setPending(false)
  }

  return (
    <div className='status-bar'>

      <div className='status'>
        <div className='pending' >
          <button onClick={handlingPending}  >Pending</button>
        </div>
        <div className='accept'>
          <button onClick={handlingAccept} >Accepted</button>
        </div>
        <div className='rejected'>
          <button onClick={handlingRejected} >Rejected</button>
        </div>
      </div>



      <div className='status-table'>
        {pending ? <Pending/> : ''}
        {accept ? <Accepted/> : ''}
        {rejected ? <Rejected/> : ''}
      </div>

    </div>
  )
}

export default StatusBar
