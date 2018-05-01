import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import img from '../../../static/img/playerBadgeBG.jpg';

const PlayerArea = (props) => {
    const players = props.players; // place holder
    
    const playerRows = players.map(player => <Player key={player._id} player = {player}/>)

    return(
        <div>
           {playerRows}
        </div>
    )
}

export default PlayerArea;

