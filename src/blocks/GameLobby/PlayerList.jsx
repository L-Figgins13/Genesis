import React from 'react';
import styled from 'styled-components';
import Player from './Player.jsx';
import { Container, Row, Col } from 'react-grid-system';

import plank from '../../../static/img/gamelobby/Aspect_Ratio_GameLobby.png';

const ListWrapper = styled.div`
  height:80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Players = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`

const PlayerList = (props) => {
    const players = props.players; // place holder
    const playerMap = players.map(player => <Player key={player._id} player = {player}/>)

    return(
      <ListWrapper>
        <Players>
          {playerMap}
        </Players>
      </ListWrapper>
    )
}

export default PlayerList;

