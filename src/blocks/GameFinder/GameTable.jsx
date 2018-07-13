import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import GameRow from './GameRow.jsx';


const Table = styled.table`
    width: 70%;
    font-size: 1.5vmin;

    tr{
        border: 1px solid #000;
        background: grey;
    }
    th{
        background: darkslategrey;
        border: 1px solid #000;
        padding: 1rem;
    }
    td{
        border: 1px solid #000;
        padding: .75rem; 
    }
 
    tbody{
      border: 1px solid #000;
      max-height: 250px;
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
                    <th>Title</th>
                    <th>Owner</th>
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