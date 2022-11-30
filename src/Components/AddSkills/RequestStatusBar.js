import React ,{useState} from 'react'
import '../AdminHome/AdminHome.css'
import RequestCat from './RequestCat'
import RequestSkill from './RequestSkill'
import RequestDepartment from './RequestDepartment'


function SkillsStatusBar() {

  const [category, setCategory] = useState(true);
  const [skill, setSkill] = useState(false);
  const [spams, setSpam] = useState(false);


  const handlingCategoryr=()=>{
    setCategory(!category)
    setSkill(false)
    setSpam(false)
  }

  const handlingRecruiter=()=>{
    setSkill(!skill)
    setCategory(false)
    setSpam(false)
  }

  const handlingSpam=()=>{
    setSpam(!spams)
    setSkill(false)
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
        {category ? <RequestCat/> : ''}
        {skill ? <RequestSkill/> : ''}
        {spams ? <RequestDepartment/> : ''}
      </div>

    </div>
  )
}

export default SkillsStatusBar
