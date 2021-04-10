import React, { useRef, useEffect, Component } from 'react';
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';
import axios from 'axios'
import medwm from '../Printprescription/med_sui.png';

class ComponentToPrint extends Component {

    constructor(props){
        super(props)
        this.state={
          patientID:"",
          patientDOB:"",
          patientName:"",
          patientGender:"",
          doctorID:"",
          doctorName:"",
          doctorOrg:"",
          date:"",
          report:"",
          medicines:[],
          
    
    
        }
        this.list=this.list.bind(this)
      }

      componentDidMount(){
        console.log(this.props.idtwo)
 
        axios.get("/getuser",{
         params:{
           id:this.props.idone
         }
       })
       .then(res=>{
         console.log(res.data)
         var info=[]
         
         info.push(res.data)
         var length=res.data.mymedicalrecords.length
         console.log(length)
         this.setState({patientID:info[0].ID})
         this.setState({patientDOB:info[0].details.dob})
         this.setState({patientName:info[0].details.name})
         // this.setState({doctorName:info[0].mymedicalrecords[length-1].doc.name})
         // this.setState({doctorID:info[0].mymedicalrecords[length-1].doc.ID})
         // this.setState({doctorOrg:info[0].mymedicalrecords[length-1].doc.place})
         // this.setState({date:info[0].mymedicalrecords[length-1].date})
         // this.setState({report:info[0].mymedicalrecords[length-1].report})
         // console.log(info[0].mymedicalrecords[length-1].medicine_list)
         // this.setState({medicines:[info[0].mymedicalrecords[length-1].medicine_list]})
         // console.log(this.state.medicines)
   
     
        
         
       })
       
       axios.get("/getrecord",{
         params:{
           idone:this.props.idone,
           idtwo:this.props.idtwo
         }
       })
       .then(res=>{
         console.log(res.data)
         var info=[]
         
         info.push(res.data)
         
     
         // this.setState({patientID:info[0].ID})
         // this.setState({patientDOB:info[0].details.dob})
         // this.setState({patientName:info[0].details.name})
         this.setState({doctorName:info[0].doc.name})
          this.setState({doctorID:info[0].doc.ID})
         this.setState({doctorOrg:info[0].doc.place})
          this.setState({date:info[0].date})
         this.setState({report:info[0].report})
         // console.log(info[0].mymedicalrecords.medicine_list)
         this.setState({medicines:[info[0].medicine_list]})
         // console.log(this.state.medicines)
   
     
        
         
       })
   
     }

     list=(medicines)=> {
      
        console.log(medicines)
        return medicines.map(x=>{
          x.map(med=>{
          console.log(med)
          return (
             <tr key={med.id}>
               
               <td>{med.drugname}</td>
       
               {/* <td>{med.time.map(x => {
                 return (
                   <li >{x}</li>
                 )
               })}</td> */}
               <td>{med.meal}</td>
               <td>{med.noofdays}</td>
               
       
       
             </tr>
       
       
       
       
           )
        })}
        )
       
      
       
     }

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
                                    <td>{this.state.doctorID}</td>
                                    <td><h4>Doctor Name</h4></td>
                                    <td>{this.state.doctorName}</td>
                                    <td><h4>Hospital ID</h4></td>
                                    <td>{this.state.doctorOrg}</td>
                                    <td><h4>Date</h4></td>
                                    <td>{this.state.date}</td>

                                </tr>
                                <tr>
                                    <td><h4>Patient ID</h4></td>
                                    <td>{this.state.patientID}</td>
                                    <td><h4>Patient Name</h4></td>
                                    <td>{this.state.patientName}</td>
                                    <td><h4>DOB</h4></td>
                                    <td>{this.state.patientDOB}</td>
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
                            <tbody>
                {this.state.medicines.map(x=>{
         return x.map(med=>{
         console.log(med)
         return (
            <tr key={med.id}>
              
              <td>{med.drugname}</td>
      
              <td>{med.time.map(x => {
                return (
                  <li key={med.id.toString()}>{x}</li>
                )
              })}</td>
              <td>{med.meal}</td>
              <td>{med.noofdays}</td>
              
      
      
            </tr>
      
      
      
      
          )
       })}
       )}
                  
  
                </tbody>
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

    var idone=props.match.params.idone
    var idtwo=props.match.params.idtwo    
    console.log(idone,idtwo)
    return (
        <div style={{ color: 'black', backgroundColor: 'white' }}>
            <ComponentToPrint ref={componentRef} idone={idone} idtwo={idtwo}/>
            <button className="ui inverted primary button" style={{ position: 'absolute', left: '1350px', bottom: '700px' }} onClick={handlePrint}>Print this out!</button>
        </div>
    );

}
export default Showpres;