import React from 'react';
import Auth from '../client/auth.js'
import {Link} from 'react-router-dom';

export default class HelloWorld extends React.Component {

    componentDidMount() {
        this.props.toggleAuthenticateStatus();
    }

    render(){
        return (
            <div>
                <h1>HelloWorld</h1>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>

                {Auth.isUserAuthenticated() ? (
                    <h1> YOU ARE LOGGED IN </h1>
                ) : (
                    <h1> YOU NEED TO LOG IN </h1>
                )}
            </div>
        );
    }
}