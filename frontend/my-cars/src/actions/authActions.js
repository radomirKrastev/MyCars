// import { auth } from 'utils/firebase';
import authService from '../services/authService';
import { push } from 'connected-react-router';

import {
    LOGIN_FETCH_SUCCESS,
    REGISTER_FETCH_SUCCESS,
    LOGOUT_FETCH_SUCCESS,
} from './actionTypes';

// import { setHomeInformationInitialState } from 'actions/agencyActions';

// import { showNotification, clearNotification } from 'actions/notificationActions';
// import { NOTIFICATION_TYPES } from 'constants/notificationTypes';
// import messages from 'utils/notificationMessages';
// import { AUTH_MESSAGES } from 'constants/messageConstants';
// import { ROLES } from 'constants/userConstants';

const fetchLoginSuccess = (userData) => ({
    type: LOGIN_FETCH_SUCCESS,
    payload: userData
});

const fetchRegisterSuccess = (userData) => ({
    type: REGISTER_FETCH_SUCCESS,
    payload: userData
});

const fetchLogoutSuccess = () => ({
    type: LOGOUT_FETCH_SUCCESS
});

export const login = (username, password) => async dispatch => {
    try {
        const loginResponse = await authService.login({username, password});
        console.log(loginResponse);
        // let response = await auth.signInWithEmailAndPassword(email, password);

        // if (!auth.currentUser.emailVerified) {
        //     await auth.signOut();
        //     throw new Error('Email not verified.');
        // }

        // let idToken = await auth.currentUser.getIdToken();

        // let agencyId;
        // let roles;

        // await auth.currentUser.getIdTokenResult().then(idTokenResult => {
        //     agencyId = idTokenResult.claims.agencyId;
        //     roles = idTokenResult.claims.roles;
        // });

        // dispatch(fetchLoginSuccess({ user: response.user, idToken, agencyId, roles }));
        // dispatch(showNotification(messages.loginSuccess, NOTIFICATION_TYPES.SUCCESS));
    } catch (err) {
        console.log(err);
        // if (err.message.includes('Email not verified.')) {
        //     dispatch(showNotification(messages.emailNotVerified, NOTIFICATION_TYPES.ERROR));
        // } else {
        //     dispatch(showNotification(messages.usernameOrPasswordtWrong, NOTIFICATION_TYPES.ERROR));
        // }
    }
};

export const register = userData => async dispatch => {
    try {
        await authService.register(userData);
        // await dispatch(fetchRegisterSuccess(user));

        // dispatch(showNotification(messages.registerSuccess, NOTIFICATION_TYPES.SUCCESS));
    } catch (err) {
        console.log(err);
        // dispatch(showNotification(err.message, NOTIFICATION_TYPES.ERROR));
    }
};

export const logout = () => async dispatch => {
    try {
        // // TODO: notification logout success
        // await auth.signOut();

        // dispatch(setHomeInformationInitialState());
        // dispatch(fetchLogoutSuccess());
        // dispatch(push('/login'));
        // console.log("You have signed out.");
    } catch (err) {
        // TODO: notification logout error
        // console.error(err);
    }
}
