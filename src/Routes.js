import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './templates/pages/Home'
import News from './templates/pages/News'
import Signup from './templates/pages/Signup'
import Signin from './templates/pages/Signin'
import Profile from './templates/pages/Profile'
import Messages from './templates/pages/Messages'
import Notifications from './templates/pages/Notifications'

function Routes() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/notifications" component={Notifications}/>
      </Switch>
      </BrowserRouter>
    )
}

export default Routes
