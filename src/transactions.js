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

function Transactions(){


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
                <p className='font-weight-bold py-1 mx-2 my-3  rounded'>My Account</p>
                </Link>
                
                <Link style={{
                    textDecoration:"none",
                }} to='/account/transactions'>
                <p className='font-weight-bold py-1 mx-2 my-3 hoverme rounded activelink'>Transactions</p>
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


                    

                    <div className='row myflex py-3 px-5'>

                        <div className='col-md-5 mybg py-3 text-center'>

                            <h6 className='whitext'>Savings for Business</h6>
                            <h4 className='figure font-weight-bold'>$ 1,890,000</h4>
                        </div>
                        <div className='col-md-5 bg-primary py-3 text-center'>
                        <h6 className='whitext'>Checking Balance</h6>
                            <h4 className='figure font-weight-bold'>$589,000</h4>
                        </div>

                    </div>

                    <h5 className='font-weight-bold pl-5 py-3'>Recent Transactions</h5>


                    <div className='table-responsive'>

                        <table className='table table-striped table-borderless'>

                            <thead className='mybg text-light py-1'>
                                <tr>
                                    <th>Reference No</th>
                                    <td>Amount</td>
                                    <td>Description</td>

                                </tr>

                            </thead>

                            <tbody>
                                <tr>
                                    <td>34983094775</td>
                                    <td>$55,800</td>
                                    <td>Payment for traveling fee</td>



                                </tr>


                                <tr>
                                    <td>1364350777</td>
                                    <td>$1,033.96</td>
                                    <td>Northeast Ventur Bl9L</td>
                                </tr>

                                <tr>
                                    <td>800-9691940 </td>
                                    <td>$600</td>
                                    <td>Payment Sent Card 2182</td>
                                </tr>


                                <tr>
                                    <td>1364350777 </td>
                                    <td>$820.29</td>
                                    <td>Northeast Ventur Bl9L</td>
                                </tr>

                                <tr>
                                    <td>1744358456 </td>
                                    <td>$358.94</td>
                                    <td>7-Eleven Lakewood WA Card 2182</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    


                   
                    
                </div>


               




            </div>
        
        </>
    );
}

export default Transactions;