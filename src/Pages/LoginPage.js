import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useContext} from 'react'
import { useEffect , useRef} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import Modal from 'react-bootstrap/Modal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Register.css'
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const USER_REGEX = /^[a-zA-Z]{2,40}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const MOBILE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Login() {

const  {Userlogin,errors,show,handleClose,handleCloses,opens}= useContext(AuthContext)

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


/* const [password,setPassword]=useState('')
const [mcheck,EmailChecker]=useState(false)
const [pcheck,PasswordChecker]=useState(false) */

const [forgot,setForgot]=useState(1)
const [fshow,setForShow]=useState(false)


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
  const result = PWD_REGEX.test(pass);
  console.log(result);
  console.log(pass);
  setValidPass(result)

  
}, [pass]);


const count=0
 const loginHandler=(e)=>{
     e.preventDefault() 
     console.log(forgot,'forgott')
     if (forgot>2){
      setForShow(true)
     }
     
     if (email.trim().length ===0 ){
      console.log('empty')
      setErrMsg('Invalid Email or Password')
     }
     else{
      if ( pass.trim().length !==0){
        console.log('finallll')
        Userlogin(email,pass)  
        setForgot(forgot+1)
       
    

      }
     }
    if ( pass.trim().length ===0){
      console.log('values')
      
    }else{
    }
    }



    useEffect(() => {
      setErrMsg('')
    }, [email,pass]);

  return (
  
      <div class="reg-app">   
      <section className='register'>
         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      
  <Card style={{ backgroundColor:'',borderRadius:'2rem'}}>     
      <Card.Body>          
    
    <Form onSubmit={loginHandler} >

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


        {/* password */}
        <label htmlFor="pass">Password
       
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

       

        {/* End password */}




     
    
      <div className='submit-area' style={{textAlign:'center'}}>
      <Button className='btn' variant="dark" type="submit"   >
        Submit
      </Button>
    {opens ?  <Alert variant="filled" auto severity="error">
      {errors}
      </Alert>   : ' '}
   {fshow?   <Link style={{textDecoration:'None',color:'black',marginTop:'2rem'}} to='/forgot_password'>forgotpassword ?</Link>:''}
   
      <Link to='/register' > Create An Account</Link> 
   </div>
    </Form>
          
      </Card.Body>
      
</Card>
   
</section>
  
  </div>


   
  )
}

export default Login
