import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import GameRow from './GameRow';

function GameTable (props) {
    const gameRows = props.games.map(game => <GameRow key = {game._id} game = {game} joinGame={props.joinGame}/>);
    return(
        <table className= "bordered-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Owner</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>{gameRows}</tbody>
        </table>

    )
}

GameTable.propTypes = {
    games: PropTypes.array.isRequired,
}