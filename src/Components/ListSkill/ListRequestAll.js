import React ,{useState} from 'react'
import '../AdminHome/AdminHome.css'
import SkillRequest from './SkillRequest'
import Request from './Request'
import DepartmentRequest from './DepartmentRequest'



function ListRequestAll() {

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
      <h5>Requests to Add</h5>
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
      </div>



      <div className='status-table'>
        {skill ? <SkillRequest/> : ''}
        {category ? <Request/> : ''}
        {department ? <DepartmentRequest/> : ''}
      </div>

    </div>
  )
}

export default ListRequestAll
