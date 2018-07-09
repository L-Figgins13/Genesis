import React from "react";
import styled from "styled-components";
import PlayerArea from "./PlayerArea.jsx";
import img from "../../../static/img/gamelobby/BG.jpg";
import gameMenu from "../../../static/img/gamelobby/Aspect_Ratio_GameLobby.png";
import { bgImageScroll } from "../../elements";

const GameArea = styled.div`
  background-image: url(${props => props.img});
  /* background: red; */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid blue; */
  font-size: 2vmin;
  color: #280408;
  margin: 20vmin auto;
  padding-top: 5vmin;
  padding-bottom: 5vmin;
  width: var(--width);
  height: var(--height);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 2vmin;
    font-weight: bold;
  }

  h2 {
    font-size: 3vmin;
  }

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`;

const GameLobby = props => (
  <bgImageScroll img={img}>
    <GameArea img={gameMenu}>
      <h1>Waiting for more players to join...</h1>
      <PlayerArea players={props.players} />
    </GameArea>
  </bgImageScroll>
);

export default GameLobby;
