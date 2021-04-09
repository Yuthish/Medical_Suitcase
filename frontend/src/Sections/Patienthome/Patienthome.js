import React,{useState,useEffect} from 'react'
import Button from '../../components/Button'
import '../DrHome/Drhome.css'
import Navbar from '../../components/Navbar/Navbar'

function Patienthome(props){


    let name = 'Levy Roseman';
    var greet = '';
    var customStyle = { backgroundColor: '#1F2833' }
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      greet = 'Good Morning';
  
    }
  
  
    else if (currentTime >= 12 && currentTime <= 17) {
      greet = 'Good Afternoon';
  
    }
  
    else if (currentTime >= 17 && currentTime <= 24) {
  
      greet = 'Good Evening';
  
  
    }
    return (

        <div>
          <Navbar bg={customStyle.backgroundColor}></Navbar>
          <div className='content-section' style={customStyle} >
    
            <h1>{greet}<br></br> <h1>{name}</h1>  </h1>
            <h1>ID | 32 | </h1>
            <br></br>
            <Button link='/' name='My Records'></Button>
    
    
          </div>
    
    
        </div>
      )
    }

export default Patienthome;
    