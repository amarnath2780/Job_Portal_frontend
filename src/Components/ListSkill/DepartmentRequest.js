import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';
import ResponsiveDialog from './Popup';
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


function DepartmentRequest() {


  const [passid, setPassid] = useState('');
  const [category, setCategory] = useState('');
  const [dep, setDep] = useState('');
  const naviagte = useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'department', headerName: 'Department Name', width: 220 },
  { field: 'category_id', headerName: 'Category Id', width: 320 },
  { field: 'category', headerName: 'Category', width: 320 },
   {field: 'reject', headerName: 'Accept', width: 250 , 
    renderCell: (cellvalues) => {
      return (
        <button
        className='btn-pending'
        onClick={()=>{
          setPassid(cellvalues.row.id)
          setCategory(cellvalues.row.category_id)
          setDep(cellvalues.row.department)
          setOpen(true)
         }}>
          Accept
        </button>
      )
    }
    },
];

  const [department, setDepartmentl] = useState([]);
 

  useEffect(() => {
    DepartmentList()
  }, []);

  const DepartmentList=()=>{
    axios.get('/request-departments/').then((res)=>{
      setDepartmentl(res.data)
    })
  }

  const rowData = department?.map(department => 
    {
      return {
        id : department?.id,
        department : department?.department_name,
        category_id : department?.category.id,
        category : department?.category_id.category_name,
      }
    })

    function refreshPage() {
        window.location.reload(false);
      }

    const acceptDepartment=()=>{
      axios.post(`/accept-department/?id=${passid}`,{
        category:category,
        department_name : dep,
    }).then((res)=>{
        setOpen(false)
        refreshPage()
        naviagte('/requests')
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
              Accept "{category}"
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Do you really want to Add the Category<br/>
              <button onClick={acceptDepartment} style={{border:"2px solid #cc0e15", color:"#fff" , background:"#000"}}>
                Accept
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

export default DepartmentRequest
