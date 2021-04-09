import './App.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Drhome from './Sections/DrHome/Drhome';
import Patienthome from './Sections/Patienthome/Patienthome';
import Verify from './Sections/Verification/verify';


function App() {
  return (<div className='App'>

    <Router>
      <Switch>
        <Route exact path="/drhome/:id" render={(props) => <Drhome {...props} />} />
        <Route exact path="/verify/:id" component={Verify} />
        <Route exact path="/patienthome/:id" render={(props) => <Patienthome {...props} />} />

      </Switch>
    </Router>

  </div>)
}

export default App;
