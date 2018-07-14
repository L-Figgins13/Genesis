import React from 'react';
import styled from 'styled-components';
import PlayerArea from './PlayerArea.jsx';
import { BG_Image_Scroll, FormContainer } from '../../elements';
import img from '../../../static/img/gamelobby/BG.jpg';
import plank from '../../../static/img/gamelobby/Aspect_Ratio_GameLobby.png';

import Chat from '../Chat/index.jsx';

const GameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: var(--width);
  height: var(--height);

  h1{
    margin: 2vmin;
    font-weight: bold;
  }

  h2{
    font-size: 3vmin;
  }

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`
const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid red;
`


const GameLobby = (props) => {
  return (
    <BG_Image_Scroll img={img}>
      <FormContainer>       
        <GameArea img={plank}>
          <PlayerArea players={props.players} />
        </GameArea>
      </FormContainer>
    </BG_Image_Scroll>
  )
}

export default GameLobby;