import GameTable from './GameTable.jsx';
import styled from 'styled-components';
import React from 'react';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import { BG_Image, StyledLink, Label, Button } from '../../elements/';


const TableContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #6A6969;
`


const GameFinder = (props) =>  {
    return(
        <TableContainer>
            <Box px={4} py={4}>  
                <Flex justifyContent='center' alignItems='center' flexDirection='column'>  
                    <Label fontSize='2rem' textAlign='center'>Games Lobby</Label>
                    <StyledLink to= '/games/create'>Create A New Game</StyledLink>
                </Flex>
            </Box>
           
            <Box px={4} py={4}>
                <GameTable handleGameSelection={props.handleGameSelection} games={props.games} joinGame={props.joinGame} />
            </Box>

            <Box px={4} py={4}>
                <Button onClick={props.joinGame}>Join</Button>
            </Box>
        </TableContainer>
    );
}

export default GameFinder;
