import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { BG_Image } from '../../elements';
import img from '../../../static/img/profile/MapBorders.jpg';
import button from '../../../static/img/login/Submit_Button.png';
import button_hover from '../../../static/img/login/Submit_Button_Hover.png';
import plate from '../../../static/img/profile/AspectRatioProfile.png';


const ScoreLabel = styled.label`
  background: brown;
  margin: 3vmin;
`

const ScoreCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5vmin;
`

const ProfileLabel =  styled.label`
  display: block;
  margin: 0vmin auto;
  font-size:2vmin;
  font-weight: 700;
`

const ProfileLink = styled(Link)`
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

const ProfileContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 0vmin auto;
  padding-top: 15vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
`

const Profile = styled.div`
  background-image: url(${plate});
  /* background: red; */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid blue; */
  font-size: 3.5vmin;
  color: #280408;
  margin: 5vmin auto;
  padding-top: 5vmin;
  padding-bottom: 5vmin;
  width: var(--width);
  height: var(--height);

  form{
    margin-top: 9vmin;
  }

  h3{
    padding-top: 4vmin;
    font-size: 2vmin;
  }

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`

export default function Stats(props) {
    return(
      <BG_Image img={img}>
        <ProfileContainer>
          <Profile>
            <form onSubmit= {props.handleSubmit}>
              <ProfileLabel>{props.user.username}'s Profile</ProfileLabel>
              <ScoreCard>
                <ScoreLabel>Wins: {props.user.stats.wins}</ScoreLabel> 
                <ScoreLabel>Losses: {props.user.stats.losses}</ScoreLabel> 
              </ScoreCard>
              <ProfileLink to='/games'></ProfileLink>
            </form>
          </Profile>
        </ProfileContainer>
      </BG_Image>
    );
}