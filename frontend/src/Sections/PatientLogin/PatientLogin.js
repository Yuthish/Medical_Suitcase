import React from 'react';
import '../DrLogin/DrLogin.css';
import Patientlogin from '../PatientLogin/PatientLogin.png'
import Login from '../../components/Login/Login'

function PatientLogin() {

    return (<div className='login'>
    <div className="ui container centered stackable grid">
    <div className="ten wide column computer only image">
      <img className='drlogin' src={Patientlogin} size alt="Patient" srcSet />
    </div>
    <Login type='Patient Login' link="patient"></Login>
  </div>
  </div>
  )

};

export default PatientLogin;






