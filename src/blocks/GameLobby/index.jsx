import React from 'react';
import styled from 'styled-components';
import PlayerArea from './PlayerArea.jsx';
import { BG_Image } from '../../elements';
import img from '../../../static/img/gamelobby/MapBorders.jpg';
import plank from '../../../static/img/gamelobby/Aspect_Ratio_BG_Plate.png';

const GameArea = styled.div`
  width: var(--width);
  height: var(--height);
  background-image: url(${plank});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin: 0;
  padding: 0;
  text-align: center;
`

const GameLobby = (props) => {
    return (
        <BG_Image img={img}>       
          <GameArea img={plank}>
          <h1>GAME LOBBY</h1>
           <PlayerArea players={props.players} />
          </GameArea>
        </BG_Image>
    )
}

export default GameLobby;