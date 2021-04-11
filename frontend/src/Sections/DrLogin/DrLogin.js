import React from 'react';
import './DrLogin.css';
import drlogin from '../DrLogin/Drlogin.png'
import Login from '../../components/Login/Login'
function DrLogin() {

    return (<div className='login'>
    <div className="ui container centered stackable grid">
    <div className="ten wide column computer only image">
      <img className='drlogin' src={drlogin} size alt="Dr" srcSet />
    </div>
    <Login type='Doctor Login' link='dr'></Login>
  </div>
  </div>
  )

};

export default DrLogin;






