import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import GameRow from './GameRow.jsx';


const Table = styled.table`
    width: 70%;
    font-size: 1.5vmin;

    tr, td{
        border: 1px solid #000;
    }
    th{
        padding: 1rem;
    }
    td{
        padding: .50rem;
        background-color: #ffebd8;
    }
    tbody{
    }
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
        <Table>
            <div>
                <th>Title</th>
                <th>Player</th>
                <th>Game ID</th>
            </div>
            <tbody>
                {gameRows}
            </tbody>
        </Table>
    )
}

GameTable.propTypes = {
    games: PropTypes.array.isRequired,
}

export default GameTable;