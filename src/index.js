import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getStore } from './store/store';
import App from './app';
import './app.scss';

ReactDOM.render(
    <Provider store={ getStore() }>
        <App />
    </Provider>,
    document.getElementById('main')
);
