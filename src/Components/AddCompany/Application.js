import React from 'react'
import { useEffect , useState ,useRef} from 'react'
import Select from 'react-select';
import logo from '../../Images/s.png';
import art from '../../Images/art.png';
import './SelectComapy.css'
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const USER_REGEX = /^[a-zA-Z]{1,100}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,16}$/;
const APLLICATION_URL='/application/';

const options = [
    { value: '1', label: 'Entrega' },
    { value: '1', label: 'Entrega' },
    { value: '1', label: 'Entrega' }
  ]



function Application() {

  const userRef = useRef()
  const errRef = useRef()

  const navigate = useNavigate()

  const [fname, setFname] = useState('');
  const [validFname, setValidFname] = useState('');
  const [fnameFocus, setfnameFocus] = useState('');

  const [lname, setLname] = useState('');
  const [validLname, setValidLname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);
  
  const [company, setCompany] = useState('');


  const [about, setAbout] = useState('');


  const [location, setLocation] = useState('');
  const [validLocation, setValidLocation] = useState(false);
  const [locationFocus, setLocationFocus] = useState(false);

  const [pass, setPass] = useState('');
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(fname)
    setValidFname(result)
  }, [fname]);
  
  useEffect(() => {
    const result = USER_REGEX.test(lname)
    console.log(result);
    setValidLname(result)
  }, [lname]);

  useEffect(() => {
    const result = USER_REGEX.test(location)
    setValidLocation(result)
  }, [location]);

  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    setValidPass(result)
  }, [pass]);

  useEffect(() => {
  setErrMsg('')
  }, [ pass , fname ,company, lname ,location ]);


  const applicationHandler=(e)=>{
    e.preventDefault()

    axios.post('/application/' , {
      first_name :fname,
      last_name : lname,
      company: company,
      loaction: location,
      about : about,
    }).then((res)=>{
      console.log(res.data,'data is here');
      navigate('/recruiter')

      if (res.data.error){
        setErrMsg('User already exist')
        console.log(res.data.error)
      }
    })
    console.log('successss')
  }



  return (
    <div className='add-company'>
        <p  ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className='Content'>
        <form onSubmit={applicationHandler} >

            {/* First name */}
            <label htmlFor="fname">First Name
            <FontAwesomeIcon icon={faCheck} className={validFname ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validFname || !fname ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='fname'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setFname(e.target.value)}
            required
            aria-invalid={validFname ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setfnameFocus(true)}
            onBlur={()=> setfnameFocus(false)}/>

            {/* End first name */}


        {/* last name */}
        <label htmlFor="lname">Last Name
        <FontAwesomeIcon icon={faCheck} className={validLname ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validLname || !lname ? "hide" : "invalid"} />
         </label>
        <input type="text"
        id='lname'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setLname(e.target.value)}
        aria-invalid={validLname ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setLnameFocus(true)}
        onBlur={()=> setLnameFocus(false)}/>
        {/* end last name */}

        {/* Company */}
        <label htmlFor="company">Select Your Company</label>
        <Select id='company' name='company' options={options} />
        {/* end Company */}


        {/* Loaction */}
        <label htmlFor="pass">Loaction
        <FontAwesomeIcon icon={faCheck} className={validLocation ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validLocation || !location ? "hide" : "invalid"} />
         </label>
        <input type="text"
        id='loaction'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setLocation(e.target.value)}
        aria-invalid={validLocation ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setLocationFocus(true)}
        onBlur={()=> setLocationFocus(false)}/>
        {/* END loaction */}

        {/* about */}
        <label htmlFor="founder">About</label>
        <textarea rows="10"></textarea>
        {/* end about */}


        {/* password */}
        <label htmlFor="pass">Security Code
        <FontAwesomeIcon icon={faCheck} className={validPass ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validPass || !pass ? "hide" : "invalid"} />
         </label>
        <input type="password"
        id='pass'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setPass(e.target.value)}
        aria-invalid={validPass ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setPassFocus(true)}
        onBlur={()=> setPassFocus(false)}/>

        <p id="uidnote" className={passFocus && pass &&  !validPass ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
               4 to 16 characters.<br />
               Must include  letters and a number <br />
              special characters Not Allowed: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </p>

        {/* End password */}


        <button disabled={ !validPass ||  !validFname  ||!validLname  || !validLocation  ? true : false}>Sign Up</button>
        </form>
        </div>


        <div className='card-section'>
            <div className='card'>
                <div className='card-img'>
                    <img src={logo} alt="logp" />
                </div>
                <div className='card-content'>
                <hr></hr>
                <p>Add you Company and Join with Trabajo</p>
                <img src={art} alt="" />
                </div>


        </div>
        </div>

    </div>
  )
}

export default Application
