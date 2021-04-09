import React, { useState, useEffect } from 'react'
import './drinfo.css'
import axios from 'axios'

function Myinfo(props){

  var ID=props.match.params.id

  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [phno, setPhno] = useState('')
  const [bloodgroup, setBloodgroup] = useState('')
  const [dob, setDob] = useState('');
  const [piclink, setPiclink] = useState('');
  const [gender, setGender] = useState('')
  var drinfo = []

  useEffect(() => {

    axios.get('/drinfo',{
      params:{
        id:ID
      }
    })
      .then(res => {
        console.log(res.data)
        drinfo = []
        drinfo.push(res.data)



        setName(drinfo[0].details.name)
        setId(drinfo[0].ID)
        setDob(drinfo[0].details.dob)
        setBloodgroup(drinfo[0].details.blood_group)
        setEmail(drinfo[0].email_addr)
        setPiclink(drinfo[0].details.profile_pic)
        setGender(drinfo[0].details.gender)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])


    return (
        <div className="prescription-form" style={{ paddingBottom: '15.2%' }}>
          <h1 className="heading" style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '80px' }}>My Info</h1>
          <div class="ui horizontal  segments">
            <div class="ui black inverted segment" >
              <img src={piclink} style={{ position: 'absolute', bottom: '20px', right: '110px' }}></img>
            </div>
    
            <div class="ui black inverted segment" style={{ width: '40%', alignContent: 'center', fontSize: '50px' }}>
    
              <table style={{ fontSize: '20px' }} class="ui four inverted celled column  table">
    
    
                <tbody>
                  <tr>
                    <td><h2> Name</h2></td>
                    <td style={{ fontSize: '17px' }}>{name.toUpperCase()}</td>
                    <td><h2> ID</h2></td>
                    <td style={{ fontSize: '17px' }}>{id}</td>
    
                  </tr>
                  <tr>
                    <td><h2> DOB</h2></td>
                    <td style={{ fontSize: '17px' }}>{dob}</td>
                    <td><h2> Blood Group</h2></td>
                    <td style={{ fontSize: '17px' }}>{bloodgroup}</td>
                  </tr>
                  <tr>
                    <td><h2> Gender</h2></td>
                    <td style={{ fontSize: '17px' }}>{gender}</td>
                    <td><h2> Age</h2></td>
                    <td style={{ fontSize: '17px' }}>21</td>
                  </tr>
                </tbody>
              </table>
            </div>
    
          </div>
        </div>
    
    
      )








}

export default Myinfo;