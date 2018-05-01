import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

export default function Stats(props) {
    return(
        <div>
            <h1>{props.user.username}</h1>
            <h2>Wins: {props.user.stats.wins}</h2>
            <h2>Losses: {props.user.stats.losses}</h2>
            
            <button><Link to='/games'>Find A Game</Link></button>
        </div>
    );
}