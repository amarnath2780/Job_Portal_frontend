import React , { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';











function Pending() {

  const [pending, setPending] = useState([]);
  const [show, setShow] = useState(true);


  const handleReject=(cellvalues)=>{
    console.log(cellvalues.row);
    axios.put(`change-status/?id=${cellvalues.row.id}`,{
      first_name:cellvalues.row.first_name,
      last_name:cellvalues.row.last_name,
      email:cellvalues.row.email,
      phone:cellvalues.row.phone,
      company:cellvalues.row.company,
      city:cellvalues.row.city,
      state:cellvalues.row.state,
      country:cellvalues.row.country,
      status:"Rejected"
  }).then((res)=>{
      console.log(res.data);
      setShow(false)
      if (res.data.error){
        console.log(res.data.errors)
    }
  })
  }



  const handlePending=(cellvalues)=>{
    console.log(cellvalues.row);
    axios.put(`change-status/?id=${cellvalues.row.id}`,{
      first_name:cellvalues.row.first_name,
      last_name:cellvalues.row.last_name,
      email:cellvalues.row.email,
      phone:cellvalues.row.phone,
      company:cellvalues.row.company,
      city:cellvalues.row.city,
      state:cellvalues.row.state,
      country:cellvalues.row.country,
      status:"Approved"
  }).then((res)=>{
      console.log(res.data);
      setShow(false)
      if (res.data.error){
        console.log(res.data.errors)
    }
  })
  }

  const columns = [
    { field: 'id', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last name', width: 120 },
    { field: 'email', headerName: 'email', width: 250 },
    { field: 'phone', headerName: 'Phone number', width: 180 },
    { field: 'company', headerName: 'Role', width: 100,
    description: 'This column has a value getter and is not sortable.',
    sortable: false, },
    {field: 'accept', headerName: 'Accept', width: 250 , 
    renderCell: (cellvalues) => {
      return (
        <button
        className='btn-pending'
         onClick={(e)=>{
          handlePending(cellvalues)
         }}>
          Action
        </button>
      )
    }
    },
    {field: 'reject', headerName: 'Reject', width: 250 , 
    renderCell: (cellvalues) => {
      return (
        <button
        className='btn-pending'
         onClick={(e)=>{
          handleReject(cellvalues)
         }}>
          Reject
        </button>
      )
    }
    },
    
  ];
  

  useEffect(() => {
    pendingList()
  }, []);

  const pendingList=()=>{
    axios.get('/pending-app/').then((res)=>{
      setPending(res.data)
    })
  }

  const rowData = pending?.map(pending => 
    {
      return {
        id : pending?.id,
        first_name : pending?.first_name,
        last_name : pending?.last_name,
        email: pending?.email,
        phone:pending?.phone,
        company:pending?.company,
        city:pending?.city,
        state:pending?.state,
        country:pending?.country,
        status:pending?.status,
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

export default Pending
