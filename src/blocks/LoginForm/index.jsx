import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';

const Label = styled.label`
    color: white;
    display: block;
    padding: .5rem;
`;
const Input = styled.input`
    color: purple;
    background: papayawhip;
    padding: .25rem;
    margin: .5rem;
`;

const Button = styled.button`
    color:black;
`

const Bar = styled.div`
    border: 1px solid purple;
`

const Background = styled.div`
    background: url(${backgroundImg})  no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    border: 2px solid blue;
`

const LoginPlate = styled(Box)`
    border : 2px solid white;
    min-height: 600px;
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url(${plateImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`;

const LoginForm = function (props) {
    return (
    <Background>
        <LoginPlate>
            <form onSubmit= {props.handleSubmit}>
                <Box>
                    <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                        <Bar />
                        <Label>Username</Label>
                        <Input
                            name = "username" 
                            type="text" 
                            value = {props.username} 
                            onChange= {props.handleInputChange}
                        />
                        <Bar />
                        <Label>Password</Label>
                        <Input 
                            name = "password" 
                            type="text" 
                            value={props.password} 
                            onChange= {props.handleInputChange}
                        />
                        <Button type = "submit">Submit </Button>
                    </Flex>
                </Box>  
            </form>
        </LoginPlate>  
    </Background> 
    )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;