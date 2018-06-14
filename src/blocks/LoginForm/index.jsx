import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Wrapper, Container, Label, Button, Input, H1, BG_Image, StyledLink } from '../../elements';

import img from '../../../static/img/login/MapNoBorders.jpg';
import plate from '../../../static/img/login/Wood_BG_Plate.png';
import plate_sm from '../../../static/img/logo/Logo_Large.png';

const FormHint =  styled.div`
  color:#fff;
  background-color: #B22222;
  margin-top: .5rem;
  padding: 1rem;
`

const FormWrapper = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 800px;
  background-image: url(${props => props.plate});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: 1px solid blue;

  @media only screen and (max-width: 375px) {
      background-image: url(${props => props.plate_sm});
      border: 1px solid yellowgreen;
  }
`

const LoginForm = function (props) {
  return (
    <BG_Image img={img}>
      <FormWrapper plate={plate}>
        <Container>
          <form onSubmit= {props.handleSubmit}>
            <Flex flexDirection='column'>
              <Label fontSize={'2rem'} textAlign={'center'}>Login</Label>
              <Box width={1} px={2} py={2}>
                <Box py={2}><Label>Username</Label></Box>
                <Input
                    name = "username" 
                    type = "text" 
                    value = {props.username} 
                    onChange = {props.handleInputChange}
                />

                {props.showIncorrectUsernameOrPasswordHint && 
                  <FormHint>Incorrect Username or Password</FormHint>
                } 
              </Box>

              <Box width={1} px={2} py={2}>
                <Box py={2}><Label>Password</Label></Box>
                <Input 
                    name = "password" 
                    type = "password" 
                    value = {props.password} 
                    onChange = {props.handleInputChange}
                />
              </Box>
              
              <Box width={1} px={2} py={4}>
                <Button type = "submit">Submit</Button>
              </Box>

              <Label fontSize={'.75rem'} textAlign={'center'}>
                Not Registered? 
                <StyledLink to ='/signup'>Create An Account.</StyledLink>
              </Label>

              </Flex>
            </form>
        </Container>
      </FormWrapper>
    </BG_Image>
  )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;