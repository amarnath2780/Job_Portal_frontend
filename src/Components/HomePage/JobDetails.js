import React , {useEffect , useState , useContext}from 'react'
import { JobContext } from '../../Context/JobContext';
import Navbar from '../Navbar'
import axios from '../../axios';


function JobDetails() {

  const [job, setJob] = useState([]);
  const {jobDetails} = useContext(JobContext);

  useEffect(() => {
    Job()
  }, []);


  const Job=()=>{
    axios.get(`/job/?id=${jobDetails}`).then((res)=>{
      console.log(res.data);
      setJob(res.data)
    })
  }

  return (
    <div className='job-details'>
      <Navbar/>
      <div className='card'>
        <h1>{job.job_title}</h1>
        <p>job type : {job.job_type}</p>
        <p>salary : {job.min_salary}</p>
        <p>{jobDetails}</p>
      </div>
    </div>
  )
}

export default JobDetails
