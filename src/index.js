import React from 'react';

import './index.css';

import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

import {store} from './store';
import {Provider} from 'react-redux';
import {CssBaseline} from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline/>
                <App/>
            </BrowserRouter>
        </Provider>
    </>
);
