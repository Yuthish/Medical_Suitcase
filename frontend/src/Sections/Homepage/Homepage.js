import React from 'react';
import '../Homepage/Homepage.css';
import medwm from '../Printprescription/med_sui.png';
import prescription from '../Homepage/Prescription.png';
import printpres from '../Homepage/Printpres.png';
import Analytics from '../Homepage/Analytics.png';
import Transactions from '../Homepage/Transactions.png';
function Homepage() {

    return (
        <div>
            <section id='home'>
                <div className="homenav ui borderless fixed inverted menu" style={{backgroundColor:'black',fontFamily:'megrim,cursive',textAlign:'center'}}>
                    <a className="homenav-item item" href='#home'>
                        Home
                    </a>
                    <a className="item" href='#about'>
                        About
                    </a>
                    <a className="item" href='#features'>
                        Features
                    </a>
                    <button style={{fontFamily:'megrim,cursive'}} className='homenav-login  ui inverted primary button'>Analytics</button>
                    <button style={{fontFamily:'megrim,cursive'}} className='homenav-signup ui inverted primary button'>Login</button>
                </div>

                

                <div class="home-content ui two column doubling stackable grid container">
                    <div class="column">

                    <h1 className='heading' style={{color:'white',paddingTop:'55%',fontFamily:'megrim,cursive'}}>Medical Suitcase</h1>
                    <h3 style={{fontFamily:'megrim,cursive'}}>The future of Healthcare Service</h3>
                        
                    </div>
                    <div class="column">
                    <img  style={{position:'relative',right:'130px',width:'100%'}} src={medwm}></img>
                    </div>
                    
                </div>

            </section>

            <section id="about">

            <div class="home-content ui one column doubling stackable grid container">
            

            <div class="column" >
            
            <h1 className='heading' style={{color:'white',paddingTop:'10%',fontFamily:'megrim,cursive',textAlign:'center',fontSize:'50px'}}>About</h1>
            <br></br>
            <br></br>
            <h3 style={{fontSize:'30px',fontFamily:'megrim,cursive',textAlign:'center'}}>Medical Suitcase is a service platform where all the Medical Records of the citizens are stored in a secured environment.</h3>
            <h3 style={{fontSize:'30px',fontFamily:'megrim,cursive',textAlign:'center'}}>The platform makes sure that only government certified doctors can prescribe medications to the patients.</h3>
            <h3 style={{fontSize:'30px',fontFamily:'megrim,cursive',textAlign:'center'}}>It helps to maintain the uniformity of records throughout the country.</h3>

                
            </div>

            </div>


            </section>
            

            
            <section id="features">
            <div class="home-content ui one column doubling stackable grid container">
            

            <div class="column" >
            
            <h1 className='heading' style={{color:'white',paddingTop:'10%',fontFamily:'megrim,cursive',textAlign:'center',fontSize:'50px'}}>Features</h1>
            <br></br>
            <br></br>
            
            </div>

            </div>

            
            
            <div class="home-content ui two column doubling stackable grid container">
            <div class="column">
            
            <br></br>
                <img src={prescription} style={{width:'150%',position:'relative',right:'350px'}}></img>
            </div>

            <div class="column" style={{paddingLeft:'20%'}}>
            
            
            <h1 className='heading' style={{color:'white',paddingTop:'60%',fontFamily:'megrim,cursive'}}>Hassle Free Digital Prescription</h1>
            <h3 style={{fontFamily:'megrim,cursive'}}>One Prescription Template For All!!!!</h3>

                
            </div>

            </div>


            </section>

            <section id='features' style={{paddingBottom:'15%'}}>
            <div class="home-content ui two column doubling stackable grid container">
                    <div class="column" style={{paddingRight:'20%'}}>

                    <h1 className='heading' style={{color:'white',paddingTop:'55%',fontFamily:'megrim,cursive'}}>Anytime Accessible Prescription</h1>
                    <h3 style={{fontFamily:'megrim,cursive'}}>You can see all your medical records anytime and download it as pdf</h3>
                        
                    </div>
                    <div class="column">
                    <img  style={{position:'relative',right:'260px',width:'140%'}} src={printpres}></img>
                    </div>
                    
                </div>
            </section>

            <section id="features">

            <div class="home-content ui two column doubling stackable grid container">
            <div class="column">
                <img src={Analytics} style={{width:'100%',position:'relative',right:'280px'}}></img>
            </div>

            <div class="column" style={{paddingLeft:'10%'}}>
            
            
            <h1 className='heading' style={{color:'white',paddingTop:'60%',fontFamily:'megrim,cursive'}}>Advanced Data Analytics</h1>
            <h3 style={{fontFamily:'megrim,cursive'}}>Big organisations like Government can analyze the data easily </h3>

                
            </div>

            </div>


            </section>
            <section id='features' style={{paddingBottom:'15%'}}>
            <div class="home-content ui two column doubling stackable grid container">
                    <div class="column" style={{paddingRight:'20%'}}>

                    <h1 className='heading' style={{color:'white',paddingTop:'55%',fontFamily:'megrim,cursive'}}>Prescriptions Transactions</h1>
                    <h3 style={{fontFamily:'megrim,cursive'}}>All the prescriptions transactions are visible to everyone</h3>
                        
                    </div>
                    <div class="column">
                    <img  style={{position:'relative',right:'260px',width:'140%'}} src={Transactions}></img>
                    </div>
                    
                </div>
            </section>



        </div>
    )
};

export default Homepage;