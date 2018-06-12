import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Button, H1, H2, Input, Label, BG_Image, Wrapper, Container } from '../../elements';

import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';

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

const FormHint =  styled.div`
    color:#fff;
    background-color: #B22222;
    margin-top: .5rem;
    padding: 1rem;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg) scale(0);
  }

  to {
    transform: rotate(360deg) scale(2);
  }
`;

const Rotate = styled.div`
  animation: ${rotate360} 2s linear infinite;
  font-size: 1.2rem;
`;



const SignupForm = (props) => {
    return (
      <BG_Image img={backgroundImg}>
        <Wrapper plate={plateImg}>
          <Container>
            <Rotate>Get Fucked, Player Three!</Rotate>
            <form onSubmit= {props.handleSubmit}>
              <Flex flexDirection='column'>
                <Label fontSize={'2rem'} textAlign={'center'}>Sign Up</Label>
                

                <Box width={1} px={2} py={2}>
                  <Box py={2}><Label>Username</Label></Box>
                  <Input
                      name = "username" 
                      type = "text" 
                      value = {props.username} 
                      onChange = {props.handleInputChange}
                  />
                  { props.showUsernameHint &&
                    <FormHint>Your Username Is Not Unique, Please Try Again.</FormHint>
                  }
                </Box>

                <Box width={1} px={2} py={2}>
                  <Box py={2}><Label>Password</Label></Box>
                  <Input 
                      name = "password" 
                      type= "password" 
                      value= {props.password} 
                      onChange= {props.handleInputChange}
                  />
                  { props.showValidPasswordHint &&
                      <FormHint>Please Enter a valid password</FormHint>
                  }

                  { props.showPasswordsDoNotMatchHint &&
                      <FormHint>Passwords Do Not Match</FormHint>
                  }
                </Box>

                <Box width={1} px={2} py={2}>
                  <Box py={2}><Label>Re-Enter Password</Label></Box>
                  <Input 
                      name = "password2" 
                      type= "password" 
                      value= {props.password2} 
                      onChange= {props.handleInputChange}
                  />
                </Box>
                
                <Box width={1} px={2} py={4}>
                  <Button type = "submit">Submit</Button>
                </Box>
                
                </Flex>
              </form>
          </Container>
        </Wrapper>
      </BG_Image>
    )
}

SignupForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default SignupForm;


