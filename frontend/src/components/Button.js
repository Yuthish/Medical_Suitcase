import React from 'react';
import {Link} from 'react-router-dom'

function Button(props){
    return(
        <Link to={props.link}>
           <button  className="ui inverted primary button">{props.name}</button>
       </Link>
    )
};
export default Button;
