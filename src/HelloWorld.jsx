import React from 'react';
import Auth from '../client/auth.js'
import {Link} from 'react-router-dom';
import styles from './css/HelloWorld.css';

export default class HelloWorld extends React.Component {

    componentDidMount() {
        this.props.toggleAuthenticateStatus();
    }

    render(){
        return (
            <div className={styles.hello}>
                <h1>HelloWorld</h1>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>

                {Auth.isUserAuthenticated() ? (
                    <li><Link to='/games'>Games</Link></li>
                ) : (
                    <h1> YOU NEED TO LOG IN </h1>
                )}
            </div>
        );
    }
}