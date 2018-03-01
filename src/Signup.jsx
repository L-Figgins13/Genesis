import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../client/auth.js';


export default class Signup extends React.Component {
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
        console.log(this.state.username,this.state.password);

        const url = '/auth/signup';

        fetch(url, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res=>res.json())
        .catch(error=> console.error('Error:',error))
            .then(data => {
                console.log('Response:',JSON.stringify(data));

                if(data.success === true) {
                    console.log(data.message)

                    this.props.history.push('/login');
                } else {
                    console.log(data.message);
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
                <input type="submit" value="Create User"/>
            </form>
        </div>
        )
    }
}
