import React, { useRef, useEffect, Component } from 'react';
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';
import medwm from '../Printprescription/med_sui.png';

class ComponentToPrint extends Component {
    render() {
        return (

            <div className='patient-record1' style={{ paddingLeft: '20px', paddingRight: '20px', color: 'black', backgroundColor: 'white' }}>

                <br></br>
                <div style={{ textAlign: 'center' }}>
                    <h1>Prescription</h1>
                    <br></br>
                </div>

                <div style={{ color: 'black', backgroundColor: 'white' }} class="patientrecords ui inverted segment">
                    <div className="patientrecords ui inverted form">
                        <h1>Details</h1>
                        <table style={{ color: 'black', backgroundColor: 'white' }} class="ui celled column  table">

                            <tbody>
                                <tr>
                                    <td><h4>Doctor ID </h4></td>
                                    <td>23</td>
                                    <td><h4>Doctor Name</h4></td>
                                    <td>Dr.Magnus C</td>
                                    <td><h4>Hospital ID</h4></td>
                                    <td>JAY</td>
                                    <td><h4>Date</h4></td>
                                    <td>10/04/2021</td>

                                </tr>
                                <tr>
                                    <td><h4>Patient ID</h4></td>
                                    <td>32</td>
                                    <td><h4>Patient Name</h4></td>
                                    <td>Levy Rosman</td>
                                    <td><h4>DOB</h4></td>
                                    <td>01/02/1991</td>
                                    <td><h4>Gender</h4></td>
                                    <td>Male</td>
                                    <td><h4>Age</h4></td>
                                    <td>30</td>
                                </tr>
                            </tbody>
                        </table>


                        <h1>Medicines</h1>
                        <img className='suitcasebg' src={medwm}></img>

                        <table style={{ color: 'black', backgroundColor: 'white' }} class="ui four column  table ">

                            <thead>
                                <tr>
                                    <th><h4>Name</h4></th>
                                    <th><h4>Time</h4></th>
                                    <th><h4>Before/After Meal</h4></th>
                                    <th><h4>No of days</h4></th>

                                </tr>
                            </thead>
                        </table>
                        <div>
                            <h1 style={{ marginTop: '20px' }}>Report</h1>
                            <h3>Slight Fever hedache</h3>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

function Showpres(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div style={{ color: 'black', backgroundColor: 'white' }}>
            <ComponentToPrint ref={componentRef} />
            <button className="ui inverted primary button" style={{ position: 'absolute', left: '1350px', bottom: '700px' }} onClick={handlePrint}>Print this out!</button>
        </div>
    );

}
export default Showpres;