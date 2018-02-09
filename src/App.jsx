import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import HelloWorld from './HelloWorld.jsx';
import Login from './Login.jsx'
import GamesList from './GamesList.jsx';

function Main() {
    return (
    <main>
        <Switch>
            <Route exact path = '/' component = {HelloWorld} />
            <Route exact path='/login' component = {Login}  />
            <Route exact path = '/games' component = {GamesList} />
        </Switch>
    </main>
    )
}

export default class App extends React.Component {
    constructor() {
        super();
    }
    //food
    render() {
       return( <div>
            <h1>This is a title</h1>
            <Main />
       </div> )
    }
}

if (module.hot) {
    module.hot.accept();
}





