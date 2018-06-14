import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import img from '../../../static/img/gamelobby/Title_Plank.png';

import PlayerArea from './PlayerArea.jsx';
// import {Button} from '../../elements';

const ImageTest = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${img});
`;



const GameLobby = (props) => {
    return (
        <div>
            <div>
                <h1> Game Lobby </h1>
            </div>
            <div>
                <PlayerArea players={props.players} />
            </div>
        </div>
    )
}

export default GameLobby;