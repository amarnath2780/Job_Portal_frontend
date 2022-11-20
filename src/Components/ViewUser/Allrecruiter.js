import React, { useEffect, useMemo, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from '../../axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 100 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'phone_number', headerName: 'Phone ', width: 200 },
  { field: 'role', headerName: 'Role', width: 100, 
  description: 'This column has a value getter and is not sortable.',
  sortable: false,},
];







function Allrecruiter() {

  const [recruiters, setRecruiter] = useState([]);

  useEffect(() => {
    recruiterList()
  }, []);

  const recruiterList=()=>{
    axios.get('/view-recruiters/').then((res)=>{
      setRecruiter(res.data)
    })
  }

  const rowData = recruiters?.map((recruiter => {
    return{
      id:recruiter?.first_name,
      last_name:recruiter?.last_name,
      email:recruiter?.email,
      phone_number: recruiter?.phone_number,
      role: recruiter?.role,
    }
  }))

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

export default Allrecruiter
