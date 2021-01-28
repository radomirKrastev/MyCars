import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

// import './App.scss';

const App = () => (
  <Switch>
    <Route path='/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
  </Switch>
);

export default App;
