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


function SkillRequest() {


  const [passid, setPassid] = useState('');
  const [department, setDepatment] = useState('');
  const [skill_name, setSkill_name] = useState('');
  const naviagte = useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'skill_name', headerName: 'Skill Name', width: 220 },
  { field: 'department_id', headerName: 'Department Id', width: 220 },
  { field: 'department', headerName: 'Department', width: 220 },
   {field: 'reject', headerName: 'Accept', width: 250 , 
    renderCell: (cellvalues) => {
      return (
        <button
        className='btn-pending'
        onClick={()=>{
          console.log(cellvalues);
          setPassid(cellvalues.row.id)
          setDepatment(cellvalues.row.department_id)
          setSkill_name(cellvalues.row.skill_name)
          setOpen(true)
         }}>
          Accept
        </button>
      )
    }
    },
];

  const [skill, setSkill] = useState([]);
 

  useEffect(() => {
    SkillList()
  }, []);

  const SkillList=()=>{
    axios.get('/request-skill/').then((res)=>{
      setSkill(res.data)
    })
  }

  const rowData = skill?.map(skill => 
    {
      return {
        id : skill?.id,
        skill_name : skill?.skill_name,
        department_id : skill?.department_id.id,
        department : skill?.department_id.department_name,
      }
    })

    function refreshPage() {
      window.location.reload(false);
    }


    const handleSkillAdd=()=>{
      axios.post(`/accept-skill/?id=${passid}`,{
        department : department,
        skill_name: skill_name,
  }).then((res)=>{
        console.log(res.data);
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
              Accept 
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Do you really want to Add the Category<br/>
              <button onClick={handleSkillAdd} style={{border:"2px solid #cc0e15", color:"#fff" , background:"#000"}}>
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

export default SkillRequest