import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'rebass';
import {injectGlobal} from 'styled-components';

injectGlobal`
 body {margin: 0;}
`

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