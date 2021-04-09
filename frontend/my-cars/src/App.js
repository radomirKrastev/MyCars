import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RouteWrapper from './components/RouteWrapper';
import isAuthenticated from './middlewareHoc/isAuthenticated';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ChooseCars from './components/ChooseCars';
import MyCarAds from './components/MyCarAds';
import CarDetails from './components/CarDetails';
import SellCar from './components/SellCar';
import SideMenu from './components/SideMenu';
import withUserData from './middlewareHoc/withUserData';

const App = () => (
  <>
    <ToastContainer
      position="top-center"
    />
    <Switch>
      <RouteWrapper path='/choose-cars' component={isAuthenticated(ChooseCars)} />
      <RouteWrapper path='/my-car-ads' component={isAuthenticated(MyCarAds)} />
      <RouteWrapper path='/car-details/:carId' component={isAuthenticated(CarDetails)} />
      <RouteWrapper path='/sell-car' component={isAuthenticated(withUserData(SellCar))} />
      <RouteWrapper path='/' exact component={isAuthenticated(Home)} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/menu' exact component={SideMenu} />
    </Switch>
  </>
);

export default App;
