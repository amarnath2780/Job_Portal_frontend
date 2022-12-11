import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from '../../axios';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  

function ProfilePage() {
    const user = localStorage.getItem("userId")
    const profile_id = localStorage.getItem("profile_id")


    const [profile, setprofile] = useState([]);
    const [details, setDetails] = useState([]);
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [experince, setExperince] = useState('');
    const [categeryValue, setCategeryValue] = useState('');
    const [departmentValue, setDepartmentValue] = useState('');
    const [level, setlevel] = useState('');


    const [Img, setImg] = useState();
    const [dep, setDep] = useState([]);
    const [cat, setCat] = useState([]);
    const [snack, setsnack] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [userProfiles, setUserProfiles] = useState([]);

    const BASEURL =`http://127.0.0.1:8000${profile.profie_pic}`

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setsnack(false);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        userProfile()
        userdetails()
        ListDepartment()
        ListCategory()
        UserCategory()
    }, []);

    const ListDepartment=()=>{
        axios.get('/list-department/').then((res)=>{
            setDep(res.data)
        })
    }

    const ListCategory=()=>{
        axios.get('/list-category/').then((res)=>{
            setCat(res.data)
        })
    }

    const userProfile=()=>{
        axios.get(`/view-profile/?id=${profile_id}`).then((res)=>{
            setprofile(res.data)
          })
    }


    const userdetails=()=>{
        axios.get(`/user-details/?id=${user}`).then((res)=>{
            setDetails(res.data)
          })
    }

    const UserCategory=()=>{
        axios.get(`view-profile/?id=${profile_id}`).then((res)=>{
            setCategeryValue(res.data.category.id);
            setDepartmentValue(res.data.department);
            setExperince(res.data.experince);
            setlevel(res.data.level)
            setState(res.data.state)
            setCountry(res.data.country)
            setUserProfiles(res.data)
      })
    }

    function refreshPage() {
        window.location.reload(false);
      }

    const profileUpdate=(e)=>{
        const formData = new FormData()
        formData.append('profie_pic' , Img)
        formData.append('seeker' , user)
        formData.append('state' , state)
        formData.append('country' , country)
        formData.append('category' , categeryValue)
        formData.append('department' , departmentValue)
        formData.append('level' , level)
        formData.append('experince' , experince)

        e.preventDefault()
        let url = `/update-profile/?id=${profile_id}`
        axios.put(url , formData).then((res)=>{
            console.log(res.data);
            refreshPage()
            setMessage(res.data.message)
            setsnack(true)
        })
    }

  return (
    <div className='profile-page'>
         
        
        <Paper elevation={8}  style={{width: '410px'}}>
        <h5 style={{textAlign:"center", fontSize: '21px' , marginTop:'20px'}}>Profile page</h5>
        <form action="" onSubmit={profileUpdate}>
            <div className='profile-content'>
                <div className='profile-img'>
                    <img src={BASEURL} alt="" />   
                <label htmlFor="upload-file"><PhotoCameraIcon/></label>
                <input type="file" id='upload-file' onChange={(e)=>{
                    console.log(e.target.files);
                    setImg(e.target.files[0])
                }}  hidden/>
                </div>
        
                <div className='profile' style={{marginTop: "2rem"}}>
                    <h5 style={{fontSize: '21px'}} >Full Name :  {details.first_name} {details.middle_name} {details.last_name} </h5>
                    <p style={{fontSize: '17px'}} >Email : {details.email}</p> 
                    <p style={{fontSize: '17px'}} >Phone : {details.phone_number}</p>
                    <hr />

                    <div className='profile-update'>
                       
                            <label htmlFor="">About</label>
                            <textarea type="text" name="" id="" />

                            <label htmlFor="">Category</label>

                            <select name="" id="" placeholder={categeryValue} onChange={(e)=>setCategeryValue(e.target.value)}>
                            {cat ? cat.map((item,key)=>
                                <option value={item.id}>{item.category_name}</option>
                                ):''}
                            </select>
                            
                            <label htmlFor="">Department</label>
                            <select name="" id="" placeholder={departmentValue} onChange={(e)=>setDepartmentValue(e.target.value)}>
                                {dep ? dep.map((item,key)=>
                                <option value={item.id}>{item.department_name}</option>
                                ):''}
                            </select>

                            <label htmlFor="">Level</label>
                            <select name="" id="" placeholder={level} onChange={(e)=>setlevel(e.target.value)}>
                                <option value="fresher">Fresher</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="professional">Proffessional</option>
                            </select>

                            <label htmlFor="">Experince</label>
                            <input type="text" name="" id="" placeholder={experince} onChange={(e) => setExperince(e.target.value)}  f/>

                            <label htmlFor="">State</label>
                            <input type="text" name="" id=""  onChange={(e) => setState(e.target.value)}  placeholder={state}/>
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

export default ProfilePage
