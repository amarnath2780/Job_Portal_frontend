import React ,{useState} from 'react'
import '../AdminHome/AdminHome.css'
import AllSkills from './AllSkills'
import ListCategory from './ListCategory'
import ListDepartment from './ListDepartment'
import Request from './Request'



function ListSkillStatusBar() {

  const [skill, setSkill] = useState(true);
  const [category, setCategory] = useState(false);
  const [department, setDepartment] = useState(false);
  const [req, setReq] = useState(false);


  const handlingSkill=()=>{
    setSkill(!skill)
    setCategory(false)
    setDepartment(false)
    setReq(false)
  }

  const handlingCategory=()=>{
    setCategory(!category)
    setSkill(false)
    setDepartment(false)
    setReq(false)
  }

  const handlingDepartment=()=>{
    setDepartment(!department)
    setCategory(false)
    setSkill(false)
    setReq(false)
  }
  
  const handlingRequest=()=>{
    setReq(!req)
    setDepartment(false)
    setCategory(false)
    setSkill(false)
  }

  return (
    <div className='status-bar'>

      <div className='status'>
        <div className='pending' >
          <button onClick={handlingSkill} >Skill</button>
        </div>
        <div className='accept'>
          <button onClick={handlingCategory} >Category</button>
        </div>
        <div className='rejected'>
          <button onClick={handlingDepartment} >Department</button>
        </div>
        <div className='rejected'>
          <button onClick={handlingRequest} >Request</button>
        </div>
      </div>

      <div id="admin-title">
        <h5>All Category  Section</h5>
      </div>

      <div className='status-table'>
        {skill ? <AllSkills/> : ''}
        {category ? <ListCategory/> : ''}
        {department ? <ListDepartment/> : ''}
        {req ? <Request/> : ''}
      </div>

    </div>
  )
}

export default ListSkillStatusBar
