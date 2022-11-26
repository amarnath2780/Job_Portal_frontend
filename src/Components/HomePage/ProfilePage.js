import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import EditIcon from '@mui/icons-material/Edit';


function ProfilePage() {
    const user = localStorage.getItem("userId")
    console.log(user);

    const [profile, setprofile] = useState([]);
    const [details, setDetails] = useState([]);
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [Img, setImg] = useState();

    const BASEURL =`http://127.0.0.1:8000${profile.profie_pic}`

    useEffect(() => {
        userProfile()
        userdetails()
    }, []);

    const userProfile=()=>{
        axios.get(`/view-profile/?id=${user}`).then((res)=>{
            setprofile(res.data)
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
        formData.append('seeker' , user)
        formData.append('state' , state)
        formData.append('country' , country)

        e.preventDefault()
        let url = `/update-profile/?id=${user}`
        axios.put(url , formData).then((res)=>{
            refreshPage()
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
                            <select name="" id="">
                                <option value="">Someting</option>
                                <option value="">Full stack</option>
                                <option value="">Backend</option>
                            </select>
                            <label htmlFor="">State</label>
                            <input type="text" name="" id="" onChange={(e) => setState(e.target.value)}  defaultValue={profile.state}/>
                            <label htmlFor="">Country</label>
                            <input type="text" name="" id="" onChange={(e) => setCountry(e.target.value)} defaultValue={profile.country}/>
                            
                            <div className='update-button'>
                                <button type='submit'>update</button>
                            </div>
                        
                    </div>
                </div>
            </div> 
            </form>
        </Paper>
    </div>
  )
}

export default ProfilePage
