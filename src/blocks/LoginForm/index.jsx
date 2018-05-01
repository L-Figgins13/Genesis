import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Label = styled.label`
    color: blue;
`;
const Input = styled.input`
    color: purple;
    background: papayawhip;
    border-radius: 3px;
`;

const Button = styled.button`
    color:gold;
`

const LoginForm = function (props) {
    return (
        <div>
            <form onSubmit= {props.handleSubmit}>
                <Label>Username</Label>
                <Input name = "username" type="text" value = {props.username} onChange= {props.handleInputChange}  />
                <Label>Password</Label>
                <Input name = "password" type="text" value={props.password} onChange= {props.handleInputChange} />
                <Button type = "submit">Submit </Button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;