import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Auth from '../client/auth.js';
import {Route, Switch, BrowserRouter,Link, Redirect, withRouter} from 'react-router-dom';

import HelloWorld from './HelloWorld.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import GamesList from './GamesList.jsx';
import CreateGame from './CreateGame.jsx';
import GameLobby from './GameLobby.jsx';


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

// function Main() {
//     return (
//     <main>
//         <Switch>
//             <Route exact path = '/' component = {HelloWorld} />
//             <Route exact path='/login' component = {Login}  />
//             <Route exact path = '/games' component = {GamesList} />
//             <Route exact path = '/games/create' component = {CreateGame} />
//             <Route path = '/games/:id' component = {GameLobby} />      
//         </Switch>
//     </main>
//     )
// }

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
             <PropsRoute exact path="/" component={HelloWorld} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
             <PrivateRoute exact path = "/games" component={GamesList} toggleAuthenticateStatus={()=> this.toggleAuthenticateStatus()} />
             <PrivateRoute exact path = "/games/create" component={CreateGame} toggleAuthenticateStatus={()=> this.toggleAuthenticateStatus()} />
             <PrivateRoute path = '/games/:id' component={GameLobby} />
             <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={()=> this.toggleAuthenticateStatus()} />
             <LoggedOutRoute path="/signup" component={Signup} toggleAuthenticateStatus={()=>this.toggleAuthenticateStatus()} />
         </Switch>   
       </div> )
    }
}

if (module.hot) {
    module.hot.accept();
}





