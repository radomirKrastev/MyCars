import React from 'react';

import { Route } from 'react-router-dom';
import SideMenu from '../SideMenu';
import SellCar from '../SellCar';
const RouteWrapper = ({
    component: Component,
    ...rest
}) => {
    console.log({...rest, Component});
    return <Route {...rest} render={props =>
        <SideMenu {...props}>
            <Component {...props} />
        </SideMenu>
    } />

};
    


export default RouteWrapper;
