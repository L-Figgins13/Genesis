import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Button, StyledLink } from '../../elements';
import { Avatar } from 'rebass';
import bg1 from '../../../static/img/backgrounds/bg1.jpg';

const Background = styled.div`
    background: url(${bg1})  no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
`

export default function Stats(props) {
    return(
        <Background>
        <Flex justifyContent='center' alignItems='center'>
            <Box mt={120}>
                <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                <Avatar
                size={64}
                src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                />
                <h1>{props.user.username}'s Profile</h1>
                <h2>Wins</h2> 
                {props.user.stats.wins}
                <h2>Losses</h2>
                {props.user.stats.losses}

                <Box p={4}>
                    <Button>
                        <StyledLink to='/games'>Find A Game</StyledLink>
                    </Button>
                </Box>
                </Flex>
            </Box>
        </Flex>
        </Background>
    );
}