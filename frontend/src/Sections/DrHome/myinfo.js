import React, { useState, useEffect } from 'react'
import './drinfo.css'

function Myinfo(){


    return (
        <div className="prescription-form" style={{ paddingBottom: '15.2%' }}>
          <h1 className="heading" style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '80px' }}>My Info</h1>
          <div class="ui horizontal  segments">
            <div class="ui black inverted segment" >
              <img src='' style={{ position: 'absolute', bottom: '20px', right: '110px' }}></img>
            </div>
    
            <div class="ui black inverted segment" style={{ width: '40%', alignContent: 'center', fontSize: '50px' }}>
    
              <table style={{ fontSize: '20px' }} class="ui four inverted celled column  table">
    
    
                <tbody>
                  <tr>
                    <td><h2> Name</h2></td>
                    <td style={{ fontSize: '17px' }}>Magnus</td>
                    <td><h2> ID</h2></td>
                    <td style={{ fontSize: '17px' }}>23</td>
    
                  </tr>
                  <tr>
                    <td><h2> DOB</h2></td>
                    <td style={{ fontSize: '17px' }}>09/04/2001</td>
                    <td><h2> Blood Group</h2></td>
                    <td style={{ fontSize: '17px' }}>B+ve</td>
                  </tr>
                  <tr>
                    <td><h2> Gender</h2></td>
                    <td style={{ fontSize: '17px' }}>Male</td>
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