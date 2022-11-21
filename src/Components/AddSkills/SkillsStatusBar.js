import React ,{useState} from 'react'
import '../AdminHome/AdminHome.css'
import AddCategory from './AddCategory'


function SkillsStatusBar() {

  const [category, setCategory] = useState(true);
  const [recruiter, setRecruiter] = useState(false);
  const [spams, setSpam] = useState(false);


  const handlingCategoryr=()=>{
    setCategory(!category)
    setRecruiter(false)
    setSpam(false)
  }

  const handlingRecruiter=()=>{
    setRecruiter(!recruiter)
    setCategory(false)
    setSpam(false)
  }

  const handlingSpam=()=>{
    setSpam(!spams)
    setRecruiter(false)
    setCategory(false)
  }

  return (
    <div className='status-bar'>

      <div className='status'>
        <div className='pending' >
          <button onClick={ handlingCategoryr} >Category</button>
        </div>
        <div className='accept'>
          <button onClick={handlingRecruiter} >Skills</button>
        </div>
        <div className='rejected'>
          <button onClick={handlingSpam} >Department</button>
        </div>
      </div>



      <div className='status-table'>
        {category ? <AddCategory/> : ''}
        {recruiter ? '' : ''}
        {spams ? '' : ''}
      </div>

    </div>
  )
}

export default SkillsStatusBar
