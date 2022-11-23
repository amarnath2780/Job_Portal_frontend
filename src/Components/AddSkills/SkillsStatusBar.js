import React ,{useState} from 'react'
import '../AdminHome/AdminHome.css'
import AddCategory from './AddCategory'
import AddSkill from './AddSkill'
import AddDepartment from './AddDepartment'


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
        {category ? <AddCategory/> : ''}
        {skill ? <AddSkill/> : ''}
        {spams ? <AddDepartment/> : ''}
      </div>

    </div>
  )
}

export default SkillsStatusBar
