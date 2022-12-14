import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useContext} from 'react'
import { useEffect , useRef} from 'react'
import Card from 'react-bootstrap/Card'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AuthContext from '../../Context/AuthContext';
import MuiAlert from '@mui/material/Alert';
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import logo from '../../Images/logo.png'
import axios from '../../axios';


const PWD_REGEX = /^[0-9]{1,6}$/

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  


function Otp() {

    const  {Userlogin,errors,opens,mobile}= useContext(AuthContext)
    const user = localStorage.getItem("userId")

    const userRef = useRef()
    const errRef = useRef()

    const navigate = useNavigate()


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);


    useEffect(() => {
    userRef.current.focus();
        console.log(mobile);
    }, []);

      
    useEffect(() => {
    const result = PWD_REGEX.test(pass);
    setValidPass(result)
    console.log(pass);
    
    }, [pass]);



    useEffect(() => {
        setErrMsg('')
    }, [pass]);


    const registerHandler=(e)=>{
        e.preventDefault()
    
            axios.post('user/verify-otp/',{
                phone_number:mobile,
                otp:pass,
        }).then((res)=>{
            console.log(res.data,'data')
            navigate('/')
            if (res.data.error){
              setErrMsg('User already exist')
              console.log(res.data.error)
          }
          setErrMsg('Incorrect Otp')
        })
       
          console.log('successss')
        }

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
                            <h1 class="header__content__heading ">Verify OTP</h1>
                            <p class="header__content__subheading ">Stay updated on your professional world</p>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </div>

                        <form onSubmit={registerHandler}  className="login_form">

                            {/* Otp */}
                            <div className="form__input--floating mt-24">
                                <input
                                    type="text" 
                                    placeholder='Enter Otp'
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

                            <p id="uidnote" className={passFocus && pass && !validPass ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Otp Must be Numbers
                                </p>
                            <a href="" class="btn__tertiary--medium forgot-password" data-cie-control-urn="forgot-password-btn"><span></span></a>
                            <div className="login_form_action">
                                <button class="btn__primary--large from__button--floating" data-litms-control-urn="login-submit" type="submit" aria-label="Sign in">Sign in</button>
                            </div>
                            {/* End password */}

                        </form>

                    </div>
                </div>

            </main>
        </div>
    </div>
  )
}

export default Otp
