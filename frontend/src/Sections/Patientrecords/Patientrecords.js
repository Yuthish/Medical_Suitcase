import React, { useState } from 'react';
import '../Patientrecords/Patientrecords.css';

import axios from 'axios'

function Patientrecords(props) {
    var id = props.match.params.id
    const [toggle, setToggle] = useState(false)
    console.log(id)
    const [data, setData] = useState([])


    const handleSubmit = (e) => {

        var from = e.target['from'].value
        var to = e.target['to'].value

        console.log('2021-09-15' < '2019-09-15')
        axios.get("/fetchdata", {
            params: {
                from: from,
                to: to,
                id: id
            }
        })
            .then(res => {
                // console.log(res.data)
                setData(res.data)
                console.log(data)

            })

        e.preventDefault();







    }

    const list = data.map(x => {
        return (
            <div class="patientrecords ui inverted segment">
                <div className="ui inverted form">
                    <div className="one field">
                        <h1>Dr.{x.doc.name}</h1>
                        <h3>{x.doc.place} | {x.date}</h3>
                        <br></br>
                        <div>
                            <h2>Details</h2>
                            <p>{x.report}</p>
                            <button className="verify-button" type='button' onClick={(e) => {
                                    
                                    window.location = "/patientrecords/presverify/" + id + "/" + x._id;
                                    e.preventDefault();
                                }} className=' ui inverted primary button'>Verify</button>
                            <button type='button' onClick={(e) => {
                                e.preventDefault();
                                window.location = "/patientrecords/myprescription/" + id + "/" + x._id;
                            }} className='report-button ui inverted primary button'>See Report</button>


                        </div>





                    </div>

                </div>

            </div>

        )
    })











    return (<div>
        <div className='patient-record'>
            <br></br>

            <h1 className='title'>My Records</h1>
            <br></br>


            {console.log(data)}
            <div class="patientrecords ui black inverted segment">
                <h2>Records</h2>
                <br></br>
                <div className="ui black inverted form">
                    <form onSubmit={handleSubmit} >
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


            {list}



        </div>
    </div>)

};
export default Patientrecords;
