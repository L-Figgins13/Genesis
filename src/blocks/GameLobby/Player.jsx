import React from 'react';
import styled from 'styled-components';

import PlayerDetails from './PlayerDetails.jsx';
import {Col} from 'react-grid-system';



const PlayerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    background: darkgrey;
    margin-top: 1vh;
    margin-bottom: 1vh;
    -webkit-box-shadow: 0px 8px 17px -6px rgba(0,0,0,0.88);
    -moz-box-shadow: 0px 8px 17px -6px rgba(0,0,0,0.88);
    box-shadow: 0px 8px 17px -6px rgba(0,0,0,0.88);
`

const PlayerAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${ props=> `url(${props.avatarURL})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 400px;
    height: 150px;
`


const Player = (props) => {
    return (
        <Col xs={6} align="center">
            <PlayerWrapper>
                <PlayerAvatar
                    avatarURL={props.player.avatarURL}
                />
                <PlayerDetails
                    player = {props.player}
                />                
            </PlayerWrapper>
        </Col>
    )
}

export default Player;