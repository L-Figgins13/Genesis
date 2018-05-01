import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';

const Label = styled.label`
    color: blue;
`;
const Input = styled.input`
    color: purple;
    background: papayawhip;
`;

const Button = styled.button`
    color:gold;
`

const Bar = styled.div`
    border: 1px solid red;
`

const Background = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100%;
    width: 100vw;
    margin: 0;
    padding:0;
`

const LoginPlate = styled.div`
    height: 60vh;
    min-height: 75vh;
    border : solid 1px rgba(0,0,0,0.0);
    background-image: url(${plateImg});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 920px 685px;
    max-height:685px;
`;

const LoginForm = function (props) {
    return (
        
        <Flex mx={0} my={0}>
            <Background>
                <Box>
                    <LoginPlate>
                        <form onSubmit= {props.handleSubmit}>
                            <Box>
                                <Bar />
                                <Label>Username</Label>
                                <Input name = "username" type="text" value = {props.username} onChange= {props.handleInputChange}  />
                            </Box>
                            <Box>
                                <Bar />
                                <Label>Password</Label>
                                <Input name = "password" type="text" value={props.password} onChange= {props.handleInputChange} />
                            </Box>
                            <Button type = "submit">Submit </Button>
                        </form>
                    </LoginPlate>
                </Box>
            </Background>
        </Flex>
        
    )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;