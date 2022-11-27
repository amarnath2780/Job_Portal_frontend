import { createContext,useState } from "react"
import axios  from '../axios'
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';



const AuthContext=createContext()
export default AuthContext;
export const AuthProvider=({children})=>{
 let [authToken,setAuthToken]=useState(()=>localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')):null)
 let [user,setUser]=useState(()=>localStorage.getItem('authToken')? jwt_decode(localStorage.getItem('authToken')):null)
  let [admin,setAdmin]=useState(()=>localStorage.getItem('admin')? jwt_decode(localStorage.getItem('admin')):null)
  let [adminAuthToken,setAdminAuthToken]=useState(()=>localStorage.getItem('adminAuthToken')? JSON.parse(localStorage.getItem('adminAuthToken')):null)
    const navigate=useNavigate()
    
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};


    

    const [errors,SetError]=useState(false)
// react
const [opens, setOpens] = useState(false);
const handleClicks = () => {
    setOpens(true);
  };
  
  const handleCloses = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpens(false);
  };
  

    const Userlogin=async(email,password)=>{
       
        console.log(email,password)
       await axios.post('user/login/',{email:email,password:password}).then((res)=>{
                console.log(res.data)
                console.log('id is here',res.data.user.user_id);
                if (res.data.token){
                  console.log('recruiter is ' + res.data.user.role);
                  
                  if (res.data.user.role == 'seeker'){
                    localStorage.setItem('authToken',JSON.stringify(res.data))
                    localStorage.setItem('token',JSON.stringify(res.data.token))
                    localStorage.setItem('profile_id', JSON.stringify(res.data.profile_id))
                    setAuthToken(res.data)
                    setUser(res.data.token)                      
                    SetError(res.data.message)
                    localStorage.setItem('userId',JSON.stringify(res.data.user.user_id))
                    navigate('/')
                  }
                  else if(res.data.user.role == 'recruiter'){
                    localStorage.setItem('adminAuthToken',JSON.stringify(res.data))
                    localStorage.setItem('token',JSON.stringify(res.data.token))
                    localStorage.setItem('profile_id', JSON.stringify(res.data.profile_id))
                    setAuthToken(res.data)
                    setUser(res.data.token)                      
                    SetError(res.data.message)
                    localStorage.setItem('userId',JSON.stringify(res.data.user.user_id))
                    navigate('/page')
                  }                    
                  else{
                    localStorage.setItem('admin',JSON.stringify(res.data))
                    localStorage.setItem('token',JSON.stringify(res.data.token))
                    setAdminAuthToken(res.data)
                    setAdmin(res.data.token)                      
                    SetError(res.data.message)
                    navigate('/admin')
                  };
                }
             
              if(res.data.message){              
                SetError(res.data.message)
                handleShow()

                handleClicks()
                setTimeout(() => {
                    handleClose(false);
                    handleCloses()
                       }, 5000);
              }

            }
            ) ; 
        }

        
        let logOut=()=>{
            axios.post('user/logout/').then((res)=>{
                console.log(res.data)
            })
            localStorage.removeItem('authToken')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('adminAuthToken')
            localStorage.removeItem('Admintoken')
            localStorage.removeItem('admin')
            localStorage.removeItem('Role')
            localStorage.removeItem('profile_id')

            setUser(null)
            setAuthToken(null)
            navigate('/login')
        }

        





        const [mobile,setMobile]=useState('')
        let contextData={
            user:user,
            Userlogin:Userlogin,
            logOut:logOut,
            authToken:authToken,
            mobile:mobile,
            setMobile:setMobile,   
            errors:errors,    
            adminAuthToken:adminAuthToken,
            admin:admin,
            setShow:setShow,
            handleClose:handleClose,
            handleShow:handleShow,
            show:show,
            handleCloses:handleCloses,
            opens:opens,
           
          
          
        }
        return(
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>
        )
}