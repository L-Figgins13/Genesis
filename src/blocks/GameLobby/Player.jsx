import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const Player = (props) => {
    return (
        <div>
            <div>
                <div>{props.player.user_id}</div>
                <div>{props.player.username}</div>
            </div>
        </div>
    )
}

export default Player;