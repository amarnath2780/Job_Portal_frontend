import React, { useContext, useEffect, useState } from 'react'
import './Css/Recruiter.css'
import UserContext from '../Context/UserContext'
import { Link } from "react-router-dom";
import ReNavbar from '../Components/ReNavbar';
import axios from '../axios';
import {PayPalButtons} from '@paypal/react-paypal-js';
import Paper from '@mui/material/Paper';



function Recruiter() {
  const user = localStorage.getItem("userId")
  const profile_id = localStorage.getItem("profile_id")

  useEffect(() => {
    userProfile()
  }, []);

  const [profile, setprofile] = useState([]);
  const [paid, setPaid] = useState(false);

  const product={
    description :"Its just one month plan",
    price:20,
  } 

  const [message, setMessage] = useState('');

  const handleApprove=(orderID)=>{
    setPaid(true)
  }

  const membership = 1

  const handlePayment=(order)=>{
    if(order.status== "COMPLETED"){
      axios.post(`/payment/?id=${profile_id}`,{
        user: profile_id,
        membership: membership,
      }).then((res)=>{
        setMessage(res.data.message)
        console.log(res.data);
      })
    }
  }



  const userProfile=()=>{
    axios.get(`/recruiter-profile/?id=${profile_id}`).then((res)=>{
        setprofile(res.data)
      })
}

  return (
    <div className='recruiter' style={{background:"#fff"}}>
      {profile.is_acceped ?  <ReNavbar/> :''}
      
      <div className='posted' >
        {profile.is_requested ? <p style={{color: '#000' }}>'You request is pending'</p> :  profile.paid ? 

          <div className='subscription-plan'>

              <h2>You want to Purchance A plan to access All Features</h2>

              <div className="single-plans-card">
              <Paper elevation={8}  id="inner-single-plan">

                  <h5>Payment Types</h5>

              <PayPalButtons style={{color:"blue" , shape:"pill" , layout:"horizontal" , tagline:'false'}}
                  createOrder={(data, actions)=>{
                    return actions.order.create({
                      purchase_units:[
                        {
                          description : product.description,
                          amount:{
                            value: product.price
                          },

                        },
                      ],
                    });
                  }}
                  onApprove = {async (data,actions)=>{
                      const order = await actions.order.capture();
                      console.log("order", order);

                      handlePayment(order)
                      handleApprove(data.orderID)

                  }}

                  onCancel={() => {}}

                  onError={(err)=>{
                    console.log('papal on error',err);
                  }}

                  onClick={(data, actions)=>{
                    const hasAlreadyBoughtCourse = false

                    if (hasAlreadyBoughtCourse) {
                      console.log('You already Bought this');
                      return actions.reject()
                    }
                    else{
                      return actions.resolve()
                    }
                  }}

              />

              </Paper> 



              <Paper elevation={8}  id="inner-single-plan">

                  <h5>Payment Types</h5>

              <PayPalButtons style={{color:"blue" , shape:"pill" , layout:"horizontal" , tagline:'false'}}
                  createOrder={(data, actions)=>{
                    return actions.order.create({
                      purchase_units:[
                        {
                          description : product.description,
                          amount:{
                            value: product.price
                          },

                        },
                      ],
                    });
                  }}
                  onApprove = {async (data,actions)=>{
                      const order = await actions.order.capture();
                      console.log("order", order);

                      handlePayment(order)
                      handleApprove(data.orderID)

                  }}

                  onCancel={() => {}}

                  onError={(err)=>{
                    console.log('papal on error',err);
                  }}

                  onClick={(data, actions)=>{
                    const hasAlreadyBoughtCourse = false

                    if (hasAlreadyBoughtCourse) {
                      console.log('You already Bought this');
                      return actions.reject()
                    }
                    else{
                      return actions.resolve()
                    }
                  }}

              />

              </Paper> 
              </div> 
        </div> 
        : profile.is_acceped ? 
          <p style={{color: '#000'}}>'You can add Job Now  <Link style={{color: '#000'}}  to='/post-job'>Here</Link></p> 
          :<div>
            <h1 style={{color: '#000'}}>If your Company already listed complete the Application<Link to='/application'>Here</Link> </h1>
            <h1 style={{color: '#000'}}>If your Company not listed Add your Company<Link to='/add-company'>Here</Link> </h1>
          </div>
        }
      </div>
      
    </div>
  )
}

export default Recruiter
