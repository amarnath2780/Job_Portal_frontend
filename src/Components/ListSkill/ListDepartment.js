import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';
import DepartmentPopup from './DepartmentPopup'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #cc0e15',
  boxShadow: 24,
  color : "#cc0e15",
  p: 4,
};



function ListDepartment() {
  const [passid, setPassid] = useState('');
  const [department, setDepartment] = useState([]);

  const naviagte = useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);


  useEffect(() => {
    seekerList()
  }, []);


  const columns = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'department_name', headerName: 'Department Name', width: 350 },
    { field: 'category', headerName: 'Category_id', width: 200 },
    {field: 'accept', headerName: 'Edit', width: 250 , 
        renderCell: (cellvalues) => {
          return (
            <button
            style={{border:"none",background:"none"}}
            className='btn-pending'
             onClick={(e)=>{
              setPassid(cellvalues.row.id);
             }}>
              <DepartmentPopup id={passid}/>
            </button>
          )
        }
        },
        {field: 'reject', headerName: 'Remove', width: 250 , 
        renderCell: (cellvalues) => {
          return (
            <button
            className='btn-pending'
             onClick={()=>{
              setPassid(cellvalues.row.id)
              setOpen(true)
             }}>
              Remove
            </button>
          )
        }
        },
  ];
  

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

    function refreshPage() {
      window.location.reload(false);
    }

 const handleDelete=()=>{
  axios.get(`/delete-department/?id=${passid}`).then((res)=>{
    setOpen(false)
    refreshPage()
  })
 }


  return (
    <div className='pending-table'>

  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              delete id is {passid}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Do you really want to delete the description<br/>
              <button onClick={handleDelete} style={{border:"2px solid #cc0e15", color:"#fff" , background:"#000"}}>
                Delete
              </button>
            </Typography>
          </Box>
        </Fade>
  </Modal>


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
