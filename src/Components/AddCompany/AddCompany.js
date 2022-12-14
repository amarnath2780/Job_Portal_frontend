import React from 'react'
import { useEffect , useState ,useRef} from 'react'
import logos from '../../Images/s.png';
import art from '../../Images/art.png';
import './SelectComapy.css'
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const USER_REGEX = /^[a-zA-Z]{1,100}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,16}$/;
const IMAGE_TYPE = /[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;




function AddCompany() {

  const userRef = useRef()
  const errRef = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    listCategory()
  }, []);

  const [name, setName] = useState('');
  const [validName, setValidName] = useState('');
  const [nameFocus, setNameFocus] = useState('');

  const [category, setCategory] = useState('');

  const [logo, setlogo] = useState([]);

  const [about, setAbout] = useState('');
  const [validAbout, setValidAbout] = useState('');
  const [aboutFocus, setAboutFocus] = useState('');

  const [founder, setFounder] = useState('');
  const [validFounder, setValidFounder] = useState('');
  const [founderFocus, setFounderFocus] = useState('');

  const [ceo, setCeo] = useState('');
  const [validCeo, setValidCeo] = useState('');
  const [ceoFocus, setCeoFocus] = useState('');

  const [location, setLocation] = useState('');
  const [validLocation, setValidLocation] = useState('');
  const [locationFocus, setLocationFocus] = useState('');

  const [pass, setPass] = useState('');
  const [validPass, setValidPass] = useState('');
  const [passFocus, setPassFocus] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(name)
    setValidName(result)
  }, [name]);


  useEffect(() => {
    const result = USER_REGEX.test(founder)
    setValidFounder(result)
  }, [founder]);

  useEffect(() => {
    const result = USER_REGEX.test(ceo)
    setValidCeo(result)
  }, [ceo]);

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
    }, [ name , about , founder , ceo , location , pass ]);


    const applicationHandler=(e)=>{

      
      e.preventDefault()
  
      axios.post('/add-company/' , {
        company_name:name,
        category:category,
        founder:founder,
        about : about,
        ceo_name : ceo,
        head_office_location : location,
        security_code : pass,
      }).then((res)=>{
        navigate('/application')
  
        if (res.data.error){
          setErrMsg('Data already exist')
        }
      })
      setErrMsg('Data already exist')
      console.log('successss')
    }

    

  const [categoryList, setCategoryList] = useState([]);

  const listCategory=()=>{
    axios.get('/company-category/').then((res)=>{
      setCategoryList(res.data)
    })
  }

  const handleselect=(e)=>{
    setCategory(e.target.value)
  }
  


  return (
    <div className='add-company'>
        

        <div className='Content'>
        <form action="" onSubmit={applicationHandler}>
        {errMsg ? <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">{errMsg}</Alert></Stack> : ''}
            {/* First name */}
            <label htmlFor="name">Company Name
            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='name'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setNameFocus(true)}
            onBlur={()=> setNameFocus(false)}/>

            {/* End first name */}

            {/* Category */}
            <label htmlFor="category">Select Company Category</label>
            <select onChange={handleselect} name="category" id="">
              <option>Select</option>
            {categoryList ? categoryList.map((item ,key)=>
              <option key={item.id} value={item.id}>{item.category_name}</option>
            ) : ''}
            </select>
            {/* end Category */}

            

            {/* Founder name */}
            <label htmlFor="name">Founder
            <FontAwesomeIcon icon={faCheck} className={validFounder ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validFounder || !founder ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='name'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setFounder(e.target.value)}
            required
            aria-invalid={validFounder ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setFounderFocus(true)}
            onBlur={()=> setFounderFocus(false)}/>

            {/* End Founder name */}

            {/* CEO's Name  */}
            <label htmlFor="name">CEO's Name
            <FontAwesomeIcon icon={faCheck} className={validCeo ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validCeo || !ceo ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='name'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setCeo(e.target.value)}
            required
            aria-invalid={validCeo ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setCeoFocus(true)}
            onBlur={()=> setCeoFocus(false)}/>

            {/* End CEO's Name  */}   

            {/* About  */}
            <label htmlFor="name">About
            </label>
            <textarea
            id='name'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setAbout(e.target.value)}
            required
            aria-invalid={validAbout ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setAboutFocus(true)}
            onBlur={()=> setAboutFocus(false)}/>

            {/* End About  */}

            {/* Location  */}
            <label htmlFor="name">Where is your head office located?
            <FontAwesomeIcon icon={faCheck} className={validLocation ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validLocation || !location ? "hide" : "invalid"} />
            </label>
            <input type="text"
            id='name'
            ref={userRef} 
            autoComplete="off"
            onChange={(e) => setLocation(e.target.value)}
            required
            aria-invalid={validLocation ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=>setLocationFocus(true)}
            onBlur={()=> setLocationFocus(false)}/>

            {/* End Location  */}


            {/* password */}
            <label htmlFor="pass">Create Security Code
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

        <button type='submit' disabled={ !validPass || !validName || !validFounder || !validCeo || !validLocation  ? true : false}>Sign Up</button>
        </form>
        </div>


        <div className='card-section'>
            <div className='card'>
                <div className='card-img'>
                    <img src={logos} alt="logp" />
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

export default AddCompany
