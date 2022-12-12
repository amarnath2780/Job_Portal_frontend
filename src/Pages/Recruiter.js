import React, { useContext, useEffect, useState } from 'react'
import './Css/Recruiter.css'
import UserContext from '../Context/UserContext'
import { Link } from "react-router-dom";
import ReNavbar from '../Components/ReNavbar';
import axios from '../axios';
import {PayPalButtons} from '@paypal/react-paypal-js';
import Paper from '@mui/material/Paper';
import payment from '../Images/paymet.png';
import jobs from '../Images/jobs.png';
import RecruiterLandingPage from './RecruiterLandingPage';


function Recruiter() {
  const user = localStorage.getItem("userId")
  const profile_id = localStorage.getItem("profile_id")

  useEffect(() => {
    userProfile()
    membershipDeatils()
  }, []);


  function refreshPage() {
    window.location.reload(false);
  }

  const [message, setMessage] = useState('');
  const [profile, setprofile] = useState([]);
  const [paid, setPaid] = useState(false);
  const [memebership, setMemebership] = useState([]);
  const [mem, setmem] = useState('');
  const [paymentPrice, setPaymentPrice] = useState('');

  const product={
    description :"Its just one month plan",
    price:20,
  } 

  const handleApprove=(orderID)=>{
    setPaid(true)
  }

  const membershipDeatils=()=>{
    axios.get('/all-membership/').then((res)=>{
      setMemebership(res.data)
      console.log(res.data[1].id);
      setmem(res.data[1].id)
    })
  }


  const handlePayment=(order)=>{
    if(order.status== "COMPLETED"){
      axios.post(`/payment/?id=${profile_id}`,{
        user: profile_id,
        membership:mem,
      }).then((res)=>{
        setMessage(res.data.message)
        console.log(res.data);
        console.log(res.data.id);
        refreshPage()
        
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
      {profile.paid  ?  ''  : ''}
      
      <div className='posted' >
        {profile.is_requested ? <p style={{color: '#000' }}>'You request is pending'</p> :  profile.paid ? 
              <RecruiterLandingPage/>
        : profile.is_acceped ? 
        <div className='subscription-plan'>
              <img src={payment} alt="" />
              <h2>You want to Purchance A plan to access All Features</h2>


              <div className="single-plans-card">

            {memebership ? memebership.map((item, key)=>
              <Paper elevation={8}  id="inner-single-plan">
                <img src={jobs} style={{height:"200px" , width:"350px"}} alt="" />
                <h3>Purchase {item.title} Plan</h3>

                <div className="membership-content">
                    <div className="valid">
                      <p>This plan is valid for {item.duration}  Days</p>
                    </div>
                    <div className="memebership-content-text">
                      <p>Using this plan you can Post jobs and Find the right employee... And Enjoy all the features of Trabajo</p>
                    </div>
                    <div className="memebership-price">
                      <p>Price : <span> $ {item.price}</span></p>
                    </div>

                </div>

                <div style={{fontSize:"15px" , display:"flex" , gap:"20px"}}>
                  <input onClick={(e)=>{
                    setmem(item.id)
                    console.log(item.id);
                  }} type="radio" name="confirm" id="" />
                  <p>Confirm the plan</p>
                </div>

                <div  className="memebership-payment-button">
                  <PayPalButtons  id='PayPalButtons' style={{color:"blue" , shape:"pill" , layout:"horizontal" , tagline:'false'}}
                        createOrder={(data, actions)=>{
                          return actions.order.create({
                            purchase_units:[
                              {
                                description : item.title,
                                amount:{
                                  value: item.price
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
                </div>

                  
              </Paper> 
            ) : ''}
              
              </div> 
        </div> 
           
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
