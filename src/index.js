import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createAppStore from './store/Store';
import {setupSocket} from "./services/socketService";

const store = createAppStore();
setupSocket(store.dispatch)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
