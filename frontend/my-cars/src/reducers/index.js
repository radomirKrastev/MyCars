import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth, * as authSelector from './authReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    auth
});

export default createRootReducer;
