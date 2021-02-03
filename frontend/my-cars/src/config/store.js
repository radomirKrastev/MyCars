import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { throttle } from '../utils/helpers';

import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState) {
            return JSON.parse(serializedState);
        }
    } catch (error) {
        return undefined;        
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);

        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
}

const middlewares = [routerMiddleware(history), thunk];

console.log("STORE 1", window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
console.log("STORE 2", compose)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

store.subscribe(throttle(() => {
    // Remove applicationLoader from state to fix bug with frozen loader on refresh
    const {applicationLoader, ...state} = store.getState();
    saveState(state);
}, 1000));

export default store;
