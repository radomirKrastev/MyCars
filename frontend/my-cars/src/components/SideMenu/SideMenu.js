import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authActions';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { NavLink } from 'react-router-dom';

import './SideMenu.scss';

const menuItems = [
    {
        title: 'Choose your car',
        navigateTo: '/choose-cars',
        icon: <ImportContactsIcon />
    },
    {
        title: 'Sell your car',
        navigateTo: '/sell-car',
        icon: <AttachMoneyIcon />
    },
    {
        title: 'My car ads',
        navigateTo: '/my-car-ads',
        icon: <DirectionsCarIcon />
    },
]

const SideMenu = ({
    logout,
    children,
}) => {
    return (
        <div className="my-cars-layout">
            {/* <div className="my-cars-navigation-side"> */}
                <Drawer anchor="left" open={true} variant="permanent">
                    <div
                        className="side-menu"
                        role="presentation"
                    >
                        <List>
                            {menuItems.map((x) => (
                                <ListItem
                                    button
                                    key={x.title}
                                    component={NavLink}
                                    exact={true}
                                    to={x.navigateTo}
                                    className="list-item"
                                    activeClassName="selected"
                                >
                                    <ListItemIcon>{x.icon}</ListItemIcon>
                                    <ListItemText primary={x.title} />
                                </ListItem>
                            ))}

                            <ListItem
                                key={'Logout'}
                                button
                                onClick={() => logout()}
                                className="list-item"
                            >
                                <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
                                <ListItemText primary={'Logout'} />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            {/* </div> */}
            <div className='my-cars-content'>
                {children}
            </div>
        </div>
    )
};

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(SideMenu);
