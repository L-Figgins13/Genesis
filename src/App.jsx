import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Auth from '../client/auth.js';
import {Route, Switch, BrowserRouter,Link, Redirect, withRouter} from 'react-router-dom';


//need to be refractored still
import Home from './blocks/Home';
import GamesList from './container/GamesList.jsx';

//import containers
import CreateGame from './container/CreateGame.jsx';
import Game from './container/Game.jsx';
import Profile from './container/Profile.jsx';
import Login from './container/Login.jsx';
import Signup from './container/Signup.jsx';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        Auth.isUserAuthenticated() ? (
            <Component {...props} {...rest} />
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }} />
        )
    )}/>
)

const LoggedOutRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => ( 
        Auth.isUserAuthenticated() ? (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }} />
        ) : (
            <Component {...props} {...rest} />
        )
    )} />
)

const PropsRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        <Component {...props} {...rest} />
    )} />
)

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        };
    };

    componentDidMount(){
        this.toggleAuthenticateStatus();
    }

    toggleAuthenticateStatus() {
        this.setState({authenticated: Auth.isUserAuthenticated()})
    }
    
    //food
    render() {
       return(
       <div>
         <Switch>
             <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
             
             <PrivateRoute exact path = "/games" component={GamesList} toggleAuthenticateStatus={()=> this.toggleAuthenticateStatus()} />
             <PrivateRoute exact path = "/games/create" component={CreateGame} toggleAuthenticateStatus={()=> this.toggleAuthenticateStatus()} />
             <PrivateRoute path = '/games/:id' component={Game} />
             <PrivateRoute path = '/users/:id' component={Profile} />
             
             <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={()=> this.toggleAuthenticateStatus()} />
             <LoggedOutRoute path="/signup" component={Signup} toggleAuthenticateStatus={()=>this.toggleAuthenticateStatus()} />
             
         </Switch>   
       </div> )
    }
}

if (module.hot) {
    module.hot.accept();
}





