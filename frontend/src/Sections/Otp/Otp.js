import React,{useState,useEffect} from 'react'
import '../Verification/verify.css'
import * as TiIcons from 'react-icons/ti'
import axios from 'axios'
import {gen_otp,send_otp,validate_otp} from '../../components/otp_system'

function Otp(props) {
    const [click, setClick] = useState(false)
    const idone=props.match.params.idone
    const idtwo=props.match.params.idtwo
    const [otp, setOtp] = useState(0)
    var num;


    useEffect(() => {
        axios.get("/getuser",{
            params:{
                id:idtwo
            }
        })
        .then(res=>{
            console.log(res.data)
             
            console.log(num)
           num= gen_otp();
           console.log(num)
            
            let phno=res.data.details.phone_num;
            send_otp(num,"9677449597","")
        })
        .catch(err=>{
            console.log(err)
        })
        
        
    },[])



    const handleClick=(e)=>{
        e.preventDefault();
        var user_input=e.target["ID"].value
        console.log(user_input)

        if(validate_otp(num,user_input))
        {
            window.location='/verify/prescription/'+idone+"/"+idtwo
        }
        else{
            alert("Invalid OTP!!!")
        }
    }

    return (
        <div>
        
            <div className='verify' style={{paddingLeft:'43rem',paddingTop:'20rem',paddingBottom:'27.35%'}}>
            
            <form onSubmit={handleClick}>
            
            <div class="ui left huge icon input">
               
              <input type="Number" placeholder="Enter OTP " name="ID" min='0' autocomplete='off'  />
              <h3 style={{color:"white",position:"relative",top:"50px",right:"305px"}}>Otp is sent to Patient's registered Mobile Number</h3>
              
              
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