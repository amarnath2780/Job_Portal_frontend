import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useContext} from 'react'
import { useEffect , useRef} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AuthContext from '../../Context/AuthContext';
import MuiAlert from '@mui/material/Alert';
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import logo from '../../Images/logo.png'
import InputIcon from '@mui/icons-material/Input';
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';



const USER_REGEX = /^[a-zA-Z]{2,80}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const MOBILE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const REGISTER_URL = '/user/signup';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



function Register() {

     const  {Userlogin,errors,setMobile,mobile}= useContext(AuthContext)

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

    const [snack, setsnack] = useState(false);
    const [open, setOpen] = useState(false);


    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setsnack(false);
    };

    const handleClose = () => setOpen(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);
    
    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        setValidname(result)
    }, [email]);

    useEffect(() => {
        const result = USER_REGEX.test(fname)
        setValidFname(result)
    }, [fname]);
    
    useEffect(() => {
        const result = USER_REGEX.test(mname)
        setValidMname(result)
    }, [mname]);


    useEffect(() => {
        const result = USER_REGEX.test(lname)
        setValidLname(result)
    }, [lname]);


    useEffect(() => {
        const result = MOBILE_REGEX.test(phone)
        setValidPhone(result)
    }, [phone]);

    useEffect(() => {
        const result = USER_REGEX.test(role)
        setValidRole(role)
    }, [role]);

    useEffect(() => {
        const result = PWD_REGEX.test(pass);
        setValidPass(result)
        const match = pass === matchPass;
        setValidMatch(match);
    }, [pass , matchPass]);

    useEffect(() => {
        setErrMsg('')
    }, [email , pass , fname , lname, mname ,role , phone , matchPass]);



    const registerHandler=(e)=>{

        if (email.trim().length ===0 || fname.trim().length === 0 || lname.trim().length === 0 || mname.trim().length === 0 || phone.trim().length === 0 || role.trim().length === 0){
            setErrMsg('Invalid Email or Password');
            e.preventDefault()
            setsnack(true)
            console.log('+91'.concat(phone));
        }
        else{
            e.preventDefault()

            const number = '+91'.concat(phone)
    
            axios.post('user/signup/',{
            first_name:fname,
            last_name:lname,
            middle_name : mname,
            email:email,
            phone_number:number,
            password:pass,
            role:role,
        }).then((res)=>{
            console.log('successss')
            navigate('/verify')
            if (res.data.Uncaught){
              setErrMsg('User already exist')
              
              console.log('eroor is here');
            if(res.data.mobile){
              
      
            }
            setErrMsg('User already exist')
          }
        })
        }
        }

  return (
    <div className='Login-page'>
        <header>
            <a class="linkedin-logo" href="/" aria-label="Linkedin"><li-icon tabindex="0" aria-label="LinkedIn" type="linkedin-logo" size="28dp" alt="LinkedIn" color="brand" role="banner"><img id='logoImg' src={logo} alt="logp" /></li-icon></a>
        </header>
        <div className="login-page" style={{marginBottom:"2rem" }}>
            <main>
                <div className="card-layout">
                    <div className="organic-div">
                        <div className="header_content">
                            <h1 class="header__content__heading ">Sign Up</h1>
                            <p class="header__content__subheading ">Stay updated on your professional world</p>
                        </div>

                        <form onSubmit={registerHandler} className="login_form">
                           {/* FirstName */}
                            <div className="form__input--floating mt-24">
                            <label htmlFor="fname">
                                <FontAwesomeIcon icon={faCheck} className={validFname ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validFname || !fname ? "hide" : "invalid"} />
                            </label>
                                <input 
                                    type="text"
                                    placeholder='First Name'
                                    id='fname'
                                    ref={userRef} 
                                    autoComplete="off"
                                    onChange={(e) => setfname(e.target.value)}
                                    
                                    aria-invalid={validFname ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=>setFnameFocus(true)}
                                    onBlur={()=> setFnameFocus(false)}
                                />
                                <p id="uidnote" className={FnameFocus && fname && !validFname ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    1 to 40 characters.<br />
                                    Must begin with a letter.<br />
                                    numbers, underscores, hyphens not allowed.
                                </p>
                            </div>
                            {/* End First Name */}

                            {/* Middle Name */}
                            <div className="form__input--floating mt-24">
                            <label htmlFor="mname">
                                <FontAwesomeIcon icon={faCheck} className={validMname ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validMname || !mname ? "hide" : "invalid"} />
                            </label>
                                <input 
                                    type="text"
                                    placeholder='Middle Name'
                                    id='mname'
                                    ref={userRef} 
                                    autoComplete="off"
                                    onChange={(e) => setMname(e.target.value)}
                                    
                                    aria-invalid={validMname ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=>setMnameFocus(true)}
                                    onBlur={()=> setMnameFocus(false)}
                                />
                                <p id="uidnote" className={mnameFocus && mname && !validMname ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    1 to 40 characters.<br />
                                    Must begin with a letter.<br />
                                    numbers, underscores, hyphens not allowed.
                                </p>
                            </div>
                            {/* End Middle Name */}

                            {/* Last Name */}
                            <div className="form__input--floating mt-24">
                            <label htmlFor="lname">
                                <FontAwesomeIcon icon={faCheck} className={validLname ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validLname || !lname ? "hide" : "invalid"} />
                            </label>
                                <input 
                                    type="text"
                                    placeholder='Last Name'
                                    id='lname'
                                    ref={userRef} 
                                    autoComplete="off"
                                    onChange={(e) => setLname(e.target.value)}
                                    
                                    aria-invalid={validLname ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=>setLnameFocus(true)}
                                    onBlur={()=> setLnameFocus(false)}
                                />
                                <p id="uidnote" className={LnameFocus && lname && !validLname ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    1 to 40 characters.<br />
                                    Must begin with a letter.<br />
                                    numbers, underscores, hyphens not allowed.  
                                </p>
                            </div>
                            {/* End Last Name */}

                            {/* Email */}
                            <div className="form__input--floating mt-24">
                            <label htmlFor="email">
                                <FontAwesomeIcon icon={faCheck} className={validname ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validname || !email ? "hide" : "invalid"} />
                            </label>
                                <input 
                                    type="text"
                                    placeholder='Email Address'
                                    id='email'
                                    ref={userRef} 
                                    autoComplete="off"
                                    onChange={(e) => setemail(e.target.value)}
                                    
                                    aria-invalid={validname ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=>setUserFocus(true)}
                                    onBlur={()=> setUserFocus(false)}
                                />
                                <p id="uidnote" className={userFocus && email && !validname ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                            </div>
                            {/* End Email */}

                            {/*  Phone Number */}
                            <div className="form__input--floating mt-24">
                            <label htmlFor="mobile">
                                <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
                            </label>   
                                <input 
                                    type="text"
                                    placeholder='Phone number'
                                    id='mobile'
                                    ref={userRef} 
                                    autoComplete="off"
                                    onChange={(e)=>{
                                        setPhone(e.target.value)
                                        setMobile(e.target.value)
                                    }}
                                    
                                    aria-invalid={validPhone ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=>setPhoneFocus(true)}
                                    onBlur={()=> setPhoneFocus(false)}
                                />
                                <p id="uidnote" className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Only numbers allowed.<br/>
                                    must have 10 numbers
                                </p>
                            </div>
                            {/* End Phone Number */}

                            {/*  Role  */}
                            <div className="form__input--floating mt-24">
                            <label htmlFor="role">
                                <FontAwesomeIcon icon={faCheck} className={validRole ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validRole || !role ? "hide" : "invalid"} />
                            </label>
                            <select onChange={(e) => setRole(e.target.value)} name="role" id="role">
                                <option key='' value='seeker'>Select</option>
                                <option key='seeker' value='seeker'>Searching For a Job</option>
                                <option key='recruiter' value='recruiter'>Searching  employees</option>
                            </select>
                            </div>
                            {/* End Role */}

                            {/* Password */}
                            <div className="form__input--floating mt-24">
                            <label htmlFor="pass">
                                <FontAwesomeIcon icon={faCheck} className={validPass ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validPass || !pass ? "hide" : "invalid"} />
                            </label>
                                <input
                                    type="password" 
                                    placeholder='Password' 
                                    id='pass'
                                    ref={userRef} 
                                    autoComplete="off"
                                    onChange={(e) => setPass(e.target.value)}
                                    
                                    aria-invalid={validPass ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=>setPassFocus(true)}
                                    onBlur={()=> setPassFocus(false)}                      
                                />
                                <p id="uidnote" className={passFocus && pass &&  !validPass ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                            </div>
                            {/* End password */}

                            {/* Confirm Password */}
                            <label htmlFor="confirm_pwd">
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPass ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPass ? "hide" : "invalid"} />
                            </label>
                            <div className="form__input--floating mt-24">
                                <input
                                    type="password" 
                                    placeholder='Password'
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPass(e.target.value)}
                                    value={matchPass}
                                    
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}                       
                                />
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                            </div>
                            {/* End Confor password */}
                            <a href="" class="btn__tertiary--medium forgot-password" data-cie-control-urn="forgot-password-btn"><span></span></a>
                            <div className="login_form_action">
                                <button  class="btn__primary--large from__button--floating" data-litms-control-urn="login-submit" type="submit" aria-label="Sign in">Register</button>
                            </div>
                        </form>

                        <div id="or-separator" class="or-separator mt-12 snapple-seperator">
                                <span class="or-text">or</span>
                            </div>

                        <div className="google_signup">
                            {/* <button><GoogleIcon/> Login with Google</button> */}
                        </div>

                        <div className="google_signup">
                            <button><InputIcon/><Link to='/login' >Already have a Account</Link></button>
                        </div>
                    </div>
                </div>

            </main>
            <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
            {errMsg}
            </Alert>
            </Snackbar>
            
        </div>
    </div>
  )
}

export default Register
