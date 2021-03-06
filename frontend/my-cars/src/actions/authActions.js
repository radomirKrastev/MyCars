import authService from '../services/authService';
import { push } from 'connected-react-router';

import {
    LOGIN_FETCH_SUCCESS,
    // REGISTER_FETCH_SUCCESS,
    USER_LOGOUT,
} from './actionTypes';

const fetchLoginSuccess = (userData) => ({
    type: LOGIN_FETCH_SUCCESS,
    payload: userData
});

// const fetchRegisterSuccess = (userData) => ({
//     type: REGISTER_FETCH_SUCCESS,
//     payload: userData
// });

const userLogout = () => ({
    type: USER_LOGOUT
});

export const login = (username, password) => async dispatch => {
    try {
        const loginResponse = await authService.login({ username, password});
        console.log(loginResponse);
        dispatch(fetchLoginSuccess(loginResponse));
        dispatch(push('/choose-cars'));
    } catch (err) {
        console.log(err);
    }
};

export const register = userData => async dispatch => {
    try {
        await authService.register(userData);
        dispatch(push('/login'));

    } catch (err) {
        console.log(err);
    }
};

export const logout = () => async dispatch => {
    try {
        dispatch(userLogout());
        dispatch(push('/login'));
        console.log("You have signed out.");
    } catch (err) {
        // TODO: notification logout error
        console.error(err);
    }
}
