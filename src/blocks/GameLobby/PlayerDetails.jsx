import React from 'react';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  width: 100%;
`

const PlayerName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vmin;
  color: #fff;
  font-weight: bold;
  background-color: brown;
  overflow-x: hidden;
  width: 100%;
  height: 30px;
`

const PlayerHealth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: darkred;
  font-size: 2vmin;
  font-weight: bold;
  color: #fff;
`


const PlayerDetails = (props) => (
  <DetailsWrapper>
    <PlayerName>{props.player.username}</PlayerName>
    <PlayerHealth>{props.player.health}/100</PlayerHealth>
  </DetailsWrapper>
)

export default PlayerDetails
  

