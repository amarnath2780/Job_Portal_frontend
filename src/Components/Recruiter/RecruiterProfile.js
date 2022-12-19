import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from '../../axios';
import EditIcon from '@mui/icons-material/Edit';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function RecruiterProfile() {
    const user = localStorage.getItem("userId")
    const profile_id = localStorage.getItem("profile_id")
    
    const [snack, setsnack] = useState(false);
    const [profile, setprofile] = useState([]);
    const [details, setDetails] = useState([]);
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [Img, setImg] = useState();
    const [cat, setCat] = useState([]);
    const [categoryValue, setcategoryValue] = useState('');
    const [message, setMessage] = useState('');
    const [is_requested, setIs_requested] = useState();
    const [is_acceped, setIs_acceped] = useState();
    const [is_rejected, setIs_rejected] = useState();


    const BASEURL =`https://timbre-shop.shop${profile.profie_pic}`

    useEffect(() => {
        userProfile()
        userdetails()
        ListCategory()
    }, []);

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setsnack(false);
    };

    const handleClose = () => setsnack(false);

    const userProfile=()=>{
        axios.get(`/recruiter-profile/?id=${profile_id}`).then((res)=>{
            setprofile(res.data)
            setState(res.data.state)
            setCountry(res.data.country)
            setcategoryValue(res.data.category.id)
            setIs_requested(res.data.is_requested)
            setIs_acceped(res.data.is_acceped)
            setIs_rejected(res.data.is_rejected)
          })
    }

    const ListCategory=()=>{
        axios.get('/list-category/').then((res)=>{
            setCat(res.data)
        })
    }


    const userdetails=()=>{
        axios.get(`/user-details/?id=${user}`).then((res)=>{
            setDetails(res.data)
          })
    }

    function refreshPage() {
        window.location.reload(false);
      }

    const profileUpdate=(e)=>{
        const formData = new FormData()
        formData.append('profie_pic' , Img)
        formData.append('recruiter' , user)
        formData.append('state' , state)
        formData.append('country' , country)
        formData.append('category' , categoryValue)
        formData.append('is_requested' , is_requested)
        formData.append('is_acceped' , is_acceped)
        formData.append('is_rejected' , is_rejected)

       

        e.preventDefault()
        let url = `/updata-reqruiter-profile/?id=${profile_id}`
        axios.put(url , formData).then((res)=>{
            refreshPage()
            setMessage(res.data.message);
            setsnack(true);
          })
    }

  return (
    <div className='profile-page'>
         
        
        <Paper elevation={8} >
        <h5 style={{textAlign:"center"}}>Profile page</h5>
        <form action="" onSubmit={profileUpdate}>
            <div className='profile-content'>
                <div className='profile-img'>
                    <img src={BASEURL} alt="" />   
                <label htmlFor="upload-file"><EditIcon/></label>
                <input type="file" id='upload-file' onChange={(e)=>{
                    console.log(e.target.files);
                    setImg(e.target.files[0])
                }}  hidden/>
                </div>
        
                <div className='profile' style={{marginTop: "2rem"}}>
                    <h5>Full Name :  {details.first_name} {details.middle_name} {details.last_name} </h5>
                    <p>Email : {details.email}</p>
                    <p>Phone : {details.phone_number}</p>
                    <hr />

                    <div className='profile-update'>
                       
                            <label htmlFor="">About</label>
                            <textarea type="text" name="" id="" />
                            <label htmlFor="">Category</label>
                            <select name="" id="" placeholder={categoryValue} onChange={(e)=>setcategoryValue(e.target.value)}>
                            {cat ? cat.map((item,key)=>
                                <option value={item.id}>{item.category_name}</option>
                                ):''}
                            </select>
                            <label htmlFor="">State</label>
                            <input type="text" name="" id="" onChange={(e) => setState(e.target.value)}  placeholder={state}/>
                            <label htmlFor="">Country</label>
                            <input type="text" name="" id="" onChange={(e) => setCountry(e.target.value)} placeholder={country}/>
                            
                            <div className='update-button'>
                                <button type='submit'>update</button>
                            </div>
                        
                    </div>
                </div>
            </div> 
            </form>
        </Paper>


        <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
        {message}
         </Alert>
         </Snackbar>
    </div>
  )
}

export default RecruiterProfile
