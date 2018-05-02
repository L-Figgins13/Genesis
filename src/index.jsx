import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'rebass';

const contentNode = document.getElementById('contents');

import App from './App.jsx';
ReactDOM.render((
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>), contentNode);

if (module.hot) {
    module.hot.accept();
}