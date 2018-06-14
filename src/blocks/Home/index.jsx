import React from 'react';
import Auth from '../../../client/auth.js';
import { Link } from 'react-router-dom';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import { Wrapper, Container, StyledLink, BG_Image } from '../../elements';
import splash from '../../../static/img/backgrounds/Splash_Screen_BG.jpg';
import logo from '../../../static/img/logo/Logo_Large.png';
import plate from '../../../static/img/gamelobby/Wood_BG_Plate.png';

export default class Home extends React.Component {

    componentDidMount() {
      this.props.toggleAuthenticateStatus();
    }

    //TODO: Remove Ternary
    render(){
      return (
        <div>
          <BG_Image img={splash}>
            <Wrapper plate={plate}>
              <Container>
                  <Box width={1} px={2} py={2}>
                    <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
                      <StyledLink to ='/login'>Login</StyledLink>
                      <StyledLink to ='/signup'>Signup</StyledLink>
                      {Auth.isUserAuthenticated() ? (<StyledLink to ='/games'>Games Page Quick Link</StyledLink>):(<StyledLink to='/login'>"YOU NEED TO LOGIN FIRST!"</StyledLink>)}
                    </Flex>
                  </Box>
              </Container>
            </Wrapper>
          </BG_Image>
        </div>
      );
    }
}