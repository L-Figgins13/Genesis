import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../client/auth.js';
import 'isomorphic-fetch';



//TODO NEEDS BOTH FRONT END FORM VALIDATION AND BACK END

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Name Submitted: ' + this.state.username + ' Password Submitted: ' +  this.state.password);
        const url = '/auth/login'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .catch(error=> console.error('Error:', error))
            .then(data => {
                console.log('Response:', JSON.stringify(data));

                if(data.success === true) {
                    console.log('Storing user_Id', data.user.id);
                    localStorage.setItem('username', data.user.username);
                    localStorage.setItem('user_Id', data.user.id);

                    Auth.authenticateUser(data.token);
                    this.props.toggleAuthenticateStatus();

                    this.props.history.push(`/users/${data.user.id}`);
                } else {
                    alert(data.message);
                }
            })

    }

    render() {
        return (
        <div>
            <form onSubmit= {this.handleSubmit}>
                <label>
                    Username:
                    <input name = "username" type = "text" value = {this.state.username} onChange= {this.handleInputChange} />
                </label>
                <br />
                <label>
                    password:
                    <input name="password" type="password" value={this.state.password} onChange= {this.handleInputChange} />
                </label>
                <input type = "submit" value = "Login"/>
            </form>
            <ul>
                <li><Link to= '/games/create'>Create a Game</Link></li>
            </ul>
        </div>
        );
    }
}