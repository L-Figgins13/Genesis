import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import img from './../../static/img/playerBadgeBG.jpg';

const ImageTest = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${img});
`;

function PlayerArea (props) {
    const players = props.players; // place holder
    
    const playerRows = players.map(player => <Player key={player._id} player = {player}/>)

    return(
        <div>
           {playerRows}
        </div>
    )
}

function Player (props) {
    return (
        <div>
            <div>
                <div>{props.player.user_id}</div>
                <div>{props.player.username}</div>
            </div>
        </div>
    )
}

const GameLobby = function(props) {
    return(
        <div>
            <div>
                <h1> Game Lobby </h1>
                <ImageTest></ImageTest>
            </div>
            <div>
                <PlayerArea players={props.players} />
            </div>
        </div>
    )
}


export default GameLobby