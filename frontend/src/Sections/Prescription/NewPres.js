import React, { useState, useEffect } from 'react'
import './Prescription.css';
import * as ImIcons from "react-icons/im";
import { Link } from 'react-router-dom';
import axios from 'axios'

var keywords=[]
function NewPres(props) {
    

    const [report, setReport] = useState([])
    const [selection, setSelection] = useState([])
    const [toggle, setToggle] = useState(true)
    const idone = props.match.params.idone;
    const idtwo=props.match.params.idtwo;
    const [medicines, setMedicines] = useState([])
    var arr;

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [bloodgroup, setBloodgroup] = useState('')
    const [dob, setDob] = useState('');
    const [piclink, setPiclink] = useState('')
    const [age, setAge] = useState(0)
    const [docName, setDocName] = useState('')
    const [docPlace, setDocPlace] = useState([])
    const [gender, setGender]=useState('')
    var patientinfo = []
    var docinfo=[]
    


    const get_age = (date) => {
        var dob = new Date(date);
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        return age + 1
      }


      useEffect(() => {
        axios.get("/getuser",{
          params:{
            id:idone
          }
        })
        .then(res=>{
        
          docinfo.push(res.data)
          setDocName(docinfo[0].details.name)
          console.log(docinfo[0].details.doc)
          setDocPlace(docinfo[0].details.doc.workplace_list)
          
        })
        
        axios.get('/getuser', {
          params: {
            id: idtwo
          }
        })
          .then(res => {
            
            patientinfo.push(res.data)
            setName(patientinfo[0].details.name)
            setId(patientinfo[0].ID)
            setDob(patientinfo[0].details.dob)
            
            setBloodgroup(patientinfo[0].details.blood_group)
            setPiclink(patientinfo[0].details.profile_pic)
            setGender(patientinfo[0].details.gender)
            let k=get_age(dob);
            
            setAge(k)
            
    
    
    
          })
          .catch(err => {
            console.log(err)
          })
    
    
    
      },[])

      const handleClickOne = (e) => {
        // setTimeoftheday(prevObj=>[...prevObj,{selection}])
        // console.log(timeoftheday)
        let a = []
        a.push(selection)
        
        setMedicines(prevmedicines => [...prevmedicines, { id: prevmedicines.length + 1, drugname: e.target['drugs'].value, time: selection, meal: e.target['Time'].value, noofdays: e.target['Days'].value }])
        
    
        e.preventDefault();
    
        console.log(e.target)
    
    
      }

      const handleClickTwo = (e) => {
        var link=`https://145d95fef381.ngrok.io`+`/api/?report=`+`${report}`
        link=encodeURI(link)
        

        // console.log(e.target)
        // var str=[]
        // str.push(e.target.value)
        // console.log(str)
        // setReport(str)
        // console.log(report)
        setToggle(false)
        e.preventDefault();
      

      axios.get(link)
      .then(res=>{
       
        
         
          // keywords.push(res.data.result)
          // console.log(keywords[0])
          res.data.result.forEach(x => {
            keywords.push(x)
            
          });

        
       
      })
      .catch(err=>{
        console.log(err)
      })
    
    
    
    
      }

      const handleReport = (e) => {
        
        setReport(e.target.value)
        
       
        


    
      }

      const handleSelection = (e) => {

        var x = e.target.value;
        arr = selection
        console.log(x)
        if (arr.includes(x)) {
          let index = arr.indexOf(x)
          arr.splice(index, 1)
    
    
          setSelection(arr)
        }
        else {
          arr.push(x)
          setSelection(arr)
        }
    
    
        console.log(selection, arr)
    
    
    
      }

      const handleDelete = (x) => {
        console.log(keywords)
        console.log(x)
        medicines.forEach(med => {
          if (med.id == x) {
            let i = medicines.indexOf(med)
            medicines.splice(i, 1)
            setMedicines(medicines)
    
          }
        })
    
      }

      const handlePrescription = () => {
        console.log(medicines)
        console.log(keywords)
          axios.get("/storemedicalrecords",{
            params:{
              medicines:medicines,
              report:report,
              id:id,
              idone:idone,
              name:name,
              docName:docName,
              docPlace:docPlace,
              words:keywords
            }
          })
            
                window.location="/patientrecords/printrecord/"+idone+"/"+id
        }


        const medList = medicines.map(med => {
            return (
        
        
        
        
            // const handlePrescription=()=>{
            //   console.log(medicines)
            //   axios.get("/storemedicalrecords",{
            //     params:{
            //       medicines:medicines,
            //       report:report,
            //       id:id,
            //       name:name
            //     }
            //   })
                
            //         window.location="/patientrecords/printrecord/"+id
                
                  
                
            // }
              <tr key={med.id.toString()}>
        
                <td>{med.drugname}</td>
        
                <td>{med.time.map(x => {
                  return (
                    <li >{x}</li>
                  )
                })}</td>
                <td>{med.meal}</td>
                <td>{med.noofdays}</td>
                <td>
                  <Link to="#" className="bin">
                    <ImIcons.ImBin onClick={() => { handleDelete(med.id) }}></ImIcons.ImBin>
                  </Link>
                </td>
        
        
              </tr>
        
        
        
        
            )
            //  console.log("Printed",med.id,med.meal,med.noofdays)
              })




    return (

        <div className="prescription-form">
            <h1 className="heading" style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '80px' }}>Create Prescription</h1>
            <div class="ui horizontal  segments">
                <div class="ui black inverted segment" >
                    <img style={{ position: 'absolute', bottom: '20px', right: '110px' }} src={piclink}></img>
                </div>

                <div class="ui black inverted segment" style={{ width: '40%', alignContent: 'center', fontSize: '50px' }}>

                    <table style={{ fontSize: '20px' }} class="ui four inverted celled column  table">


                        <tbody>
                            <tr>
                                <td><strong><h3>Patient Name</h3></strong></td>
                                <td style={{ fontSize: '17px' }}>{name.toUpperCase()}</td>
                                <td><strong>Patient ID</strong></td>
                                <td style={{ fontSize: '17px' }}>{id}</td>

                            </tr>
                            <tr>
                                <td><strong>DOB</strong></td>
                                <td style={{ fontSize: '17px' }}>{dob}</td>
                                <td><strong>Blood Group</strong></td>
                                <td style={{ fontSize: '17px' }}>{bloodgroup}</td>
                            </tr>
                            <tr>
                                <td><strong>Gender</strong></td>
                                <td style={{ fontSize: '17px' }}>{gender}</td>
                                <td><strong>Age</strong></td>
                                <td style={{ fontSize: '17px' }}>{age}</td>
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
                        {medList}
                        

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

                                <textarea onChange={handleReport} className='drug-drop' style={{ marginTop: '7px' }} rows='5' placeholder="Type here- Patients Symtoms, diagonistic details.etc" name="Report" ></textarea>
                                <br></br>
                                <br></br>
                                <button onClick={handleClickTwo}  className="ui inverted primary button">Submit</button>

                            </form>
                            :

                            <div>{report}</div>


                        }


                    </div>


                </div>


                <div class="ui black inverted  segment">
                    <div className="ui inverted form">





                        <h1>Medicines</h1>
                        <form onSubmit={handleClickOne} >

                            <label><h3>Drug</h3></label>
                            <select className='drug-drop' name="drugs" id="drugs" required>

                                <option value="" disabled selected>Select Drug</option>
                                <option value="Crocin">Crocin</option>
                                <option value="Xanax">Xanax</option>
                                <option value="Aspirin">Aspirin</option>
                                <option value="Dolo 650">Dolo 650</option>
                                <option value="Volini">Volini</option>
                                <option value="Azithromycin">Azithromycin</option>
                                <option value="Covaxin">Covaxin</option>
                                <option value="Pulmoclear">Pulmoclear</option>
                                <option value="Targit 20mg">Targit 20mg</option>
                                
                            </select>
                            <br></br>

                            <div className="ui checkbox">
                                <input type="checkbox" id="Morning" name="Morning" value="Morning" onChange={handleSelection}></input>
                                <label style={{ paddingRight: '20px' }} className='' htmlFor="Morning">Morning</label>
                            </div>

                            <div className="ui checkbox">
                                <input type="checkbox" id="Afternoon" name="Afternoon" value="Afternoon" onChange={handleSelection}  ></input>
                                <label style={{ paddingRight: '20px' }} className='' htmlFor="Afternoon">Afternoon</label>
                            </div>
                            <div className="ui checkbox">
                                <input type="checkbox" id="Night" name="Night" value="Night" onChange={handleSelection} ></input>
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
                    <button class="ui primary button" style={{ marginLeft: '10px', position: 'relative', bottom: '230px' }} onClick={handlePrescription}>View Prescription</button>
                </div>
            }

        </div>



    )

}
export default NewPres;