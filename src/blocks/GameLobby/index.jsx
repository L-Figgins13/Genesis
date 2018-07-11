import React from 'react';
import styled from 'styled-components';
import PlayerArea from './PlayerArea.jsx';
import { BG_Image, FormContainer } from '../../elements';
import img from '../../../static/img/gamelobby/MapBorders.jpg';
import plank from '../../../static/img/gamelobby/Aspect_Ratio_BG_Plate.png';

const GameArea = styled.div`
  background-image: url(${props => props.img});
  /* background: red; */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid blue; */
  font-size: 2vmin;
  color: #280408;
  margin: 20vmin auto;
  padding-top: 5vmin;
  padding-bottom: 5vmin;
  width: var(--width);
  height: var(--height);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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