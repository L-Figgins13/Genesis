import React from 'react';
import {Link} from 'react-router-dom';





export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
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
        alert('Name Submitted: ' + this.state.username + ' Password Submitted: ' +this.state.password);
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
            </form>
            <ul>
                <li><Link to= '/games/create'>Create a Game</Link></li>
            </ul>
        </div>
        );
    }
}