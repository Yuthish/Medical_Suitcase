import React, { useState, useEffect } from 'react'
import './Prescription.css';
import * as ImIcons from "react-icons/im";
import { Link } from 'react-router-dom';


function NewPres(props) {
    
    const [toggle, setToggle] = useState(true)


    return (

        <div className="prescription-form">
            <h1 className="heading" style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '80px' }}>Create Prescription</h1>
            <div class="ui horizontal  segments">
                <div class="ui black inverted segment" >
                    <img style={{ position: 'absolute', bottom: '20px', right: '110px' }} src=''></img>
                </div>

                <div class="ui black inverted segment" style={{ width: '40%', alignContent: 'center', fontSize: '50px' }}>

                    <table style={{ fontSize: '20px' }} class="ui four inverted celled column  table">


                        <tbody>
                            <tr>
                                <td><strong><h3>Patient Name</h3></strong></td>
                                <td style={{ fontSize: '17px' }}>Levy Roseman</td>
                                <td><strong>Patient ID</strong></td>
                                <td style={{ fontSize: '17px' }}>32</td>

                            </tr>
                            <tr>
                                <td><strong>DOB</strong></td>
                                <td style={{ fontSize: '17px' }}>09/04/2002</td>
                                <td><strong>Blood Group</strong></td>
                                <td style={{ fontSize: '17px' }}>H+ve</td>
                            </tr>
                            <tr>
                                <td><strong>Gender</strong></td>
                                <td style={{ fontSize: '17px' }}>Male</td>
                                <td><strong>Age</strong></td>
                                <td style={{ fontSize: '17px' }}>32</td>
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>







            <div className="medicinestable">

                <table class="ui selectable inverted table">
                    <thead>
                        <tr>

                            <th>Medicine/Drug</th>
                            <th>Time</th>
                            <th>Before/After Meal</th>
                            <th>No of Days</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        

                    </tbody>
                </table>
            </div>









            <div class="ui horizontal  segments medicines">
                <div class="ui black inverted segment report ">
                    <div className="ui inverted form">

                        <h1>Reports</h1>
                        {toggle ?
                            <form >
                                <label><h3>Report</h3></label>

                                <textarea className='drug-drop' style={{ marginTop: '7px' }} rows='5' placeholder="Type here- Patients Symtoms, diagonistic details.etc" name="Report" ></textarea>
                                <br></br>
                                <br></br>
                                <button  className="ui inverted primary button">Submit</button>

                            </form>
                            :

                            <div></div>


                        }


                    </div>


                </div>


                <div class="ui black inverted  segment">
                    <div className="ui inverted form">





                        <h1>Medicines</h1>
                        <form >

                            <label><h3>Drug</h3></label>
                            <select className='drug-drop' name="drugs" id="drugs" required>

                                <option value="" disabled selected>Select Drug</option>
                                <option value="Crocin">Crocin</option>
                                <option value="Xanax">Xanax</option>
                                <option value="Aspirin">Aspirin</option>
                                <option value="Dolo 650">Dolo 650</option>
                            </select>
                            <br></br>

                            <div className="ui checkbox">
                                <input type="checkbox" id="Morning" name="Morning" value="Morning" ></input>
                                <label style={{ paddingRight: '20px' }} className='' htmlFor="Morning">Morning</label>
                            </div>

                            <div className="ui checkbox">
                                <input type="checkbox" id="Afternoon" name="Afternoon" value="Afternoon"  ></input>
                                <label style={{ paddingRight: '20px' }} className='' htmlFor="Afternoon">Afternoon</label>
                            </div>
                            <div className="ui checkbox">
                                <input type="checkbox" id="Night" name="Night" value="Night"  ></input>
                                <label style={{ paddingRight: '20px' }} className='' htmlFor="Night"> Night </label>
                            </div>

                            <br></br>
                            <br></br>
                            <label for='Time'><h3>Time</h3></label>
                            <select className='drug-drop' name="Time" id="Time" required>
                                <option value="" disabled selected>Select Time</option>
                                <option value="Before Food">Before Food</option>
                                <option value="After Food">After Food</option>

                            </select>

                            <br></br>
                            <label for='Days'><h3>Days</h3></label>

                            <input className='days' type="number" id="Days" name="Days" min="1" max="30" required></input>
                            <br></br>
                            <br></br>
                            <br></br>

                            <button type='submit' className="ui inverted primary button">Add</button>

                        </form>



                    </div>

                </div>



            </div>

            {toggle ? null :
                <div className="view" >
                    <button class="ui primary button" style={{ marginLeft: '10px', position: 'relative', bottom: '230px' }} >View Prescription</button>
                </div>
            }

        </div>



    )

}
export default NewPres;