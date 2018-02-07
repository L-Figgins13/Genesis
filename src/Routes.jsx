import React from 'react';
import {Route, indexRedirect, withRouter} from 'react-router';

import App from './App.jsx';
import GamesList from './GamesList';
import HelloWorld from './HelloWorld';

const NoMatch = () => <p>Page Not Found </p>;

export default (
    <Route path = "/" component = {App}>
        <indexRedirect to="/games" />
        <Route path = "games" component={withRouter(IssueList)}
)