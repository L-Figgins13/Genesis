import React from 'react';
import styled from 'styled-components';
import Player from './Player.jsx';
import { Container, Row, Col } from 'react-grid-system';

import plank from '../../../static/img/gamelobby/Aspect_Ratio_GameLobby.png';

const PlayerContainer = styled.div`
    /* background-image: url(${plank}); */
    /* background-color: red; */
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PlayerArea = (props) => {
    const players = props.players; // place holder
    const playerRows = players.map(player => <Player key={player._id} player = {player}/>)

    return(
      <div>{playerRows}</div>
    )
}

export default PlayerArea;

