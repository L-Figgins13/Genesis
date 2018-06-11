import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Button, StyledLink, BG_Image, Wrapper, Container } from '../../elements';
import { Avatar } from 'rebass';
import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';

//you can apparently not but links inside of buttons da fuq
// needs to be styled seperately and an onClick method implemented

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

export default function Stats(props) {
    return(
    <BG_Image img={backgroundImg}>
        <Wrapper plate={plateImg}>
          <Container>
            <form onSubmit= {props.handleSubmit}>
              <Flex flexDirection='column'>
                <Box width={1} px={2} py={2}>
                  <Avatar
                      size={64}
                      src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                  />
                  <h1>{props.user.username}'s Profile</h1>
                  <h2>Wins</h2> 
                  {props.user.stats.wins}
                  <h2>Losses</h2>
                  {props.user.stats.losses}
                  <Button>
                    <StyledLink to='/games'>Find A Game</StyledLink>
                  </Button>
                </Box>
              </Flex>
            </form>
          </Container>
        </Wrapper>
    </BG_Image>
    );
}