import React from 'react';
import styled from 'styled-components';
import PlayerArea from './PlayerArea.jsx';
import { BG_Image, FormContainer } from '../../elements';
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
const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`

const GameLobby = (props) => {
    return (
        <BG_Image img={img}>
        <FormContainer>       
          <GameArea img={plank}>
            
            <PlayerArea players={props.players} />
            
          </GameArea>
          </FormContainer>
        </BG_Image>
    )
}

export default GameLobby;