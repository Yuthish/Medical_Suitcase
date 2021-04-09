import React,{useState,useEffect} from 'react'
import Button from '../../components/Button'
import '../DrHome/Drhome.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

function Patienthome(props){
  var id=props.match.params.id
  const [patientname, setPatientname] = useState('')
  const [patientID, setPatientID]=useState('')
  var patientinfo=[]
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

    useEffect(() => {
  
      axios.get('/drinfo',{
        params:{
          id:id
        }
      })
        .then(res => {
          console.log(res.data)
          patientinfo = []
          patientinfo.push(res.data)
          setPatientname(patientinfo[0].details.name)
          setPatientID(patientinfo[0].ID)
  
        })
        .catch(err => {
          console.log(err)
        })
  
  
  
    }, [])

    const handlenext=(id)=>{
      window.location="/patientrecords/"+id
    }


    return (

        <div>
          <Navbar bg={customStyle.backgroundColor}></Navbar>
          <div className='content-section' style={customStyle} >
    
            <h1>{greet}<br></br> <h1>{patientname}</h1>  </h1>
            <h1>ID:{patientID} </h1>
            <br></br>
            <Button link={"/patientrecords/"+id} name='My Records'></Button>
    
    
          </div>
    
    
        </div>
      )
    }

export default Patienthome;
    