import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import { BG_Image, LogoutButton } from '../../elements';
import img from '../../../static/img/profile/MapBorders.jpg';
import button from '../../../static/img/profile/Join_Game_Button.png';
import button_hover from '../../../static/img/profile/Join_Game_Button_Hover.png';
import plate from '../../../static/img/profile/AspectRatioProfile.png';
import arrowLeft from '../../../static/img/icons/Arrow_Left_Button.png';
import arrowLeftHover from '../../../static/img/icons/Arrow_Left_Button_Hover.png';

import arrowRight from '../../../static/img/icons/Arrow_Right_Button.png';
import arrowRightHover from '../../../static/img/icons/Arrow_Right_Button_Hover.png';

import logout from '../../../static/img/profile/Logout_Button.png';
import logout_hover from '../../../static/img/profile/Logout_Button_Hover.png';


const ScoreLabel = styled.label`
  background: brown;
  margin: 3vmin;
`

const Arrow = styled.div`
  height: 10vmin;
  width: 10vmin;
  margin-top: 5vmin;
  margin-left: -1.5vmin;
  margin-right: -1.5vmin;
  background-image: ${props=> props.left ? `url(${arrowLeft})` : `url(${arrowRight})`};
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    transform: scale(1.1);
    background-image: ${props=> props.left ? `url(${arrowLeftHover})` : `url(${arrowRightHover})`};
  }
`



const Avatar = styled.div`
  padding: 10vmin 10vmin;
  /* background-image: url('/img/avatars/1_GeneralWu.jpg'); */
  background-image: ${props => `url(${props.avatarUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  
`

const ScoreCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0vmin;
`

const ProfileLabel =  styled.label`
  display: block;
  margin: 0vmin auto;
  font-size: 2vmin;
  font-weight: 700;
`

const ProfileLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin: 0vmin auto;
  margin-top: 0vmin;
  border: none;
  font-size: 3vmin;
  padding: 0vmin 0vmin;
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

const ProfileContainer = styled.div`
  margin: 0vmin auto;
  margin-top: 0vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
 
`

const Profile = styled.div`
  border: 1px  solid green;
  background-image: url(${plate});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 3.5vmin;
  color: #280408;
  
  width: var(--width);
  height: var(--height);


  form{
    display: flex;

  }

  h3{
    padding-top: 4vmin;
    font-size: 2vmin;
  }

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`

const AvatarArea = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`



export default function Stats(props) {
    return(
      // <BG_Image img={img}>
      //   <ProfileContainer>
      //     <Profile>
      //       <LogoutButton img={logout} onClick={props.handleLogout}></LogoutButton>
      //       <form onSubmit= {props.handleSubmit}>
      //         <ProfileLabel>{props.user.username}'s Profile</ProfileLabel>
      //         <Avatar avatarUrl = {props.user.currentAvatarUrl} />
      //         <Arrow id= {1} right onClick={props.selectAvatar} />
      //         <Arrow id= {2} left onClick={props.selectAvatar} />
      //         <ScoreCard>
      //           <ScoreLabel>Wins: {props.user.stats.wins}</ScoreLabel> 
      //           <ScoreLabel>Losses: {props.user.stats.losses}</ScoreLabel> 
      //         </ScoreCard>
      //         <ProfileLink to='/games'></ProfileLink>
      //       </form>
      //     </Profile>
      //   </ProfileContainer>
      // </BG_Image>

      <BG_Image img={img}>
        <ProfileContainer>
          <Profile>
            <Container>
              <Row>
                <Col xs={3}>
                  col
                </Col>
                <Col xs={3}>
                  col
                </Col>
                <Col xs={3}>
                  col
                </Col>
                <Col xs={3}>
                  <LogoutButton img={logout} onClick={props.handleLogout}></LogoutButton>
                </Col>
              </Row>

              <Row>
              <form onSubmit= {props.handleSubmit}>
                <Col xs={12}>
                <AvatarArea>
                  <Arrow id= {2} left onClick={props.selectAvatar} />
                  <Avatar avatarUrl = {props.user.currentAvatarUrl} />
                  <Arrow id= {1} right onClick={props.selectAvatar} />
                </AvatarArea>
                </Col>
                <Col xs={12}>
                  Information Area
                </Col>
              </form>
              </Row>

              {/* <form onSubmit= {props.handleSubmit}>
               <ProfileLabel>{props.user.username}'s Profile</ProfileLabel>
               <Avatar avatarUrl = {props.user.currentAvatarUrl} />
               <Arrow id= {1} right onClick={props.selectAvatar} />
               <Arrow id= {2} left onClick={props.selectAvatar} />
               <ProfileLink to='/games'></ProfileLink>
             </form> */}
            </Container>
          </Profile>
        </ProfileContainer>
      </BG_Image>
    );
}``