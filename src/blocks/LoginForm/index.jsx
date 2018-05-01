import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';








const Label = styled.label`
    color: blue;
    display: block;
`;
const Input = styled.input`
    color: purple;
    background: papayawhip;
`;

const Button = styled.button`
    color:gold;
`

const Bar = styled.div`
    border: 1px solid purple;
`

const Background = styled(Box)`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding:0;
`

const LoginPlate = styled(Box)`
   
   
    border : 2px solid white;
    height: 600px;
    width: 100vw;
    background-image: url(${plateImg});
    background-repeat: no-repeat;
    background-position: center center;



   
    
   
`;

const LoginForm = function (props) {
    return (
        
        <Flex flexWrap= 'wrap' mx={0} my={0}>
            <Background>
                <Flex justifyContent= 'center' alignItems= 'center'>
                <LoginPlate>
                            
                            <Flex justifyContent= 'center' alignItems= 'center'>
                            <form onSubmit= {props.handleSubmit}>
                            
                                <Box p={2}>

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
                                </Box>
                                
                               
                                
                            </form>
                            </Flex>
                            
                            
                            

                    </LoginPlate>
                    </Flex>
                    
                    
                
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