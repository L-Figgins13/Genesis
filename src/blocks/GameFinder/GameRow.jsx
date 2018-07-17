import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const Tr = styled.tr`
&:focus {
    background-color: green;
}

`

const GameRow = (props) => (
    <Tr onClick={props.handleGameSelection}  id={props.game._id} tabIndex={0}>
        <td> {props.game.title} </td>
        <td> {props.game.owner} </td>
        <td></td>   
    </Tr>
);

GameRow.propTypes = {
    game: PropTypes.object.isRequired,
};

export default GameRow;