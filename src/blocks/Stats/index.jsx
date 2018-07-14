import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import Statistics from './Statistics.jsx';
import { BG_Image_Scroll, FormButton, LogoutButton } from '../../elements';
import img from '../../../static/img/login/MapNoBorders.jpg';

import generalwu from '../../../static/img/avatars/1_GeneralWu.jpg';

import button from '../../../static/img/profile/Join_Game_Button.png';
import button_hover from '../../../static/img/profile/Join_Game_Button_Hover.png';

import plate from '../../../static/img/profile/AspectRatioProfile.png';

import arrowLeft from '../../../static/img/icons/Arrow_Left_Button.png';
import arrowLeftHover from '../../../static/img/icons/Arrow_Left_Button_Hover.png';
import arrowRight from '../../../static/img/icons/Arrow_Right_Button.png';
import arrowRightHover from '../../../static/img/icons/Arrow_Right_Button_Hover.png';

import logout from '../../../static/img/profile/Logout_Button.png';
import logout_hover from '../../../static/img/profile/Logout_Button_Hover.png';

// const ScoreLabel = styled.label`
//   background: brown;
//   margin: 3vmin;
// `
// `
// const ScoreCard = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 0vmin;
// `
// const ProfileLabel =  styled.label`
//   display: block;
//   margin: 0vmin auto;
//   font-size: 2vmin;
//   font-weight: 700;
// `


const ContainerProfile = styled.div`
  width: var(--width);
  height: var(--height);
  background-image: url(${props => props.img});
  background-position: center center;
  background-size: contain;
  /* border: 1px solid orange; */
  padding: 15vmin;
  margin-left: -5vmin;
`
const Avatar = styled.div`
  /* border: 1px solid purple; */
  /* background-image: url('../../../static/img/avatars/1_GeneralWu.jpg'); */
  background-image: url(${props => props.avatar});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 20vmin 10vmin 15vmin 10vmin;
`
const AvatarArea = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
`
const Arrow = styled.div`
  height: 20vmin;
  width: 20vmin;
  background-image: ${props=> props.left ? `url(${arrowLeft})` : `url(${arrowRight})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  transition: all .2s ease-in-out;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    background-image: ${props=> props.left ? `url(${arrowLeftHover})` : `url(${arrowRightHover})`};
   }
 `

const ProfileJoin = styled(Link)`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vmin;
  padding-top: 6vmin;
  padding-bottom: 6vmin;
  cursor: pointer;
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

const ProfileLogoutButton = LogoutButton.extend`
   position: relative;
   top: -22vmin;
   left: 85vmin;
   padding: 2.5vmin;
`

const ProfileItems = styled.div`
margin-left: -2vmin;
margin-top: -3.5vmin;
`

export default function Stats(props) {
    return(
      <BG_Image_Scroll img={img}>
        <ProfileLogoutButton img={logout} onClick={props.handleLogout}></ProfileLogoutButton>
        <ContainerProfile img={plate}>
          <Container>
            <ProfileItems>
            <Row>
              <Col xs={6}>
                <AvatarArea>
                  <Arrow id= {1} left onClick={props.selectAvatar} />
                    <Avatar avatar={generalwu}/>
                  <Arrow id= {2} right onClick={props.selectAvatar} />
                </AvatarArea>
              </Col>
              <Col xs={6}>
               <Statistics>
               </Statistics>
              </Col>
            </Row>
            </ProfileItems>
          </Container>
          <ProfileJoin to='/games'/>
        </ContainerProfile>
      </BG_Image_Scroll>
    );
}``