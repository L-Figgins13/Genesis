import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import {H1, H2, Input} from '../../elements';

import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';

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

const FormHint =  styled.span`
    color:red;
`


const SignupForm = (props) => {
    return (
        <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
        <Background>
            <LoginPlate flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                <Box><H1>Signup</H1></Box>
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
                                    
                                    { props.showUsernameHint &&
                                        <FormHint>Hint Test Goes Here</FormHint>
                                    }
                                </Flex>
                            </Box>

                            <Box mt={2} mb={2}>
                                <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                                    <Label>Password</Label>
                                    <Input 
                                        name = "password" 
                                        type= "password" 
                                        value= {props.password} 
                                        onChange= {props.handleInputChange}
                                    />

                                    { props.showValidPasswordHint &&
                                        <FormHint>Hint Test Goes Here</FormHint>
                                    }

                                    { props.showPasswordsDoNotMatchHint &&
                                        <FormHint>Passwords Do Not Match</FormHint>
                                    }           


                                </Flex>
                            </Box>

                            <Box>
                                <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                                    <Label>Password</Label>
                                    <Input 
                                        name = "password2" 
                                        type= "password" 
                                        value= {props.password2} 
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
            </LoginPlate>  
        </Background>
    </Flex> 
    )
}

SignupForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default SignupForm;


