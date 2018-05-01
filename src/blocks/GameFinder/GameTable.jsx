import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import GameRow from './GameRow.jsx';

const Table = styled.table`
    border: 1px solid red;
    padding: 3rem;
`
const TableHead = styled.th`
`
const TableRow = styled.tr`
`
const TableHeading = styled.th`
`
const TableBody = styled.tbody`
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
            <TableHead>
                <TableRow>
                    <TableHeading>Id</TableHeading>
                    <TableHeading>Owner</TableHeading>
                    <TableHeading>Title</TableHeading>
                </TableRow>
            </TableHead>
            <tbody>{gameRows}</tbody>
        </Table>

    )
}

GameTable.propTypes = {
    games: PropTypes.array.isRequired,
}

export default GameTable;