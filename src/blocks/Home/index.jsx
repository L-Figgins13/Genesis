import React from 'react';
import Auth from '../../../client/auth.js';
import { Link } from 'react-router-dom';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import { Wrapper, StyledLink, BG_Image } from '../../elements';
import img from '../../../static/img/backgrounds/Splash_Screen_BG.jpg';
import logo from '../../../static/img/logo/Logo_Large.png';
import plate from '../../../static/img/gamelobby/Wood_BG_Plate.png';

const LogoArea = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: var(--height);
  position: absolute;
`
const OptionsBox = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 55vmin;
  padding: 10vmin;
  border: 3px solid #280408;
  color: #280408;
  
  background: #ededed;
  opacity: 0.8;

  h1{
    font-weight: bold;
    font-size: 2vmin;
    padding-top: 2vmin;
  }
`
const StyledLinkWarn = styled(Link)`
  color: red;
  font-weight: bold;
  text-decoration: none;
  padding: .5rem;
  &:hover{
      transition: scale(1.09);
      color: #ffb700;
  }
`

export default class Home extends React.Component {

    componentDidMount() {
      this.props.toggleAuthenticateStatus();
    }

    //TODO: Remove Ternary
    render(){
      return (
        <div>
          <BG_Image img={img}>
            <Wrapper>
            <LogoArea><img width="100%" src="../../../static/img/logo/Logo_Large.png"></img></LogoArea>
            <OptionsBox>
              <h1>Developer Options:</h1>
              <StyledLink to ='/login'>Login</StyledLink>
              <StyledLink to ='/signup'>Signup</StyledLink>
              {Auth.isUserAuthenticated() ? (<StyledLinkWarn to ='/games'>Games Page Quick Link</StyledLinkWarn>):(<StyledLinkWarn to='/login'>"YOU NEED TO LOGIN FIRST!"</StyledLinkWarn>)}
              <h1>Audio Controls</h1>
              <audio preload="auto" ref="audio_tag" src="../../../static/audio/Drums_Mix.mp3" type="audio/mpeg" controls loop autoPlay/>
            </OptionsBox>
              
              </Wrapper> 
          </BG_Image>

          
        </div>
      );
    }
}