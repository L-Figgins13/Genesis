import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const GameRow = (props) => (
    <tr>
        <td> {props.game._id} </td>
        <td> {props.game.title} </td>
        <td> {props.game.owner} </td>
        {/* <button id={props.game._id} onClick={props.joinGame}>Join</button> */}
    </tr>
);

GameRow.propTypes = {
    game: PropTypes.object.isRequired,
};

export default GameRow;