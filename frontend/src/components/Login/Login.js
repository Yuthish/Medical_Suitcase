import React from 'react';
import { AiFillPropertySafety } from 'react-icons/ai';
import { FaWindows } from 'react-icons/fa';

function Login(props){
  const handleSubmit=(e)=>{
    e.preventDefault()
    var id=e.target['ID'].value
    
    window.location='/'+props.link+'home/'+id
  }
    return(<div className="six wide column ">
    <div className="login-box ui item inverted segment box">
      <div className="ui header">
        <h1>{props.type}</h1>
      </div>
     
      <form className="ui form" style={{paddingBottom:'20px'}} onSubmit={handleSubmit}>
        <div className="field">
          <label>ID</label>
          <input name="ID" placeholder="Enter ID " required autocomplete='off' />
        </div>
        <div className="field" style={{paddingBottom:'10px'}}>
          <label>Password</label>
          <input type="password" name="password"  placeholder="Password" required autocomplete='off'/>
          <small className="ui container right aligned"><a href="#">Forgot Password?</a></small>
        </div>
        <button style={{width: '100%'}} className="ui inverted primary button" type="submit">Login</button>
      </form>
    </div>

  </div>)
};
export default Login;