import React from 'react';
import Auth from '../../../client/auth.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper, StyledLink, BG_Image } from '../../elements';
import splash from '../../../static/img/backgrounds/Splash_Screen_BG.jpg';
import logo from '../../../static/img/logo/Logo_Large.png';
import ReactPlayer from 'react-player';

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

    constructor(props) {
      super(props);

      this.state = {

      }
    }

    

    componentDidMount() {
      this.props.toggleAuthenticateStatus();
    }

    render(){
      return (
          <BG_Image img={splash}>
            <Wrapper>
              <LogoArea><img width="100%" src={logo} ></img></LogoArea>
              <OptionsBox>
                <h1>Developer Options:</h1>
                <StyledLink to ='/login'>Login</StyledLink>
                <StyledLink to ='/signup'>Signup</StyledLink>
                {Auth.isUserAuthenticated() ? (<StyledLinkWarn to ='/games'>Games Page Quick Link</StyledLinkWarn>):(<StyledLinkWarn to='/login'>"YOU NEED TO LOGIN FIRST!"</StyledLinkWarn>)}
                <h1>Audio Controls</h1>
                {/* <audio preload="auto" ref="audio_tag" src="../../../static/audio/Drums_Mix.mp3" type="audio/mpeg" controls loop autoPlay/> */}
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
              </OptionsBox>
            </Wrapper> 
          </BG_Image>
      );
    }
}