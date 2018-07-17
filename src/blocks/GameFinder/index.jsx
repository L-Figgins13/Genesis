import GameTable from './GameTable.jsx';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, BG_Image_Scroll, LogoutButton } from '../../elements';

import { Container, Row, Col } from 'react-grid-system';

import img from '../../../static/img/gamesfinder/MapNoBorders.jpg';
import plate from '../../../static/img/gamesfinder/AspectRatioGames.png';
import button from '../../../static/img/profile/Join_Game_Button.png';
import button_hover from '../../../static/img/profile/Join_Game_Button_Hover.png';
import create_button from '../../../static/img/signup/Create_Button.png';
import create_button_hover from '../../../static/img/signup/Create_Button_Hover.png';
import logout from '../../../static/img/profile/Logout_Button.png';


const JoinLink = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-size: 3vmin;
  background-color: Transparent;
  box-sizing: border-box;
  background-image: url(${button});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all .2s ease-in-out;
  width: 25vmin;
  height: 25vmin;
  padding: 0;

  &:hover{
    transform: scale(1.1);
    background-image: url(${button_hover});
  }
`

const CreateLink = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-size: 3vmin;
  background-color: Transparent;
  box-sizing: border-box;
  background-image: url(${create_button});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all .2s ease-in-out;
  width: 25vmin;
  height: 25vmin;
  padding: 0;

  &:hover{
    transform: scale(1.1);
    background-image: url(${create_button_hover});
  }
`

const TableContainer = styled.div`
  border: 1px solid blue; 
  width: var(--width);
  height: var(--height);
  text-align: center;
  background-image: url(${plate});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding-right: 10vmin;
  padding-left: 10vmin;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 4.5vmin;
  color: #280408;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 350px;
  border: 1px solid red;

  @media only screen and (max-width: 670px) {
    width: 90%;
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
        <BG_Image_Scroll img={img}>
          <TableContainer>
              <Container>
                <Row>
                  <Col xs={12}>
                    <LogoutButton img={logout} onClick={props.handleLogout}></LogoutButton>  
                  </Col>

                  <Col xs={12}>
                    <InnerContainer>
                      <GameTable handleGameSelection={props.handleGameSelection} games={props.games} joinGame={props.joinGame} />
                    </InnerContainer>
                  </Col>
                </Row>

                <Row>
                  <Col></Col>
                  <Col xs={3}>
                    <CreateLink
                      onClick={()=>{props.history.push('/games/create')}}
                    />
                  </Col>
                  <Col></Col>
                  <Col xs={3}> 
                  <JoinLink
                    onClick={props.joinGame}
                  />
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            
          </TableContainer>
        </BG_Image_Scroll>
    );
}

export default GameFinder;
