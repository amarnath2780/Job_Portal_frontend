import React, { useRef  } from 'react'
import { useEffect , useState} from 'react'
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Register.css'
import axios from '../axios';
import { useNavigate } from "react-router-dom";


const USER_REGEX = /^[a-zA-Z]{2,40}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const MOBILE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/


const REGISTER_URL = '/user/signup';



function Register() {

  const userRef = useRef()
  const fnameRef = useRef()
  const errRef = useRef()
  
  const navigate = useNavigate()

  const [email, setemail] = useState('');
  const [validname, setValidname] = useState(false);
  const [userFocus, setUserFocus] = useState(false);


  const [fname, setfname] = useState('');
  const [validFname, setValidFname] = useState(false);
  const [FnameFocus, setFnameFocus] = useState(false);



  const [mname, setMname] = useState('');
  const [validMname, setValidMname] = useState(false);
  const [mnameFocus, setMnameFocus] = useState(false);
  
  const [lname, setLname] = useState('');
  const [validLname, setValidLname] = useState(false);
  const [LnameFocus, setLnameFocus] = useState(false);
  
  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  
  const [pass, setPass] = useState('');
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [role, setRole] = useState('');
  const [validRole, setValidRole] = useState(false);
  const [roleFocus, setRoleFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    console.log(result);
    console.log(email);
    setValidname(result)
  }, [email]);

  useEffect(() => {
    const result = USER_REGEX.test(fname)
    console.log(result);
    console.log(mname);
    setValidFname(result)
  }, [fname]);
  
  useEffect(() => {
    const result = USER_REGEX.test(mname)
    console.log(result);
    console.log(mname);
    setValidMname(result)
  }, [mname]);


  useEffect(() => {
    const result = USER_REGEX.test(lname)
    console.log(result);
    console.log(lname);
    setValidLname(result)
  }, [lname]);


  useEffect(() => {
    const result = MOBILE_REGEX.test(phone)
    console.log(result);
    console.log(phone);
    setValidPhone(result)
  }, [phone]);

  useEffect(() => {
    const result = USER_REGEX.test(role)
    console.log(result);
    console.log(role);
    setValidRole(role)
  }, [role]);

  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    console.log(result);
    console.log(pass);
    setValidPass(result)

    const match = pass === matchPass;
    setValidMatch(match);
    
  }, [pass , matchPass]);



useEffect(() => {
setErrMsg('')
}, [email , pass , fname , lname, mname ,role , phone , matchPass]);

  const registerHandler=(e)=>{
    e.preventDefault()

        axios.post('user/signup/',{
        first_name:fname,
        last_name:lname,
        middle_name : mname,
        email:email,
        phone_number:phone,
        password:pass,
        role:role,
    }).then((res)=>{
        console.log(res.data,'data ann')
        navigate('/')
        if (res.data.error){
          setErrMsg('Someting is wrong')
          console.log(res.data.error)
         
        if(res.data.mobile){
          
            console.log('get the mobile')
  
        }
        setErrMsg('User already exist')
      }
    })


   
      console.log('successss')
    }
 

    

  return (

    <div className='reg-app'>
    {success ? (
        <section>
            
        </section>
    ) : (

    
    <section className='register'>


      <p  ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


      <h1>Register</h1>


      <form  onSubmit={registerHandler}>
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
        onFocus={()=>setUserFocus(true)}
        onBlur={()=> setUserFocus(false)}/>

        <p id="uidnote" className={userFocus && email && !validname ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
        </p>

        {/* End email */}

        {/* First name */}

        <label htmlFor="fname">First Name
        <FontAwesomeIcon icon={faCheck} className={validFname ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validFname || !fname ? "hide" : "invalid"} />
         </label>
        <input type="text"
        id='fname'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setfname(e.target.value)}
        required
        aria-invalid={validFname ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setFnameFocus(true)}
        onBlur={()=> setFnameFocus(false)}/>

        <p id="uidnote" className={FnameFocus && fname && !validFname ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            1 to 40 characters.<br />
            Must begin with a letter.<br />
            numbers, underscores, hyphens not allowed.
        </p>

        {/* End First name */}

        {/* middle name */}

        <label htmlFor="mname">Middle Name
        <FontAwesomeIcon icon={faCheck} className={validMname ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validMname || !mname ? "hide" : "invalid"} />
         </label>
        <input type="text"
        id='mname'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setMname(e.target.value)}
        required
        aria-invalid={validMname ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setMnameFocus(true)}
        onBlur={()=> setMnameFocus(false)}/>

        <p id="uidnote" className={mnameFocus && mname && !validMname ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            1 to 40 characters.<br />
            Must begin with a letter.<br />
            numbers, underscores, hyphens not allowed.
        </p>
        
        {/* End middle name */}


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
        required
        aria-invalid={validLname ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setLnameFocus(true)}
        onBlur={()=> setLnameFocus(false)}/>

        <p id="uidnote" className={LnameFocus && lname && !validLname ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            1 to 40 characters.<br />
            Must begin with a letter.<br />
            numbers, underscores, hyphens not allowed.
        </p>


        {/* end last name */}
        

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



        {/* Role  */}
        <label htmlFor="role">Role
        <FontAwesomeIcon icon={faCheck} className={validRole ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validRole || !role ? "hide" : "invalid"} />
         </label>
        <input type="text"
        id='role'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setRole(e.target.value)}
        required
        aria-invalid={validRole ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setRoleFocus(true)}
        onBlur={()=> setRoleFocus(false)}/>

        <p id="uidnote" className={roleFocus && phone && !validRole ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Seeker or Recruiter
        </p>


        {/* End Role */}


        {/* password */}
        <label htmlFor="pass">Password
        <FontAwesomeIcon icon={faCheck} className={validPass ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validPass || !pass ? "hide" : "invalid"} />
         </label>
        <input type="password"
        id='pass'
        ref={userRef} 
        autoComplete="off"
        onChange={(e) => setPass(e.target.value)}
        required
        aria-invalid={validPass ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setPassFocus(true)}
        onBlur={()=> setPassFocus(false)}/>

        <p id="uidnote" className={passFocus && pass &&  !validPass ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
               8 to 24 characters.<br />
               Must include uppercase and lowercase letters, a number and a special character.<br />
               Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </p>

        {/* End password */}

        {/* Conform password */}
        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPass ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPass ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPass(e.target.value)}
                            value={matchPass}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
          {/* end conform password */}

          <button disabled={!validname || !validPass || !validMatch ||!validPhone || !validFname || !validMname ||!validLname ? true : false}>Sign Up</button>

      </form>

    </section>
  )}

</div>
  )
    }

export default Register
