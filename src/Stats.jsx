import React from 'react';
import PropTypes from 'prop-types';


function Stats(props) {
    return(
        <div>
            <h1>Stats!!!</h1>
            <h2>Wins: {props.user.stats.wins}</h2>
        </div>
    );
}