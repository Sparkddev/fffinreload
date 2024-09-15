import React, { useState, useEffect } from 'react';
import './dashboard.css';

import moment from 'moment';
import { useNavigate,Link } from 'react-router-dom';


import footerlogo from './footerlogo.png';
import more from './more.png';


import {db, auth} from './firebase';

import axios from 'axios'

import { collection, getDocs, where, query } from "firebase/firestore";
import Nav from './nav';
import face from './face.png';


function DashBoardTwo(){


    const navigate = useNavigate();


    React.useEffect(()=>{
        var docId = localStorage.getItem("authid");

        if(docId == null){
            navigate('/');
        }
        
     

     
    },[]);



    const handleSignOut = () => {
        auth.signOut()
          .then(() => {
            // Sign-out successful.
            console.log("User signed out");

            localStorage.removeItem("authid");

         
            navigate('/');

        
          })
          .catch((error) => {
            // An error happened.
            console.error("Error signing out:", error);
          });
      };


      


    return (
        <>


<div className='main row'>
<div className='col-md-3 third 'style={{
            background:"#00396f",
            height:"100vh",
        }}>

            <div className='text-center py-5'>

            <img src={footerlogo} className="" style={{
                width:"115px",
                height:"115px",
                borderRadius:"100%",
            }} />

            <br></br>

            <br></br>


        
                

<Link style={{
                    textDecoration:"none",
                }} to='/account/dashboard'>
                <p className='font-weight-bold py-1 mx-2 my-3  rounded activelink'>My Account</p>
                </Link>
                
                <Link style={{
                    textDecoration:"none",
                }} to='/account/transactions'>
                <p className='font-weight-bold py-1 mx-2 my-3 hoverme rounded'>Transactions</p>
                </Link>


                <Link style={{
                    textDecoration:"none",
                }} to='/account/withdrawals'>
                <p className='font-weight-bold py-1 mx-2 my-3 hoverme rounded'>Withdrawals</p>
                </Link>

{/* 
                <Link style={{
                    textDecoration:"none",
                }} to='/admin-onboard'>
                <p className='font-weight-bold py-1 mx-2 my-3 hoverme rounded'>Onboarding</p>
                </Link> */}

                <br/>
                <button onClick={handleSignOut} className='btn btn-danger text-light font-weight-bold'>Logout</button>

         

       





            </div>




        </div>

                <div className='col-md-9 full bg-light m-0 px-0'>

                    <h5 className='card card-heading py-3 text-center m-0'style={{
                        fontWeight:"700",
                    }}>{moment(new Date()).format('dddd, MMMM DD, YYYY')}</h5>

                    <br/>
                    <br/>

                    <div className='myflex px-5 mb-4'>
                    <h5 className='font-weight-bold  py-3'>Account Name : Cynthia Larry</h5>

                    <img className='face'src={face} />

                    </div>

                   

                    <div className='text-center'>
                    <img src={more} className="more"/>

                    </div>

                    <div className='row myflex py-5 px-5'>

                        <div className='col-md-5 mybg py-3 text-center'>

                            <h6 className='whitext'>Savings for Business</h6>
                            <h4 className='figure font-weight-bold'>$ 1,890,000</h4>
                        </div>
                        <div className='col-md-5 bg-primary py-3 text-center'>
                        <h6 className='whitext'>Checking Balance</h6>
                            <h4 className='figure font-weight-bold'>$589,000</h4>
                        </div>

                    </div>
                    


                   
                    
                </div>


               




            </div>
        
        </>
    );
}

export default DashBoardTwo;