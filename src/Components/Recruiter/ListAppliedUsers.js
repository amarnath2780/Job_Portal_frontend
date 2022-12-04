import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../axios';
import ResponsiveDialog from '../ListSkill/Popup';
import AppliedJobDetails from './AppliedJobDetails'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});





function ListAppliedUsers({job}) {


  const [passid, setPassid] = useState('');

  const naviagte = useNavigate()

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  function refreshPage() {
    window.location.reload(false);
  }

  const [appliedJobId, setAppliedjobId] = useState('');
  const [seekerId, setSeekerId] = useState('');
  const [message, setMessage] = useState('');

  const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'first_name', headerName: 'First Name', width: 150 },
  { field: 'last_name', headerName: 'Last Name', width: 150 },
  { field: 'level', headerName: 'Level', width: 150 },
  { field: 'experince', headerName: 'Experince', width: 150 },
  { field: 'state', headerName: 'State', width: 150 },
  { field: 'phone', headerName: 'Mobile', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'shorlited', headerName: 'Is shortlisted', width: 200 },
  
  {field: 'resume', headerName: 'Resume', width: 250 , 
    renderCell: (cellvalues) => {
      const PDF_URL = `http://127.0.0.1:8000${cellvalues.row.resume}`
      return (
        <a id='resume' href={PDF_URL} target="_blank">Resume Pdf</a>
      )
    }
    },
    {field: 'shortlist', headerName: 'Short-List', width: 250 , 
    renderCell: (cellvalues) => {
      return (
        <button
        id='resume'
        className='btn-pending'
        onClick={()=>{
          console.log(cellvalues.row);
          setAppliedjobId(cellvalues.row.id)
          setSeekerId(cellvalues.row.seeker_id)
          setOpen(true)
         }}>
          Short-list
        </button>
      )
    }
    },
];

  const [skill, setSkill] = useState([]);

  const [snack, setsnack] = useState(false);

  useEffect(() => {
    skillList()
  }, []);

  const handleClick = () => {
    setsnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setsnack(false);
  };

  const skillList=()=>{
    axios.get('/list-skills/').then((res)=>{
      setSkill(res.data)
    })
  }

  const rowData = job?.map(job => 
    {
      return {
        id : job?.id,
        first_name: job?.seeker_id.seeker.first_name,
        last_name: job?.seeker_id.seeker.last_name,
        phone: job?.seeker_id.seeker.phone_number,
        seeker_id: job?.seeker_id.id,
        email: job?.seeker_id.seeker.email,
        state: job?.seeker_id.state,
        level: job?.seeker_id.level,
        experince: `${job?.seeker_id.experince}-years`,
        shorlited : job?.is_shortlisted,
        resume: job?.resume,
      }
    })


    const handleDelete=()=>{
      axios.post(`shortlist/?id=${appliedJobId}&uid=${seekerId}`).then((res)=>{
        setMessage(res.data.message);
        setOpen(false)
        setsnack(true);
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
              Shortlisting Application
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Do you really want to Shortlist The User<br/>
              <button onClick={handleDelete} style={{border:"2px solid #cc0e15", color:"#fff" , background:"#000"}}>
                Shortlist
              </button>
            </Typography>
          </Box>
        </Fade>
  </Modal>
      <Paper elevation={12} >
        <div style={{ height: 500, width: 1300 , position:"fixed" }}>
            <DataGrid
                rows={rowData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
      </Paper>

      <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
       {message}
       </Alert>
      </Snackbar>

        
        
        
    </div>
  )
}

export default ListAppliedUsers
