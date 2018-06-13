import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import GameRow from './GameRow.jsx';

const Table = styled.div`
    border: 1px solid red;
    padding: 3rem;
`

const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    color: black;
    display: inline-block;
    padding-left: 5rem;
    padding-right: 5rem;
`

function GameTable (props) {
    const gameRows = props.games.map(game => 
        <GameRow 
            key = {game._id} 
            game = {game} 
            joinGame={props.joinGame}
        />
    );
    return(  
        <Flex>
            <Title>Game ID:</Title>
            <Title>Game Owner:</Title>
            <Title>Game Name:</Title>
            {gameRows}
        </Flex>
    )
}

GameTable.propTypes = {
    games: PropTypes.array.isRequired,
}

export default GameTable;