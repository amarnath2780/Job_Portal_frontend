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


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  


function Login() {

    const  {Userlogin,opens,errors}= useContext(AuthContext)

    const userRef = useRef()
    const fnameRef = useRef()
    const errRef = useRef()


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [email,setemail]=useState('')
    const [validname, setValidname] = useState(false);
    const [userFocus, setUserFocus] = useState(false);


    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [forgot,setForgot]=useState(1)
    const [fshow,setForShow]=useState(false)


    useEffect(() => {
    userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        setValidname(result)
    }, [email]);
      
    useEffect(() => {
    const result = PWD_REGEX.test(pass);
    setValidPass(result)
    
    
    }, [pass]);


    const count=0
    const loginHandler=(e)=>{
     e.preventDefault() 
     if (forgot>2){
      setForShow(true)
     }
     if (forgot>=2){
        setErrMsg('User is not Varified')
     }
     
     if (email.trim().length ===0 ){
      setErrMsg('Invalid Email or Password')
     }
     else{
      if ( pass.trim().length !==0){
        console.log('finallll')
        Userlogin(email,pass)  
        setForgot(forgot+1)
        
      }
    }
    if ( pass.trim().length === 0){
      console.log('values') 
    }else{

    }
    }

    useEffect(() => {
        setErrMsg('')
    }, [email,pass]);


  return (
    <div className='Login-page' style={{height: '90vh'}}>
        <header>
            <a class="linkedin-logo" href="/" aria-label="Linkedin"><li-icon tabindex="0" aria-label="LinkedIn" type="linkedin-logo" size="28dp" alt="LinkedIn" color="brand" role="banner"><img id='logoImg' src={logo} alt="logp" /></li-icon></a>
        </header>
        <div className="login-page">
            <main>
                <div className="card-layout">
                    <div className="organic-div">
                        <div className="header_content">
                            <h1 class="header__content__heading ">Sign in</h1>
                            <p class="header__content__subheading ">Stay updated on your professional world</p>
                            <p style={{color:"#fa2121" , paddingTop: "1rem"}} ref={errRef} className={errMsg ? "" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </div>

                        <form onSubmit={loginHandler} className="login_form">
                            {/* Email */}
                            <div className="form__input--floating mt-24">
                                <label htmlFor="email">
                                    <FontAwesomeIcon  icon={faCheck} className={validname ? "valid" : "hide"} />
                                    <FontAwesomeIcon style={{color:'red'}} icon={faTimes} className={validname || !email ? "hide" : "invalid"} />
                                </label>
                                <input 
                                    type="text"
                                    placeholder='Email or Phone'
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

                            {/* Password */}
                            <div className="form__input--floating mt-24">
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
                            </div>
                            <a href="" class="btn__tertiary--medium forgot-password" data-cie-control-urn="forgot-password-btn"><span>Forgot password?</span></a>
                            <div className="login_form_action">
                                <button class="btn__primary--large from__button--floating" data-litms-control-urn="login-submit" type="submit" aria-label="Sign in">Sign in</button>
                            </div>
                            {/* End password */}

                        </form>

                        <div id="or-separator" class="or-separator mt-12 snapple-seperator">
                                <span class="or-text">or</span>
                            </div>

                        {/* <div className="google_signup">
                            <button><GoogleIcon/> Login with Google</button>
                        </div> */}

                        <div className="google_signup">
                            <button><AddCircleIcon/><Link to='/register' >Create a Account</Link></button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
  )
}

export default Login
