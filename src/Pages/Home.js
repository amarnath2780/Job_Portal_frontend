import React, { useEffect, useState } from 'react'
import Fliterbar from '../Components/HomePage/Fliterbar';
import JobView from '../Components/HomePage/JobView';
import Filter from '../Components/HomePage/Filter';
import Navbar from '../Components/Navbar';
import JobDetails from '../Components/HomePage/JobDetails';
import axios from '../axios';
import bannerImages from '../Images/banner.png'
import ClockLoader from "react-spinners/ClockLoader";

function Home() {

  const [search, setSearch] = useState('');
  const [job, setJob] = useState([]);
  const [userCategory, setUserCategory] = useState(1);
  const [loading, setloading] = useState(false);
  const profile_id = localStorage.getItem("profile_id")

  /* Filter Values */
  const [filter, setFilter] = useState({});

  const getData = (data) =>{
    axios.get(`search-filter/?search=${data}`).then((res)=>{
      setJob(res.data)
  })
  }

  const getFilter = (data) =>{
    console.log(data.category);
    axios.get(`filter-job/?category=${data.category}&department=${data.department}&level=${data.level}&experience=&job_type=${data.type}`).then((res)=>{
      setJob(res.data)
  })
  }

  useEffect(() => {
    UserCategory()
    BannerImg()
    setloading(true)
  }, []);

  const UserCategory=()=>{
    axios.get(`view-profile/?id=${profile_id}`).then((res)=>{
      setUserCategory(res.data.category)
      console.log('category',res.data.category);
      axios.get(`filter-job/?category=${res.data.category.id}&department=&level=&experience=&job_type=`).then((res)=>{
        setJob(res.data)
        setloading(false)
    })
  })
  }

  const [banner, setBanner] = useState('');



  const BannerImg=()=>{
    axios.get('/banner/?id=1').then((res)=>{
      console.log(res.data);
      setBanner(res.data)
  })
  }

  const BANNER_URL = `https://timbre-shop.shop${banner.image}`


  return (
    <div>
      {loading ? 
          <div id='loading'>
          <ClockLoader
          color="#3ac2e6"
          loading={loading}
          cssOverride={{}}
        />
        </div> : <>
      <div style={{position: 'fixed', width:'100%'}}>
      <Navbar onData={getData} style={{position: 'fixed'}}/>
      </div>
        <div className="home-page-banner">
          <div className="banner-image">
            <img src={BANNER_URL} style={{width: '100%' ,marginTop: '30px'}} alt="" />
          </div>
        </div>

      <div className='job-View-set'>
        <Filter onFilter={getFilter}/>
        <JobView job={job}/>
      </div></>}
    </div>
  )
}

export default Home
