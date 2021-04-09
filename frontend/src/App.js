import './App.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (<div className='App'>

<Router>
  <Switch>
    <Navbar></Navbar>
  </Switch>
</Router>

  </div>)
}

export default App;
