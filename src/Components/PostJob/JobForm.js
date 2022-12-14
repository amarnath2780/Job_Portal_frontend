import React, { useContext } from 'react'
import { useEffect , useState ,useRef} from 'react'
import logo from '../../Images/s.png';
import art from '../../Images/art.png';
import '../AddCompany/SelectComapy.css';
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AuthContext from '../../Context/AuthContext';
import Checkbox from '@mui/material/Checkbox';




const USER_REGEX = /^(?!\s*$).+/;
const NUMBER_REGEX = /^[0-9\b]+$/
const EMPTY_REGEX = /^(?!\s*$).+/





function Application() {

  const  {Userlogin,errors,show,handleClose,handleCloses,setApplied,opens}= useContext(AuthContext)
  const user_id = localStorage.getItem("userId")
  const userRef = useRef()
  const errRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    listCompany()
  }, []);





  const [title, setTitle] = useState('');
  const [validTitle, setValidTitle] = useState('');
  const [TitleFocus, setTitleFocus] = useState('');

  const [min_sal, setMin_sal] = useState('');
  const [validMin_sal, setValidMin_sal] = useState(false);
  const [min_salFocus, setMin_salFocus] = useState(false);
  
  const [max_sal, setMax_sal] = useState('');
  const [validMax_sal, setValidMax_sal] = useState(false);
  const [max_salFocus, setMax_salFocus] = useState(false);

  const [job_type, setJob_type] = useState('');
  const [validJob_type, setValidJob_type] = useState(false);
  const [job_typeFocus, setJob_typeFocus] = useState(false);
  
  const [sal_type, setSal_type] = useState('');
  const [validSal_type, setValidSal_type] = useState(false);
  const [sal_typeFocus, setSal_typeFocus] = useState(false);
  
  const [quali, setQuali] = useState('1');
  const [validQuali, setValidQuali] = useState(false);
  const [qualiFocus, setQualiFocus] = useState(false);

  const [About, setAbout] = useState('');
  const [validAbout, setValidAbout] = useState(false);
  const [AboutFocus, setAboutFocus] = useState(false);

  const [short_discription, setshort_discription] = useState('');
  const [validshort_discription, setValidshort_discription] = useState(false);
  const [short_discriptionFocus, setshort_discriptionFocus] = useState(false);
  
  const [state, setState] = useState('');
  const [validState, setValidState] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);

  const [country, setCountry] = useState('');
  const [validCountry, setValidCountry] = useState(false);
  const [countryFocus, setCountryFocus] = useState(false);

  const [company, setCompany] = useState('1');
  const [checked, setChecked] = useState(false);

  const [seat, setSeat] = useState('');
  const [validSeat, setValidSeat] = useState(false);
  const [seatFocus, setSeatFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(title)
    setValidTitle(result)
  }, [title]);
  
  useEffect(() => {
    const result = NUMBER_REGEX.test(min_sal)
    setValidMin_sal(result)
  }, [min_sal]);
  
  useEffect(() => {
    const result = NUMBER_REGEX.test(max_sal)
    setValidMax_sal(result)
  }, [max_sal]);
  
  useEffect(() => {
    const result = EMPTY_REGEX.test(job_type)
    setValidJob_type(result)
  }, [job_type]);
  
  useEffect(() => {
    const result = EMPTY_REGEX.test(sal_type)
    setValidSal_type(result)
  }, [sal_type]);
  
  useEffect(() => {
    const result = EMPTY_REGEX.test(quali)
    setValidQuali(result)
  }, [quali]);
  
  useEffect(() => {
    const result = EMPTY_REGEX.test(About)
    setValidAbout(result)
  }, [About]);

  useEffect(() => {
    const result = EMPTY_REGEX.test(short_discription)
    setValidshort_discription(result)
  }, [short_discription]);
  
  useEffect(() => {
    const result = USER_REGEX.test(state)
    setValidState(result)
  }, [state]);
  
  useEffect(() => {
    const result = USER_REGEX.test(country)
    setValidCountry(result)
  }, [country]);

  useEffect(() => {
    const result = NUMBER_REGEX.test(seat)
    setValidSeat(result)
  }, [seat]);


  useEffect(() => {
  setErrMsg('')
  }, [ title, min_sal, max_sal, job_type , sal_type , quali , About ,short_discription  ,state ,country , seat]);


  const applicationHandler=(e)=>{
    e.preventDefault()

    axios.post('/post-job/' , {
        job_title:title,
        company_id: company,
        recruiter_id:user_id,
        min_salary:min_sal,
        max_salary:max_sal,
        salary_type:sal_type,
        job_type:job_type,
        qualification:quali,
        full_discription:About,
        short_discription:short_discription,
        state:state,
        country:country,
        vacancy:seat,
        urgent:checked,
    }).then((res)=>{
      navigate('/page')

      if (res.data.error){
        setErrMsg('Security code is not Valid')
      }
      if(res.data.message == 'created successfully'){
        console.log('not it iss')
      }
    })
    setErrMsg('Data Aleady exists');
  }

  const [companyList, setCompanyList] = useState([]);

  const listCompany=()=>{
    axios.get('/company-list/').then((res)=>{
      console.log(res.data);
      setCompanyList(res.data)
    })
  }



  const handleselect=(e)=>{
    console.log(e.target.value);
    setCompany(e.target.value)
  }

  const handlesalary=(e)=>{
    console.log(e.target.value);
    setSal_type(e.target.value)
  }

  const handlequlification=(e)=>{
    console.log(e.target.value);
    setQuali(e.target.value)
  }

  const handlejob_type=(e)=>{
    console.log(e.target.value);
    setJob_type(e.target.value)
  }


  return (
    <div className='add-company'>
        
        <div className='Content'>
        <form onSubmit={applicationHandler} >
        {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{errMsg}</Alert></Stack> : ''}
            {/* title name */}
            <label htmlFor="fname">Job Title
            <FontAwesomeIcon icon={faCheck} className={validTitle ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validTitle || !title ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='fname'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setTitle(e.target.value)}
            required
            aria-invalid={validTitle ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setTitleFocus(true)}
            onBlur={()=> setTitleFocus(false)}/>

            {/* End title name */}

            {/* Company */}
                <label htmlFor="company">Company</label>
                <select onChange={handleselect} name="company" id="company">
                <option>Select</option>
                {companyList ? companyList.map((item ,key)=>
                <option key={item.id} value={item.id}>{item.company_name}</option>
                ) : ''}
                </select>
            {/* end Company */}


          {/* minimum salary */}
          <label htmlFor="min_sal">Minimum Salary
          </label>
          <input type="text"
          id='min_sal'
          ref={userRef} 
          autoComplete="off"
          onChange={(e) => setMin_sal(e.target.value)}
          aria-invalid={validMin_sal ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={()=>setMin_salFocus(true)}
          onBlur={()=> setMin_salFocus(false)}/>
          {/* end minimum salary */}


          {/* Maximum salary */}
          <label htmlFor="max_sal">Maximum Salary
          <FontAwesomeIcon icon={faCheck} className={validMax_sal ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validMax_sal || !max_sal ? "hide" : "invalid"} />
          </label>
          <input type="text"
          id='max_sal'
          ref={userRef} 
          autoComplete="off"
          onChange={(e) => setMax_sal(e.target.value)}
          aria-invalid={validMin_sal ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={()=>setMax_salFocus(true)}
          onBlur={()=> setMax_salFocus(false)}/>
          {/* end Maximum salary */}

        {/* Salary type */}
        <label htmlFor="Salary-type">Salary Type</label>
            <select onChange={handlesalary} name="Salary-type" id="salary-type">
            <option>Select</option>
            <option key='a month' value='a month'>a month</option>
            <option key='a year' value='a year'>a year</option>
            </select>
        {/* End Salary type */}
        

        {/* Job type */}
        <label htmlFor="company">Job Type</label>
            <select onChange={handlejob_type} name="company" id="job-type">
            <option>Select</option>
            <option key='part-time' value='part-time'>Part Time</option>
            <option key='full-time' value='full-time'>Full Time</option>
            <option key='intern' value='intern'>Intern</option>
            <option key='remort' value='remort'>Remort</option>
            <option key='work-from-home' value='work-from-home'>Work From Home</option>
            </select>
        {/* End Job type */}


        {/* Qualification */}
        <label htmlFor="company">Minimums Qualification</label>
            <select onChange={handlequlification} name="company" id="qualification">
            <option>Select</option>
            <option key='1' value='1'>Masters</option>
            <option key='2' value='2'>Under Graducation</option>
            <option key='3' value='3'>Higher Secondary</option>
            <option key='4' value='4'>SSLC</option>
            </select>
        {/* End Qualification */}

        
        {/* About */}
        <label htmlFor="About">Full Job Discription
            <FontAwesomeIcon icon={faCheck} className={validAbout ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validAbout || !About ? "hide" : "invalid"} />
            </label>
            <textarea type="text"
            id='About'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setAbout(e.target.value)}
            required
            aria-invalid={validAbout ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setAboutFocus(true)}
            onBlur={()=> setAboutFocus(false)}/>
        {/* end city */}


        {/* About */}
        <label htmlFor="About">Short Job Discription
            <FontAwesomeIcon icon={faCheck} className={validshort_discription ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validshort_discription || !short_discription ? "hide" : "invalid"} />
            </label>
            <textarea type="text"
            id='About'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setshort_discription(e.target.value)}
            required
            aria-invalid={validshort_discription ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setshort_discriptionFocus(true)}
            onBlur={()=> setshort_discriptionFocus(false)}/>
        {/* end city */}


        {/* state */}
        <label htmlFor="state">State
            <FontAwesomeIcon icon={faCheck} className={validState ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validState || !state ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='state'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setState(e.target.value)}
            required
            aria-invalid={validState ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setStateFocus(true)}
            onBlur={()=> setStateFocus(false)}/>

        {/* end state */}

        {/* country */}
        <label htmlFor="country">Country
            <FontAwesomeIcon icon={faCheck} className={validCountry ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validCountry || !country ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='country'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setCountry(e.target.value)}
            required
            aria-invalid={validCountry ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setCountryFocus(true)}
            onBlur={()=> setCountryFocus(false)}/>
        {/* end country */}

        {/* Vacancy */}
        <label htmlFor="pass">Vacancy
        <FontAwesomeIcon icon={faCheck} className={validSeat ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validSeat || !seat ? "hide" : "invalid"} />
         </label>
        <input type="password"
        id='pass'
        name='pass'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setSeat(e.target.value)}
        aria-invalid={validSeat ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setSeatFocus(true)}
        onBlur={()=> setSeatFocus(false)}/>
        {/* End password */}

        {/* Urgent or not */}
        <label htmlFor="pass">Urgent Recruitement</label>
        <Checkbox onClick={(e)=>{
            setChecked(!checked)
        }}></Checkbox>

        {/* Not Urgent or not */}


        <button type='submit' disabled={ !title ||  !min_sal  ||!max_sal  ||!job_type ||!sal_type ||!quali ||!validState ||!validCountry ||!require ||!seat ? true : false}>Sign Up</button>
        </form>
        </div>


        <div className='card-section'>
            <div className='card'>
                <div className='card-img'>
                    <img src={logo} alt="logp" />
                </div>
                <div className='card-content'>
                <hr></hr>
                <p>Add Jobs get employees from TrabaJo</p>
                <img src={art} alt="" />
                </div>


        </div>
        </div>

    </div>
  )
}

export default Application
