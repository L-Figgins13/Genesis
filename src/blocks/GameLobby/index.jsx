import React from 'react';
import styled from 'styled-components';
import PlayerList from './PlayerList';
import { BG_Image_Scroll, FormContainer } from '../../elements';
import img from '../../../static/img/gamelobby/BG.jpg';
import plank from '../../../static/img/gamelobby/Aspect_Ratio_GameLobby.png';
import { Container, Row, Col } from 'react-grid-system';
import Chat from '../Chat/index.jsx';

const LobbyWrapper = styled.div`
  width: 90vw;
  height: 100%;
  background: linear-gradient(#FFF4D6, #C0AA8C);
  border: 1px solid black;
`

const GameLobby = (props) => {
  return (
  <BG_Image_Scroll img={img}>
    <Container fluid>
      <LobbyWrapper>
        <Row >
          <Col lg={6}>
              <PlayerList players={props.players} />  
          </Col>
          
          <Col lg={6}> 
            <Chat
              handleInputChange={props.handleInputChange} 
              sendMessage={props.sendMessage}  
              messages={props.messages} 
              username={props.username} 
              value={props.value} 
            />  
          </Col>   
        </Row>
      </LobbyWrapper>
    </Container>
  </BG_Image_Scroll>
  )
}

export default GameLobby;