import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import GameRow from './GameRow.jsx';


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    th, tr, td{
        border: 1px solid #000;
    }
    th{
        padding: 2rem;
    }
    td{
        padding: .75rem; 
    }
 
    tbody{
        overflow-x: hidden;
        overflow-y: scroll;
        
    }
    
`

function GameTable (props) {
    const gameRows = props.games.map(game => 
        <GameRow 
            key = {game._id} 
            game = {game}
            handleGameSelection={props.handleGameSelection}
            joinGame={props.joinGame}
        />
    );

    return(  
        <Table>
            <thead>
                <tr>
                    <th>Game ID</th>
                    <th>Title</th>
                    <th>Player</th>
                </tr>
            </thead>
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