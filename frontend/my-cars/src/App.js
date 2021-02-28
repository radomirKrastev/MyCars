import React from 'react';
import { Switch, Route } from "react-router-dom";

import RouteWrapper from './components/RouteWrapper';
import isAuthenticated from './middlewareHoc/isAuthenticated';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ChooseCars from './components/ChooseCars';
import SideMenu from './components/SideMenu';

// import './App.scss';

const App = () => (
  <Switch>
    <RouteWrapper path='/choose-cars' component={isAuthenticated(ChooseCars)}/>
    <RouteWrapper path='/' exact component={isAuthenticated(Home)}/>
    {/* <Route path='/choose-cars' exact component={isAuthenticated(ChooseCars)}/> */}
    <Route path='/login' exact component={Login}/>
    <Route path='/register' exact component={Register}/>
    <Route path='/menu' exact component={SideMenu}/>
  </Switch>
);

export default App;
