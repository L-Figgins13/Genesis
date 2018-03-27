import React from 'react';
import PropTypes from 'prop-types';

export default function Stats(props) {
    return(
        <div>
            <h1>Player Stats</h1>
            <h2>Wins: {props.user.stats.wins}</h2>
            <h2>Losses: {props.user.stats.losses}</h2>
            
            <button>Find A Game</button>
        </div>
    );
}