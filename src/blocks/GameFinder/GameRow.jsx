import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const GameDetails = styled.div`
    background-color: #dddddd;
    padding: .5rem;
    list-style-type: none;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 1px solid orange;
`
const GameItem = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: .5rem;
    border: 1px solid black;
`

const GameRow = (props) => (
    <div>
        <GameDetails>
            <GameItem> {props.game._id} </GameItem>
            <GameItem> {props.game.owner} </GameItem>
            <GameItem> {props.game.title} </GameItem>
            <GameItem> <button id={props.game._id} onClick={props.joinGame}>Join</button> </GameItem>
        </GameDetails>
    </div>
);

GameRow.propTypes = {
    game: PropTypes.object.isRequired,
};

export default GameRow;