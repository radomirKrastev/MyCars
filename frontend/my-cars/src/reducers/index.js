import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth, * as authSelector from './authReducer';

const appReducer = history => combineReducers({
    router: connectRouter(history),
    auth
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


export default createRootReducer;
