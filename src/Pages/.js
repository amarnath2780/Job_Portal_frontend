const response = await axios.post(REGISTER_URL,{email:email , first_name:fname, middle_name:mname ,last_name:lname ,phone_number:phone , password : pass , role:role   }).then((res)=>{
    console.log(res.data,'data ann')
    setLoad(false)
    if (res.data.error){
      console.log(res.data.error)
      setErrors(res.data.error)
      handleShow()
    
 }      
    if(res.data.mobile){
      
        console.log('get the mobile')
        navigate('/verify',)
    }
   
})

