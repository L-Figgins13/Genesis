import React from 'react';
import Auth from '../../client/auth.js';
import 'isomorphic-fetch';
import validator from 'validator';

//import components
import LoginForm from '../blocks/LoginForm';

//TODO NEEDS BOTH FRONT END FORM VALIDATION AND BACK END

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            validated: false,
            showIncorrectUsernameOrPasswordHint: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    validateForm(form) {
        
        console.log('username:',form.username,'password:',form.password)

        if (!validator.isAlphanumeric(form.username)){
            this.setState({showIncorrectUsernameOrPasswordHint:true});
            return false;

        } else if (!validator.isAlphanumeric(form.password)) {
            this.setState({showIncorrectUsernameOrPasswordHint:true});
            return false;

        }  else {
            console.log('setting validated to true');
            this.setState({validated: true});
            return true;
        }

        console.log('this should mb not print')
        return false;
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
        const url = '/auth/login';

        const form = {
            username: this.state.username,
            password: this.state.password,
        }

        if(this.validateForm(form)) {
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
                        this.setState({showIncorrectUsernameOrPasswordHint:true})
                    }
                })
            }
    }

    render() {
        return (
        <div> 
            <LoginForm
                username= {this.state.username}
                password= {this.state.password}
                handleInputChange= {this.handleInputChange}
                handleSubmit= {this.handleSubmit}
                showIncorrectUsernameOrPasswordHint = {this.state.showIncorrectUsernameOrPasswordHint}
            />
        </div>
        );
    }
}