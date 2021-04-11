import './App.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Drhome from './Sections/DrHome/Drhome';
import Patienthome from './Sections/Patienthome/Patienthome';
import Verify from './Sections/Verification/verify';
import Otp from './Sections/Otp/Otp';
import NewPres from "./Sections/Prescription/NewPres";
import Myinfo from './Sections/DrHome/myinfo';
import Showpres from './Sections/Printprescription/showpres';
import Printrecord from './Sections/Printrecord/Printrecord';
import Patientrecords from './Sections/Patientrecords/Patientrecords';
import Transactions from './Sections/Blockchain/Transactions';
import Homepage from './Sections/Homepage/Homepage';
import PresVerify from './Sections/Blockchain/PresVerify';
import DrLogin from './Sections/DrLogin/DrLogin';
import PatientLogin from './Sections/PatientLogin/PatientLogin';

function App() {
  return (<div className='App'>

    <Router>
      <Switch>
        <Route exact path="/drhome/:id" render={(props) => <Drhome {...props} />} />
        <Route exact path="/verify/:id" component={Verify} />
        <Route exact path="/patienthome/:id" render={(props) => <Patienthome {...props} />} />
        <Route  exact path="/otp/:idone/:idtwo" component={Otp} />
        <Route  path="/verify/prescription/:idone/:idtwo" render={(props)=><NewPres {...props}/>} />
        <Route exact path="/myinfo/:id" render={(props)=><Myinfo {...props}/>} />
        <Route   exact path="/patientrecords/myprescription/:idone/:idtwo" render={(props)=><Showpres {...props}/>}/>
        <Route   exact path="/patientrecords/printrecord/:idone/:idtwo" render={(props)=><Printrecord {...props}/>}/>
        <Route  exact path="/patientrecords/:id" render={(props)=><Patientrecords {...props}/>} />
        <Route  exact path="/transactions" component={Transactions} />
        <Route exact path="/" component={Homepage} />
        <Route  exact path="/patientrecords/presverify/:idone/:idtwo" render={(props)=><PresVerify {...props}/>} />
        <Route  exact path="/drlogin" component={DrLogin} />
        <Route  exact path="/patientlogin" component={PatientLogin} />
        
      </Switch>
    </Router>

  </div>)
}

export default App;
