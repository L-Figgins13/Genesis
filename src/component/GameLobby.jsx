import React from 'react';
import Main from '../css/Main.css';

import gameLobby from '../css/GameLobby.css';
import player from '../css/Player.css';
import {Container, Row, Col} from 'react-grid-system';

import img from './../../static/img/playerBadgeBG.jpg';

function PlayerArea (props) {
    const players = props.players; // place holder
    
    const playerRows = players.map(player => <Player key={player._id} player = {player}/>)

    return(
        <div>
            <Col lg={6}>
                {playerRows}
            </Col>
        </div>
    )
}

function Player (props) {
    return (
        <div>
            <div className={player.profileBadge}>
                <div>{props.player.user_id}</div>
                <div>{props.player.username}</div>
            </div>
        </div>
    )
}

const GameLobby = function(props) {
    return(
        <div>
                <Row>
                    <Col lg={12}>
                    <div className={gameLobby.titleArea}>
                        <h1 className={gameLobby.title}> Game Lobby </h1>
                    </div>
                    </Col>

                    <Col lg={12}>
                    <div className={gameLobby.playerArea}>
                        <PlayerArea players={props.players} />
                    </div>
                    </Col>
                </Row>
        </div>
    )
}


export default GameLobby