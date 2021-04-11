import React from 'react';
import '../Homepage/Homepage.css';
import medwm from '../Printprescription/med_sui.png';
import prescription from '../Homepage/Prescription.png';
import printpres from '../Homepage/Printpres.png';
import Analytics from '../Homepage/Analytics.png';
import Transactions from '../Homepage/Transactions.png';
import allinone from '../Homepage/allinone.png';
import doctor from '../Homepage/Doctor.png';

import health from '../Homepage/Health .png';

function Homepage() {

    return (
        <div>
            <section id='home'>
                <div className="homenav ui borderless fixed inverted menu" style={{ backgroundColor: 'black', fontFamily: 'megrim,cursive', textAlign: 'center' }}>
                    <button style={{ fontFamily: 'megrim,cursive', marginLeft: '1%' }} type='button' onClick={(e) => {

                        window.location = "http://127.0.0.1:5500/APIs/chartjs/index.html";
                        e.preventDefault();
                    }} className=' ui inverted primary button'>Analytics</button>
                    <a className="homenav-item item" href='#home'>
                        Home
                    </a>
                    <a className="item" href='#about'>
                        About
                    </a>
                    <a className="item" href='#why'>
                        Why Medical Suitcase?
                    </a>
                    <a className="item" href='#features'>
                        Features
                    </a>


                    <button style={{ fontFamily: 'megrim,cursive' }} type='button' onClick={(e) => {

                        window.location = "/drlogin";
                        e.preventDefault();
                    }} className='homenav-signup ui inverted primary button'>Dr.Login</button>
                    <button style={{ fontFamily: 'megrim,cursive' }} type='button' onClick={(e) => {

                        window.location = "/patientlogin";
                        e.preventDefault();
                    }} className=' ui inverted primary button'>Patient Login</button>
                </div>



                <div class="home-content ui two column doubling stackable grid container">
                    <div class="column">

                        <h1 className='heading' style={{ color: 'white', paddingTop: '55%', fontFamily: 'megrim,cursive', fontSize: '70px' }}>Medical Suitcase</h1>
                        <h3 style={{ fontFamily: 'megrim,cursive', fontSize: '25px' }}>The future of Healthcare Service</h3>

                    </div>
                    <div class="column">
                        <img style={{ position: 'relative', right: '130px', width: '100%' }} src={medwm}></img>
                    </div>

                </div>

            </section>

            <section id="about">

                <div class="home-content ui one column doubling stackable grid container">


                    <div class="column" >

                        <h1 className='heading' style={{ color: 'white', paddingTop: '10%', fontFamily: 'megrim,cursive', textAlign: 'center', fontSize: '80px' }}>About</h1>
                        <br></br>
                        <br></br>
                        <h3 style={{ fontSize: '30px', fontFamily: 'megrim,cursive', textAlign: 'center' }}>Medical Suitcase is a service platform where all the Medical Records of the citizens are stored in a secured environment.</h3>
                        <h3 style={{ fontSize: '30px', fontFamily: 'megrim,cursive', textAlign: 'center' }}>The platform makes sure that only government certified doctors can prescribe medications to the patients.</h3>
                        <h3 style={{ fontSize: '30px', fontFamily: 'megrim,cursive', textAlign: 'center' }}>It helps to maintain the uniformity of records throughout the country.</h3>


                    </div>

                </div>


            </section>

            <section id="why">

                <div class="home-content ui one column doubling stackable grid container">


                    <div class="column" >

                        <h1 className='heading' style={{ color: 'white', paddingTop: '10%', fontFamily: 'megrim,cursive', textAlign: 'center', fontSize: '80px' }}>Why Medical Suitcase?</h1>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>


                    </div>

                </div>
                <div class="ui two column doubling stackable grid container">
                    <div class="column">


                        <div class="ui card whycard">
                            <div class="image">
                                <img src={allinone} style={{ position: 'relative', right: '180px', bottom: '68px', width: '99%' }} />

                            </div>
                            <div class="content" >
                                <h1 className='header' style={{ fontSize: '45px' }}>All in One Place</h1>

                                <div class="description " style={{ color: 'white', fontSize: '20px' }}>
                                    <p>All the medical records of a citizen are stored in one place and can be accesed at any point of time.Everyone will have same template of Prescription.This ensure uniformity of Medical Records for all citizens of the country. No more preserving of prescriptions and saves paper.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column" >


                        <div class="ui card whycard" style={{ position: 'relative', left: '200px' }}>
                            <div class="image">
                                <img src={health} style={{ position: 'relative', right: '180px', bottom: '68px', width: '99%' }} />
                            </div>
                            <div class="content" >
                                <h1 className='header' style={{ fontSize: '40px' }}>Healthcare Sector Improvement</h1>

                                <div class="description " style={{ color: 'white', fontSize: '20px' }}>
                                    <p>Government can collect these data and use this for development of health sector.Health care services like Hospitals,Vaccination Camps can be developed properly at a particular region.Distributing the funds allocated for health sector happens very easily.Regionwise disease tracking can be done in a robust manner.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="home-content ui one column doubling stackable grid container">


                    <div class="column" style={{ paddingLeft: '35%', paddingTop: '10%' }} >

                        <div class="ui card whycard1 " style={{ width: '50%', }}>
                            <div class="image">
                                <img src={doctor} style={{ position: 'relative', right: '180px', bottom: '68px', width: '99%' }} />
                            </div>
                            <div class="content" >
                                <h1 className='header' style={{ fontSize: '40px' }}>Authorised Doctors</h1>

                                <div class="description " style={{ color: 'white', fontSize: '20px' }}>
                                    <p>Government authorised Doctors and Hospitals only can prescribe medication in this platform.By this way we are able to prevent Unauthorised Doctors prescribing or practising medicine.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </section>



            <section id="features">
                <div class="home-content ui one column doubling stackable grid container">


                    <div class="column" >

                        <h1 className='heading' style={{ color: 'white', paddingTop: '10%', fontFamily: 'megrim,cursive', textAlign: 'center', fontSize: '80px' }}>Features</h1>
                        <br></br>
                        <br></br>

                    </div>

                </div>



                <div class="home-content ui two column doubling stackable grid container">
                    <div class="column">

                        <br></br>
                        <img src={prescription} style={{ width: '150%', position: 'relative', right: '350px' }}></img>
                    </div>

                    <div class="column" style={{ paddingLeft: '20%' }}>


                        <h1 className='heading' style={{ color: 'white', paddingTop: '60%', fontFamily: 'megrim,cursive' }}>Hassle Free Digital Prescription</h1>
                        <h3 style={{ fontFamily: 'megrim,cursive' }}>One Prescription Template For All!!!!</h3>


                    </div>

                </div>


            </section>

            <section id='features' style={{ paddingBottom: '15%' }}>
                <div class="home-content ui two column doubling stackable grid container">
                    <div class="column" style={{ paddingRight: '20%' }}>

                        <h1 className='heading' style={{ color: 'white', paddingTop: '55%', fontFamily: 'megrim,cursive' }}>Anytime Accessible Prescription</h1>
                        <h3 style={{ fontFamily: 'megrim,cursive' }}>You can see all your medical records anytime and download it as pdf</h3>

                    </div>
                    <div class="column">
                        <img style={{ position: 'relative', right: '260px', width: '140%' }} src={printpres}></img>
                    </div>

                </div>
            </section>

            <section id="features">

                <div class="home-content ui two column doubling stackable grid container">
                    <div class="column">
                        <img src={Analytics} style={{ width: '100%', position: 'relative', right: '280px' }}></img>
                    </div>

                    <div class="column" style={{ paddingLeft: '10%' }}>


                        <h1 className='heading' style={{ color: 'white', paddingTop: '60%', fontFamily: 'megrim,cursive' }}>Advanced Data Analytics</h1>
                        <h3 style={{ fontFamily: 'megrim,cursive' }}>Big organisations like Government can analyze the data easily </h3>


                    </div>

                </div>


            </section>
            <section id='features' style={{ paddingBottom: '15%' }}>
                <div class="home-content ui two column doubling stackable grid container">
                    <div class="column" style={{ paddingRight: '20%' }}>

                        <h1 className='heading' style={{ color: 'white', paddingTop: '55%', fontFamily: 'megrim,cursive' }}>Prescriptions Transactions</h1>
                        <h3 style={{ fontFamily: 'megrim,cursive' }}>All the prescriptions transactions are visible to everyone</h3>

                    </div>
                    <div class="column">
                        <img style={{ position: 'relative', right: '260px', width: '140%' }} src={Transactions}></img>
                    </div>

                </div>
            </section>



        </div>
    )
};

export default Homepage;