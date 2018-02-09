import React from 'react';
import {Route, indexRedirect, withRouter} from 'react-router';

import App from './App.jsx';
import GamesList from './GamesList.jsx';
import HelloWorld from './HelloWorld.jsx';

const NoMatch = () => <p>Page Not Found </p>;

export default (
    <Route path = "/" component = {App}>
        <indexRedirect to="/helloworld" />
        <Route path = "helloworld" component={HelloWorld} />
        <Route path = "games" component={withRouter(GamesList)} />
        <Route path = "*" component = {NoMatch} />
    </Route>
);