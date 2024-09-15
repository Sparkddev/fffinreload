import React from 'react';
import { Link } from 'react-router-dom';





import {db, auth} from './firebase';
import { useNavigate } from 'react-router-dom';
import footerlogo from './footerlogo.png';

function Nav(){

    const navigate = useNavigate();
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
                }} to='/applications'>
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
    );
}

export default Nav;