import React from 'react';
import { Switch, Route } from "react-router-dom";

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

// import './App.scss';

const App = () => (
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/register' exact component={Register}/>
  </Switch>
);

export default App;
