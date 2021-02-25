import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './templates/pages/Home'
import News from './templates/pages/News'
import Signup from './templates/pages/Signup'
import Signin from './templates/pages/Signin'
import Profile from './templates/pages/Profile'
import Messages from './templates/pages/Messages'
import Notifications from './templates/pages/Notifications'

function Routesloggedout() {
    return (
        <div>
            <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/news" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signup}/>
          <Route path="/profile" component={Home}/>
          <Route path="/messages" component={Home}/>
          <Route path="/notifications" component={Home}/>
      </Switch>
      </BrowserRouter>
        </div>
    )
}

export default Routesloggedout
