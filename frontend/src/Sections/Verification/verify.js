import React, { useState } from 'react'
import '../Verification/verify.css'
import * as TiIcons from 'react-icons/ti'


function Verify(props) {

    const handleClick = (e) => {

        // setClick(true)
        e.preventDefault()
    }

    return (
        <div>
            <div className="verify">
                <form onSubmit={handleClick}>
                    <div className="ui left huge icon input">

                        <input type="text" placeholder="Enter Patient ID" name="ID" />
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
