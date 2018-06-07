import React from 'react';
import Auth from '../../../client/auth.js';
import { Link } from 'react-router-dom';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import { StyledLink, Container, BG_Image } from '../../elements';
import img from '../../../static/img/backgrounds/bg1.jpg';
import plate from '../../../static/img/backgrounds/plate.png';

export default class Home extends React.Component {

    componentDidMount() {
      this.props.toggleAuthenticateStatus();
    }

    //TODO: Remove Ternary
    render(){
      return (
        <div>
          <BG_Image img={img}>
            <Flex flexWrap='wrap'>
              <Box px={4} py={4} width={1}>
                <Wrapper>
                    <Container plate={plate}>
                      <StyledLink to ='/login'>Login</StyledLink>
                      <StyledLink to ='/signup'>Signup</StyledLink>
                      {Auth.isUserAuthenticated() ? (<StyledLink to ='/games'>Games Page Quick Link</StyledLink>):(<StyledLink to='/login'>"YOU NEED TO LOGIN FIRST!"</StyledLink>)}
                    </Container>
                </Wrapper>
              </Box>
            </Flex>
          </BG_Image>
        </div>
      );
    }
}