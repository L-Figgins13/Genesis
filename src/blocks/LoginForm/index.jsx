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
   width: 100%;
  width: 20vw;
  height: 3vh;
  background-color: #120600;
  color: #fff;
  border: 2px solid #e9e9e9;
  -webkit-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  -moz-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
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
    background: url(${backgroundImg})  no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
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
    <Background>
        <LoginPlate>
            {/* <Flex flexDirection= 'column' justifyContent = 'center' alignItems = 'center'> */}
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
            {/* </Flex> */}
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