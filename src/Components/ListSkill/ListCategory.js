import React, { useEffect, useMemo, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from '../../axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'category_name', headerName: 'Category name', width: 300 },
];







function ListCategory() {

  const [category, setCategory] = useState([]);

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
