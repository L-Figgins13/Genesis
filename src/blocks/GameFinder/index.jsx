import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import GameTable from "./GameTable.jsx";
import { BGImageScroll, LogoutButton } from "../../elements";

import img from "../../../static/img/gamesfinder/MapNoBorders.jpg";
import plate from "../../../static/img/gamesfinder/AspectRatioGames.png";
import button from "../../../static/img/login/Submit_Button.png";
import buttonHover from "../../../static/img/login/Submit_Button.png";
import logout from "../../../static/img/profile/Logout_Button.png";

const GamesLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin: 5vmin auto;
  margin-top: 3vmin;
  border: none;
  font-size: 3vmin;
  padding: 6vmin 20vmin;
  background-color: Transparent;
  box-sizing: border-box;
  background-image: url(${button});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-image: url(${buttonHover});
  }
`;

const TableContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 0vmin auto;
  margin-top: 15vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
  background-image: url(${plate});
  /* background: red; */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid blue; */
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3.5vmin;
  color: #280408;
  margin: 5vmin auto;
  width: var(--width);
  height: var(--height);
  overflow-y: scroll;
  overflow-x: hidden;

  max-height: 350px;
  border: 1px solid red;

  h3 {
    padding-top: 4vmin;
    font-size: 2vmin;
  }

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`;

/* <TableContainer>
          <Label fontSize='2rem' textAlign='center'>Games Lobby</Label>
            <StyledLink to= '/games/create'>Create A New Game</StyledLink>
            <GameTable games={props.games} joinGame={props.joinGame} />
            <Button>Join</Button>
   </TableContainer> */

const GameFinder = props => (
  <BGImageScroll img={img}>
    <TableContainer>
      <LogoutButton img={logout} onClick={props.handleLogout} />
      <InnerContainer>
        <GameTable
          handleGameSelection={props.handleGameSelection}
          games={props.games}
          joinGame={props.joinGame}
        />
        {/* <Button>Join Game</Button> */}
      </InnerContainer>
      <GamesLink to="/games/create" />
    </TableContainer>
  </BGImageScroll>
);

export default GameFinder;
