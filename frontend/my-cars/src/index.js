import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

import { StylesProvider } from '@material-ui/core/styles';
import App from './App';
import store, { history } from './config/store';

// import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <StylesProvider injectFirst>
                <App />
            </StylesProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
