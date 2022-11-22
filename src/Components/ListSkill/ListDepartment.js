import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';

const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'department_name', headerName: 'Department Name', width: 350 },
  { field: 'category', headerName: 'Category_id', width: 200 },

  
];


function ListDepartment() {

  const [department, setDepartment] = useState([]);

  useEffect(() => {
    seekerList()
  }, []);

  const seekerList=()=>{
    axios.get('/list-department/').then((res)=>{
      setDepartment(res.data)
    })
  }

  const rowData = department?.map(department => 
    {
      return {
        id : department?.id,
        category : department?.category,
        department_name : department?.department_name,
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

export default ListDepartment
