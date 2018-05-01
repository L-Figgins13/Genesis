import GameTable from './GameTable.jsx';
import styled from 'styled-components';
import React from 'react';
import {Flex, Box} from 'grid-styled';
import {Link} from 'react-router-dom';




const GameFinder = (props) =>  {
    return(
    <div>
        <h1>Games List</h1>
        <GameTable games={props.games} joinGame={props.joinGame} />
        <li><Link to= '/games/create'>Create Game </Link></li>
    </div>
    );
}



// GameListArea.GameRow = GameRow;
// GameListArea.GameTable = GameTable;
// i have no idea what you were doing here please explain how this syntax works
// i am not sayings its wrong i am literally asking where do you render it then?
// until i know i just did it hte way i knew how .
export default GameFinder;
