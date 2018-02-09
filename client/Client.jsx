import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, broswerHistory} from 'react-router';

import routes from '../src/Routes.jsx'
import ContextWrapper from '../src/ContextWrapper.jsx'

const contentNode = document.getElementById('contents');

const WrappedApp = (props) => {
    <ContextWrapper {...props}>
        <Router history = {broswerHistory}>
            {routes}
        </Router>
    </ContextWrapper>
}

ReactDOM.render(<WrappedApp initialState={window.__INITIAL_STATE___} />, contentNode);

if (module.hot) {
    module.hot.accept();
}