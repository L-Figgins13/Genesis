import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

const contentNode = document.getElementById('contents');

import App from './App.jsx';
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), contentNode);

if (module.hot) {
    module.hot.accept();
}