import React,{useState,useEffect} from 'react'
import '../Verification/verify.css'
import * as TiIcons from 'react-icons/ti'

function Otp(props) {


    const handleClick=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
        
            <div className='verify' style={{paddingLeft:'43rem',paddingTop:'20rem',paddingBottom:'27.35%'}}>
            
            <form onSubmit={handleClick}>
            
            <div class="ui left huge icon input">
               
              <input type="Number" placeholder="Enter OTP " name="ID" min='0' />
              
              
            </div>
            <div className="button">
            
            <button className="vb ui inverted primary button"><TiIcons.TiTickOutline size={25} /></button>
            </div>
            </form> 
            
            </div>
            
            
        </div>
    )

}

export default Otp;