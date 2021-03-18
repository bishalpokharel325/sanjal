import './App.css';
import Routes from './Routes';
import loggedin from './Loggedin'
import Routesloggedin from './Routesloggedin';
import Routesloggedout from './Routesloggedout';
import { createContext, useState } from 'react';
const UserContext=createContext()
const TokenContext=createContext()


function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  return (
    <div className="app">
      <TokenContext.Provider value={{token,setToken}}>
      <UserContext.Provider value={{user,setUser}}>
        {user?<Routesloggedin/>:<Routes/>}
      </UserContext.Provider>
        </TokenContext.Provider> 
    </div>
  );
}
export {UserContext,TokenContext};
export default App;
