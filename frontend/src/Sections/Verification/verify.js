import React, { useState } from 'react'
import '../Verification/verify.css'
import * as TiIcons from 'react-icons/ti'
import axios from 'axios'

function Verify(props) {
    const [click, setClick] = useState(false)
    const id=props.match.params.id

    const handleClick = (e) => {

        // setClick(true)
        e.preventDefault()
        var user_input=e.target['ID'].value;

        axios.get("/searchuser", {
            params: {
              ID: user_input
            }
          })
            .then(res=>{
                 console.log("Response received")
                 console.log(res.data)
                 if(res.data.res=="YES"){
                    //  window.location='/verify/prescription/'+id
                    window.location="/otp/"+id+"/"+user_input
                 }
                 else{
                     alert('Enter valid ID  ')
                 }
             })
             .catch(err=>{
                 console.log(err)
             })
    }

    return (
        <div>
            <div className="verify">
                <form onSubmit={handleClick}>
                    <div className="ui left huge icon input">

                        <input type="text" placeholder="Enter Patient ID" name="ID" autocomplete='off' />
                        <i className="users icon"></i>

                    </div>
                    <div className="button">

                        <button className="vb ui inverted primary button" ><TiIcons.TiTickOutline size={25} /></button>
                    </div>
                </form>
            </div>


        </div>
    )




}
export default Verify;
