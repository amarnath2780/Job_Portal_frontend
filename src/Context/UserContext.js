import { createContext,useEffect,useState } from "react"
import axios  from '../axios'
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { accessToken } from "../api/api.service";


const UserContext=createContext()
export default UserContext;

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({});

    
    const createUserContext = async (user) => {
        try {
            const userId = user.user_id
            console.log(userId,'userId');
            axios.get(`user/detail/${userId}`,{
                headers:{
                    "Content-type":"applicaiton/json",
                    "Authorization": `Bearer ${accessToken}`
                },
            }).then((response)=>{
                console.log(response.data);
                setUserData(response.data)
                if (response.status === 200 ){
                    
                } 
                console.log(response,'userData ');
            })

        }catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            createUserContext(user);
        }
        
    },[])

    const clearUserContext = () => {
        setUserData({});
    }

    let contextData = {
        'userLoggedData': userData,
        'clearUserContext':clearUserContext,
        'createUserContext':createUserContext,
    }
   return (
    <UserContext.Provider value={contextData} >
        {children}
    </UserContext.Provider>
   )
}