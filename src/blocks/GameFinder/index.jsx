import GameTable from './GameTable.jsx';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../../static/img/gamesfinder/MapNoBorders.jpg';
import plate from '../../../static/img/gamesfinder/AspectRatioGames.png';
import button from '../../../static/img/login/Submit_Button.png';
import button_hover from '../../../static/img/login/Submit_Button.png';


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
  transition: all .2s ease-in-out;

  &:hover{
    transform: scale(1.1);
    background-image: url(${button_hover});
  }
`

const TableContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 0vmin auto;
  padding-top: 15vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${plate});
  /* background: red; */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid blue; */
  font-size: 3.5vmin;
  color: #280408;
  margin: 5vmin auto;
  width: var(--width);
  height: var(--height);

  table{
    margin-top: 20vmin;
    overflow-y: scroll;
    overflow-x: wrap;
  }

  h3{
    padding-top: 4vmin;
    font-size: 2vmin;
  }

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`

const BG_Image_GameFinder =  styled.div`
  background-image: url(${img});
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  position:fixed;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  -webkit-animation:100s scroll infinite linear;
  -moz-animation:100s scroll infinite linear;
  -o-animation:100s scroll infinite linear;
  -ms-animation:100s scroll infinite linear;
  animation:100s scroll infinite linear;

  @-webkit-keyframes scroll{
    100%{
      background-position:2500px 0px;
    }
    50%{
      background-position:2500px 0px;
    }
  }

  @-moz-keyframes scroll{
    100%{
      background-position:2500px 0px;
    }
    50%{
      background-position:2500px 0px;
    }
  }

  @-o-keyframes scroll{
    100%{
      background-position:2500px 0px;
    }
    50%{
      background-position:2500px 0px;
    }
  }

  @-ms-keyframes scroll{
    100%{
      background-position:2500px 0px;
    }
    50%{
      background-position:2500px 0px;
    }
  }

  @keyframes scroll{
    100%{
      background-position:2500px 0px;
    }
    50%{
      background-position:2500px 0px;
    }
  }

`

/* <TableContainer>    
          <Label fontSize='2rem' textAlign='center'>Games Lobby</Label>
            <StyledLink to= '/games/create'>Create A New Game</StyledLink>
            <GameTable games={props.games} joinGame={props.joinGame} />
            <Button>Join</Button>
        </TableContainer> */


const GameFinder = (props) =>  {
    return(
        <BG_Image_GameFinder>
          <TableContainer>
            <InnerContainer>
                <GameTable handleGameSelection={props.handleGameSelection} games={props.games} joinGame={props.joinGame} />
                {/* <Button>Join Game</Button> */}
                <GamesLink to= '/games/create'></GamesLink>
            </InnerContainer>
          </TableContainer>
        </BG_Image_GameFinder>
    );
}

export default GameFinder;
