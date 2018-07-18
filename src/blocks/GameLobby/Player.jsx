import React from 'react';
import styled from 'styled-components';
import {Col} from 'react-grid-system';
import avatarPlate from '../../../static/img/avatars/avatarPlate.png';
import plate from '../../../static/img/gamesfinder/AspectRatioGames.png';

const PlayerBadge = styled.div`
  background-image: url(${avatarPlate});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 10vh;
  width: 20vw;
  margin: 5vmin;
`

const PlayerName = styled.h1`
    font-size: 2vmin;
    color: #fff;
    font-weight: bold;
    background-color: brown;
    position: relative;
    top: 2.2vmin;
    left: 3vmin;
    width: 6vw;
    overflow-x: hidden;
`

const Player = (props) => {
    return (
        <Col xs={6} align="center">
            <PlayerBadge>
                {/* <div>{props.player.user_id}</div> */}
                <PlayerName>{props.player.username}</PlayerName>
            </PlayerBadge>
        </Col>
    )
}

export default Player;