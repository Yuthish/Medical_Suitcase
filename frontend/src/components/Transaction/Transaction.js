import React,{useEffect,useState} from 'react';

function Transaction(){

    return(<div className="prescription-form" style={{ paddingBottom: '22.2%' }}>
    <h1 className="heading" style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '80px' }}>Transactions</h1>
    <div  style={{borderRadius:'18px',borderStyle:'none'}}>
        <div  style={{ width: '40%', alignContent: 'center', fontSize: '50px',paddingLeft:'50px' }}>

            <table style={{ fontSize: '15px',borderRadius:'15px' }} class="ui  inverted five celled column  table">
                <thead>

                    <tr>
                        <th><h2>Hash</h2></th>
                        <th><h2>Time</h2></th>
                        <th><h2>Transaction Sig</h2></th>
                        <th><h2>Size</h2></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
        <td style={{ fontSize: '17px' }}>sakohdhsd</td>
        <td style={{ fontSize: '17px' }}>sakohdhsd</td>
        <td style={{ fontSize: '17px' }}>sakohdhsd</td>
        <td style={{ fontSize: '17px' }}>sakohdhsd</td>
        </tr>
                    
                    
                </tbody>
            </table>
        </div>

    </div>
</div>)
};
export default Transaction;