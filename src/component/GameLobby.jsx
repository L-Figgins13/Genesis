import React from 'react';

function PlayerArea (props) {
    const players = props.players; // place holder
    
    const playerRows = players.map(player => <Player key={player._id} player = {player}/>)

    return(
        <div>
           {playerRows}     
        </div>
    )
}

function Player (props) {
    return (
        <div>
            <div>-----------------------------------------</div>
            <div>{props.player.user_id}</div>
            <div>{props.player.username}</div>
            <div>-----------------------------------------</div>

        </div>
    )
}

const GameLobby = function(props) {
    return(
        <div>
            <h3> Game Lobby </h3>
            <PlayerArea players={props.players} />
        </div>
    )
}

export default GameLobby