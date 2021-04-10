import React, { useState } from 'react';
import '../Patientrecords/Patientrecords.css';
// import '../../components/Records/Records.css';

function Patientrecords(props) {


    return (<div>
        <div className='patient-record'>
            <br></br>

            <h1 className='title'>My Records</h1>
            <br></br>



            <div class="patientrecords ui black inverted segment">
                <h2>Records</h2>
                <br></br>
                <div className="ui black inverted form">
                    <form  >
                        <div className="three fields">
                            <div className="field">


                                <label><h3>From</h3></label>
                                <br></br>

                                <input type='date' name="from" className='from-date-picker'></input>



                            </div>
                            <div className="field">



                                <label><h3>To</h3></label>
                                <br></br>
                                <input type='date' name="to" className='to-date-picker'></input>


                            </div>
                            <div className="six fields">

                                <br></br>
                                <br></br>
                                <button type="submit" className='date-button ui inverted primary button'><i class="search icon"></i>Search</button>



                            </div>
                        </div>
                        <br></br>
                        {/* <h5 className='title'>No records found</h5> */}

                    </form>

                </div>


            </div>






        </div>
    </div>)

};
export default Patientrecords;
