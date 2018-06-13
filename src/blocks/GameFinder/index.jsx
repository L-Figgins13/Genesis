import GameTable from './GameTable.jsx';
import styled from 'styled-components';
import React from 'react';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import { StyledLink } from '../../elements/';

const Bar = styled.div`
    border: 1px solid red;
`

const GameFinder = (props) =>  {
    return( 
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
            <Box px={4} py={4}>
                <Bar />
                <h1>Games Lobby</h1>
                <h2>Select A Game Room To Play!</h2>
                <StyledLink to= '/games/create'>Create A New Game</StyledLink>
            </Box>       
            <Box px={4} py={4}>
                <GameTable games={props.games} joinGame={props.joinGame} />
            </Box>
        </Flex>
    );
}

export default GameFinder;
