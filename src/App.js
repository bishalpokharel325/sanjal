
import './App.css';
import Routes from './Routes';
import loggedin from './Loggedin'
import Routesloggedin from './Routesloggedin';
import Routesloggedout from './Routesloggedout';
import { useState } from 'react';

function App() {
  const [log, setloggedin] = useState(false)
  return (
    <div className="app">
      {/* {log==true?<Routesloggedin/>:<Routesloggedout/>} */}
      <Routes/>
      
    </div>
  );
}

export default App;
