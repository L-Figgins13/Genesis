import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Wrapper, Container, Label, Button, Input, H1, BG_Image, StyledLink } from '../../elements';

import img from '../../../static/img/backgrounds/bg1.jpg';
import plate from '../../../static/img/backgrounds/plate.png';


const LoginForm = function (props) {
  return (
    <BG_Image img={img}>
      <Wrapper plate={plate}>
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
      </Wrapper>
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