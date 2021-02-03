import React from 'react';
import { Switch, Route } from "react-router-dom";

import isAuthenticated from './middlewareHoc/isAuthenticated';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ChooseACar from './components/ChooseACar';

// import './App.scss';

const App = () => (
  <Switch>
    <Route path='/' exact component={isAuthenticated(Home)}/>
    <Route path='/choose-car' exact component={isAuthenticated(ChooseACar)}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/register' exact component={Register}/>
  </Switch>
);

export default App;
