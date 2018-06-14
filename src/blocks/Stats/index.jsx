import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Label, Button, StyledLink, BG_Image, Wrapper, Container } from '../../elements';
import { Avatar } from 'rebass';
import backgroundImg from '../../../static/img/backgrounds/Map_Borders.jpg';
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
              <Flex flexDirection='column' justfiyContent={'center'} alignItems={'center'}>
                <Box width={1}>
                  <Avatar
                      size={164}
                      src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                  />
                </Box>
                <Box width={1} px={4} py={4}>
                  <Label>{props.user.username}'s Profile</Label>
                </Box>
                <Box width={1} px={4} py={4}>
                  <Label>Wins</Label> 
                  {props.user.stats.wins}

                  <Label>Losses</Label>
                  {props.user.stats.losses}
                </Box>
                <Box width={1} px={2} py={2}>
                  <Button>
                    <StyledLink to='/games'>Join A Game</StyledLink>
                  </Button>
                </Box>
                  
              </Flex>
            </form>
          </Container>
        </Wrapper>
    </BG_Image>
    );
}