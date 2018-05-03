import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { Flex, Box } from 'grid-styled';
import {BackgroundImage} from 'rebass';


import {Input, H1} from '../../elements';

import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';

const Label = styled.label`
    color: white;
    display: block;
    padding: .5rem;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
`;

const Button = styled.button`
    color:black;
    display:block;
    padding: .25rem;
`

const Bar = styled.div`
    border: 1px solid purple;
`

const Background = styled.div`
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImg});
`

const LoginPlate = styled(Flex)`
    
    min-height: 600px;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url(${plateImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`;

const LoginForm = function (props) {
    return (
        <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
        <Background>
            <LoginPlate>
                <H1>Login</H1>
                <form onSubmit= {props.handleSubmit}>
                    <Box>
                        <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                            <Box mt={2} mb={2}>
                                <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                                    <Label>Username</Label>
                                    <Input
                                        name = "username" 
                                        type= "text" 
                                        value = {props.username} 
                                        onChange= {props.handleInputChange}
                                    />
                                </Flex>
                            </Box>
                            <Box mt={2} mb={2}>
                                <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                                    <Label>Password</Label>
                                    <Input 
                                        name = "password" 
                                        type= "text" 
                                        value= {props.password} 
                                        onChange= {props.handleInputChange}
                                    />
                                </Flex>
                            </Box>
                            <Box>
                                <Button type = "submit">Submit </Button>
                            </Box>
                        </Flex>
                    </Box>  
                </form>
                {/* </Flex> */}
            </LoginPlate>  
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