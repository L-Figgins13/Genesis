import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const TableRow = styled.tr`
    color:green;
`
const TableData = styled.td`
    color:red;
`

const GameRow = (props) => (
    <tr>
        <td> {props.game._id}   </td>
        <td> {props.game.owner} </td>
        <td> {props.game.title} </td>
        <td><button id={props.game._id} onClick={props.joinGame}>Join</button></td>
    </tr>
);

GameRow.propTypes = {
    game: PropTypes.object.isRequired,
};

export default GameRow;