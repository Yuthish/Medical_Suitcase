import React,{useState,useEffect} from 'react'
import '../DrHome/drinfo.css';
import axios from 'axios';


function PresVerify(props) {
    console.log(props.match.params._id)
    var doctorID;
    var privateKey;
    const [pvtKey, setPvtKey] = useState('')
    const [pubKey, setPubKey] = useState('')
    const [pres, setPres] = useState([])
    var arr=[]
    var signature;
    useEffect(()=>{
        axios.get("/gettingrecord",{
            params:{
                id:props.match.params.idtwo
            }
        })
        .then(res=>{
            
            arr.push(res.data)
            console.log(arr)
            doctorID=res.data.doc.ID
        axios.get('/getuser',{
                params:{
                    id:doctorID,

                }
            })
            .then(res=>{
                console.log(res.data)
                setPubKey(res.data.public_key)
                setPvtKey(res.data.private_key)
                privateKey=res.data.private_key
                console.log(pvtKey)
                console.log(pubKey)
                
                //Signature
                
                axios.get('/passsig',{
                    params:{
                        pvtKey:privateKey,
                        pubKey:pubKey,
                        pres:arr[0]
                    }
                })
                .then(res=>{
                    console.log("ehwvhe")
                    signature=res.data
                    console.log(res.data)
                    console.log(signature)
                })

               
         

                
            })
            .catch(err=>{
                console.log(err)


            })
            
        })
        .catch(err=>{
            console.log(err)
            

        })
    })

  const handleSubmit=(e)=>{
      var input=e.target['pub'].value
      console.log(input)
      axios.get("/check",{
          params:{
              input:input,
              pres:arr[0],
              sig:signature
          }
      })
      .then(res=>{
          if(res.data){
              alert("Your Record is unforged!!!")
          }
          else{
              alert("Oops!!!Looks like ur data is forged")

          }
      })



    
      
  
      // this.setState({patientID:info[0].ID})
      // this.setState({patientDOB:info[0].details.dob})
      // this.setState({patientName:info[0].details.name})
      // this.setState({doctorName:info[0].doc.name})
      //  this.setState({doctorID:info[0].doc.ID})
      // this.setState({doctorOrg:info[0].doc.place})
      //  this.setState({date:info[0].date})
      // this.setState({report:info[0].report})
      // console.log(info[0].mymedicalrecords.medicine_list)
      // this.setState({medicines:[info[0].medicine_list]})
      // console.log(this.state.medicines)

  
     
      
    
    e.preventDefault()

  }
  return (
    <div className="prescription-form" style={{paddingBottom:'15.2%'}}>
    <div className="login-box ui item inverted segment box" style={{top:'25px'}}>
      <div className="ui header">
        <h1>Verify Your Prescription</h1>
      </div>
     
      <form className="ui form" style={{paddingBottom:'20px'}} onSubmit={handleSubmit}>
        <div className="field">
          <label style={{fontSize:'15px'}}>Doctor Public Key</label>
          <input type="text" name="pub" placeholder="Enter Doctor Public Key " />
        </div>
        
        <button type="submit" style={{width: '20%'}} className="ui inverted primary button" type="submit">Verify</button>
      </form>
    </div>

  </div>
  )
}

export default PresVerify;