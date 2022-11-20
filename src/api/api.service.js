import axios  from '../axios'



export let accessToken;
if(localStorage.getItem('token')){
    const Token = JSON.parse(localStorage.getItem('token')) 
    accessToken = Token.access
    
}

