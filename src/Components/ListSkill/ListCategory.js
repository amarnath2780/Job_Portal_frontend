import React, { useEffect, useMemo, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from '../../axios';
import CategoryPopup from './CategoryPopup';
import DepartmentPopup from './DepartmentPopup'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
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


function ListCategory() {

  const [passid, setPassid] = useState('');

  const [category, setCategory] = useState([]);


  const naviagte = useNavigate()



  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'category_name', headerName: 'Category name', width: 300 },
    {field: 'accept', headerName: 'Accept', width: 250 , 
      renderCell: (cellvalues) => {
        return (
          <button
          style={{border:"none",background:"none"}}
          className='btn-pending'
           onClick={(e)=>{
            setPassid(cellvalues.row.id);
           }}>
            <CategoryPopup id={passid}/>
          </button>
        )
      }
      },
  ];

  useEffect(() => {
    categoryList()
  }, []);

  const categoryList=()=>{
    axios.get('/list-category/').then((res)=>{
      setCategory(res.data)
    })
  }

  const rowData = category?.map((category => {
    return{
      id:category?.id,
      category_name:category?.category_name,
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

export default ListCategory
