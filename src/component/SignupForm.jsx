import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SignupForm = function(props) {
    return (
        <div>
            <form onSubmit= {props.handleSubmit}>
                <label>
                    Username:
                    <input name = "username" type = "text" value = {props.username} onChange= {props.handleInputChange} />
                </label>
                <br />
                <label>
                    password:
                    <input name="password" type="password" value={props.password} onChange= {props.handleInputChange} />
                </label>
                <input type="submit" value="Create User"/>
            </form>
        </div>
    );
}

SignupForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default SignupForm;