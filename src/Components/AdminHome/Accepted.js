import React , { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';







function Accepted() {

  const columns = [
    { field: 'id', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last name', width: 120 },
    { field: 'email', headerName: 'email', width: 250 },
    { field: 'phone', headerName: 'Phone number', width: 180 },
    { field: 'company', headerName: 'Role', width: 100,
    description: 'This column has a value getter and is not sortable.',
    sortable: false, },
    { field: 'status', headerName: 'Status', width: 130,
    description: 'This column has a value getter and is not sortable.',
    sortable: false, },
    
  ];

  const [acceped, setacceped] = useState([]);

  useEffect(() => {
   AccepedList()
  }, []);

  const AccepedList=()=>{
    axios.get('/accepted-app/').then((res)=>{
      setacceped(res.data);
    })
  }


  const rowData = acceped?.map(acceped => 
    {
      return {
        id : acceped?.id,
        first_name : acceped?.first_name,
        last_name : acceped?.last_name,
        email: acceped?.email,
        phone:acceped?.phone,
        company:acceped?.company,
        city:acceped?.city,
        state:acceped?.state,
        country:acceped?.country,
        status:acceped?.status,
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

export default Accepted
