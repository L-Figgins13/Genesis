import React from 'react';
import styled from 'styled-components';
import PlayerArea from './PlayerArea.jsx';
import { BG_Image_Scroll, FormContainer } from '../../elements';
import img from '../../../static/img/gamelobby/BG.jpg';
import plank from '../../../static/img/gamelobby/Aspect_Ratio_GameLobby.png';
import { Container, Row, Col } from 'react-grid-system';
import Chat from '../Chat/index.jsx';

const LobbyContainer = styled.div`
  width: var(--width);
  height: var(--height);
  background-image: url(${plank});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: -40vmin;
  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`

const GameLobby = (props) => {
  return (
    // <BG_Image_Scroll img={img}>
    //   <FormContainer>       
    //     <GameArea img={plank}>
    //       <PlayerArea players={props.players} />
    //     </GameArea>
    //   </FormContainer>
    //   {/* <Button onClick={this.startGame}>Start Game</Button> */}
    // <Chat 
    //     handleInputChange={props.handleInputChange} 
    //     sendMessage={props.sendMessage}  
    //     messages={props.messages} 
    //     username={props.username} 
    //     value={props.value} 
    // />
    // </BG_Image_Scroll>

  <BG_Image_Scroll img={img}>
    <LobbyContainer>
      
      <PlayerArea players={props.players} /> 
      
      <Chat
        handleInputChange={props.handleInputChange} 
        sendMessage={props.sendMessage}  
        messages={props.messages} 
        username={props.username} 
        value={props.value} 
      />
    </LobbyContainer>
  </BG_Image_Scroll>
  )
}

export default GameLobby;