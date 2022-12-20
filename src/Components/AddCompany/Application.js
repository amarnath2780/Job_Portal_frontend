import React, { useContext } from 'react'
import { useEffect , useState ,useRef} from 'react'
import logo from '../../Images/s.png';
import art from '../../Images/art.png';
import './SelectComapy.css'
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AuthContext from '../../Context/AuthContext';



const USER_REGEX = /^[a-zA-Z]{1,100}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,16}$/;
const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const MOBILE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const APLLICATION_URL='/application/';





function Application() {

  const profile_id = localStorage.getItem("profile_id")

  const  {Userlogin,errors,show,handleClose,handleCloses,setApplied,opens}= useContext(AuthContext)

  const userRef = useRef()
  const errRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    listCompany()
  }, []);



  const [email, setemail] = useState('');
  const [validname, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [fname, setFname] = useState('');
  const [validFname, setValidFname] = useState('');
  const [fnameFocus, setfnameFocus] = useState('');

  const [lname, setLname] = useState('');
  const [validLname, setValidLname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);

  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  
  const [city, setCity] = useState('');
  const [validCity, setValidCity] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);

  const [state, setState] = useState('');
  const [validState, setValidState] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);

  const [country, setCountry] = useState('');
  const [validCountry, setValidCountry] = useState(false);
  const [countryFocus, setCountryFocus] = useState(false);

  const [company, setCompany] = useState('');

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
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
  }, [email]);
  
  useEffect(() => {
    const result = USER_REGEX.test(lname)
    setValidLname(result)
  }, [lname]);

  useEffect(() => {
    const result = MOBILE_REGEX.test(phone)
    setValidPhone(result)
  }, [phone]);

  useEffect(() => {
    const result = USER_REGEX.test(city)
    setValidCity(result)
  }, [city]);
  
  useEffect(() => {
    const result = USER_REGEX.test(state)
    setValidState(result)
  }, [state]);
  
  useEffect(() => {
    const result = USER_REGEX.test(country)
    setValidCountry(result)
  }, [country]);


  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    setValidPass(result)
  }, [pass]);

  useEffect(() => {
  setErrMsg('')
  }, [ fname, lname, email, phone , city , state , country , pass  ]);


  const applicationHandler=(e)=>{
    e.preventDefault()

    axios.post(`/application/?id=${profile_id}` , {
      first_name :fname,
      last_name : lname,
      company: company,
      email:email,
      phone:phone,
      city:city,
      state:state,
      country:country,
      pass:pass,

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
      setCompanyList(res.data)
    })
  }



  const handleselect=(e)=>{
    setCompany(e.target.value)
  }




  return (
    <div className='add-company'>
        
        <div className='Content'>
        <form onSubmit={applicationHandler} >
        {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{errMsg}</Alert></Stack> : ''}
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

        {/* emial */}
        <label htmlFor="email">Email
        <FontAwesomeIcon icon={faCheck} className={validname ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validname || !email ? "hide" : "invalid"} />
         </label>
        <input type="text"
        id='email'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setemail(e.target.value)}
        required
        aria-invalid={validname ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setEmailFocus(true)}
        onBlur={()=> setEmailFocus(false)}/>

        <p id="uidnote" className={emailFocus && email && !validname ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
        </p>

        {/* End email */}

        {/* Phone number */}
        <label htmlFor="mobile">Mobile Number
        <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
         </label>
        <input type="text"
        id='mobile'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setPhone(e.target.value)}
        required
        aria-invalid={validPhone ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setPhoneFocus(true)}
        onBlur={()=> setPhoneFocus(false)}/>

        <p id="uidnote" className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Entre Your Country code (eg: +91) <br/>
            Only numbers allowed.<br/>
            must have 10 numbers
        </p>


        {/* End Phone number */}

        {/* Company */}
        <label htmlFor="company">Company</label>
        <select onChange={handleselect} name="company" id="">
          <option>Select</option>
        {companyList ? companyList.map((item ,key)=>
          <option key={item.id} value={item.id}>{item.company_name}</option>
        ) : ''}
        </select>
        {/* end Company */}

        {/* city */}
        <label htmlFor="city">City
            <FontAwesomeIcon icon={faCheck} className={validCity ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validCity || !city ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='city'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setCity(e.target.value)}
            required
            aria-invalid={validCity ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setCityFocus(true)}
            onBlur={()=> setCityFocus(false)}/>
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

        {/* password */}
        <label htmlFor="pass">Security Code
        <FontAwesomeIcon icon={faCheck} className={validPass ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validPass || !pass ? "hide" : "invalid"} />
         </label>
        <input type="password"
        id='pass'
        name='pass'
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


        <button type='submit' disabled={ !validPass ||  !validFname  ||!validLname  ||!validname ||!validPhone ||!validCity ||!validState ||!validCountry  ? true : false}>Sign Up</button>
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
