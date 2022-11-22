import React , { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';


function Rejected() {

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

  const [rejected, setRejected] = useState([]);

  useEffect(() => {
    RejectedList()
  }, []);

  const RejectedList=()=>{
    axios.get('/rejected-app/').then((res)=>{
      setRejected(res.data);
    })
  }


  const rowData = rejected?.map(rejected => 
    {
      return {
        id : rejected?.id,
        first_name : rejected?.first_name,
        last_name : rejected?.last_name,
        email: rejected?.email,
        phone:rejected?.phone,
        company:rejected?.company,
        city:rejected?.city,
        state:rejected?.state,
        country:rejected?.country,
        status:rejected?.status,
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

export default Rejected
