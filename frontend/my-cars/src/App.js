import React from 'react';
import { Switch, Route } from "react-router-dom";

import isAuthenticated from './middlewareHoc/isAuthenticated';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ChooseCars from './components/ChooseCars';

// import './App.scss';

const App = () => (
  <Switch>
    <Route path='/' exact component={isAuthenticated(Home)}/>
    <Route path='/choose-cars' exact component={isAuthenticated(ChooseCars)}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/register' exact component={Register}/>
  </Switch>
);

export default App;
