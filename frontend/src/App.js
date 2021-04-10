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
      </Switch>
    </Router>

  </div>)
}

export default App;
