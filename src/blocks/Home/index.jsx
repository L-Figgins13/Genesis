import React from 'react';
import Auth from '../../../client/auth.js';
import path from 'path';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper, StyledLink, BG_Image, FormButton, Button } from '../../elements';
import splash from '../../../static/img/backgrounds/Splash_Screen_BG2.jpg';
import logo from '../../../static/img/logo/Logo_Large.png';
import ReactPlayer from 'react-player';

import audioFile from '../../../static/audio/Drums_Mix.mp3';
import fxBell from '../../../static/audio/SoundFX/bell.wav';


const LogoArea =  styled.div`
  
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 80%;
  animation: bouncey 2s ease-in-out infinite;

  @keyframes bouncey{
    0%{
      background-size: 30%;
    }
    50%{
      background-size: 35%;
    }
    100%{
      background-size: 30%;
    }
  }
`
const ControlArea = styled.div`
  
  padding: 5vmin;
`

const ControlLinks = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 2.5rem;
  padding: 5vmin;
  &:hover{
      transition: scale(1.09);
      color: #ffb700;
  }
`

const OptionsBox = styled.div`
  
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5vmin;
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
        music: true,
        soundFXUrl: null,
        fxPlaying: false,
        volume: 0.8,
        muted: false,
      }
    }

    loadSound(url) {
      this.setState( {soundFXUrl:url})
    }



    componentDidMount() {
      this.props.toggleAuthenticateStatus();
    }

    render(){
      return (
          <BG_Image img={splash}>
            <Wrapper>
              <LogoArea img={logo}>
              </LogoArea>
              <ControlArea>
                <ControlLinks to ='/login'>Login</ControlLinks>
                <ControlLinks to ='/signup'>Signup</ControlLinks>
              </ControlArea>


              {/* Need To Delete or Hide Toggle Eventually*/}
              <OptionsBox>
                <h1>Developer Options:</h1>
                <ControlLinks to ='/login'>Login</ControlLinks>
                <ControlLinks to ='/signup'>Signup</ControlLinks>
                {Auth.isUserAuthenticated() ? (<StyledLinkWarn to ='/games'>Games Page Quick Link</StyledLinkWarn>):(<StyledLinkWarn to='/login'>"YOU NEED TO LOGIN FIRST!"</StyledLinkWarn>)}
                <h1>Audio Controls</h1>
                {/* <audio preload="auto" ref="audio_tag" src="../../../static/audio/Drums_Mix.mp3" type="audio/mpeg" controls loop autoPlay/> */}
                
                <ReactPlayer 
                  url={audioFile}
                  playing={this.state.music}
                  onReady = {()=> {console.log('Should be Ready to play')}}
                  onStart = {()=> {console.log('Starting Drums_Mix.mp3')}}
                  controls
                  loop
                  volume = {0.8}
                />
                <ReactPlayer
                  url={this.state.soundFXUrl}
                  playing= {this.state.fxPlaying}
                  onReady = {() => console.log('Should be ready to Play') }
                  onStart = {() => console.log('Bell fx playing')}
                  volume = {1.0}
                />
                <FormButton onClick={
                  () => {
                    this.setState({soundFXUrl:fxBell});
                    this.setState({fxPlaying:true});
                    this.setState({muted:false});
                  }
                } />

                <Button onClick={
                  ()=> {
                    this.setState({music:!this.state.music});
                  }}>Mute
                </Button>
                 
              </OptionsBox>
            </Wrapper> 
          </BG_Image>
      );
    }
}