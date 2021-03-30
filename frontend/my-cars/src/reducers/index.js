import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth, * as authSelector from './authReducer';
import cars, * as carsSelector from './carsReducer';

const appReducer = history => combineReducers({
    router: connectRouter(history),
    auth,
    cars
})

const createRootReducer = history => (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }

    return appReducer(history)(state, action);
};

export const isAuthenticated = state => authSelector.isAuthenticated(state.auth);
export const getUserId = state => authSelector.getUserId(state.auth);
export const getAccessToken = state => authSelector.getAccessToken(state.auth);

export const getCars = state => carsSelector.getCars(state.cars);

export default createRootReducer;
