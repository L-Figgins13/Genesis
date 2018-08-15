import React from 'react';
import styled from 'styled-components';
import PlayerArea from './PlayerArea.jsx';
import { BG_Image_Scroll, FormContainer } from '../../elements';
import img from '../../../static/img/gamelobby/BG.jpg';
import plank from '../../../static/img/gamelobby/Aspect_Ratio_GameLobby.png';
import { Container, Row, Col } from 'react-grid-system';
import Chat from '../Chat/index.jsx';

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  background-color: orange;
`

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: blue;
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
    <Container fluid>
      <Row nogutter>
        <Col xs={12} lg={6} xl={6}>
          <PlayerContainer>
            <PlayerArea players={props.players} />  
          </PlayerContainer>
        </Col>
        
        <Col xs={12} lg={6}>
          <ChatContainer>
              <Chat
                handleInputChange={props.handleInputChange} 
                sendMessage={props.sendMessage}  
                messages={props.messages} 
                username={props.username} 
                value={props.value} 
              />
          </ChatContainer>
        </Col>
      </Row>
      </Container>
    
  </BG_Image_Scroll>
  )
}

export default GameLobby;