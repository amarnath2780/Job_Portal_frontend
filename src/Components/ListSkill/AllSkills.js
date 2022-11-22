import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';

const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'skill_name', headerName: 'Skill', width: 120 },
  { field: 'department', headerName: 'Department Id', width: 250 },

  
];


function AllSkills() {

  const [skill, setSkill] = useState([]);

  useEffect(() => {
    skillList()
  }, []);

  const skillList=()=>{
    axios.get('/list-skills/').then((res)=>{
      console.log(res.data);
      setSkill(res.data)
    })
  }

  const rowData = skill?.map(skill => 
    {
      return {
        id : skill?.id,
        department : skill?.department,
        skill_name : skill?.skill_name,
      }
    })

 


  return (
    <div className='pending-table'>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rowData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>

        
        
        
    </div>
  )
}

export default AllSkills
