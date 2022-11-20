import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';

const columns = [
  { field: 'id', headerName: 'First Name', width: 150 },
  { field: 'last_name', headerName: 'Last name', width: 120 },
  { field: 'email', headerName: 'email', width: 250 },
  { field: 'phone_number', headerName: 'Phone number', width: 180 },
  { field: 'role', headerName: 'Role', width: 100,
  description: 'This column has a value getter and is not sortable.',
  sortable: false, },

  
];


function Allseekers() {

  const [seekers, setseekers] = useState([]);

  useEffect(() => {
    seekerList()
  }, []);

  const seekerList=()=>{
    axios.get('/view-seeker/').then((res)=>{
      setseekers(res.data)
    })
  }

  const rowData = seekers?.map(seekers => 
    {
      return {
        id : seekers?.first_name,
        first_name : seekers?.first_name,
        last_name : seekers?.last_name,
        email: seekers?.email,
        phone_number:seekers?.phone_number,
        role:seekers?.role
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

export default Allseekers
