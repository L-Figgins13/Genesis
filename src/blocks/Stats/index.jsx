import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BGImage, LogoutButton } from "../../elements";
import img from "../../../static/img/profile/MapBorders.jpg";
import button from "../../../static/img/profile/Join_Game_Button.png";
import buttonHover from "../../../static/img/profile/Join_Game_Button_Hover.png";
import plate from "../../../static/img/profile/AspectRatioProfile.png";
import arrowLeft from "../../../static/img/icons/Arrow_Left_Button.png";
import arrowLeftHover from "../../../static/img/icons/Arrow_Left_Button_Hover.png";

import arrowRight from "../../../static/img/icons/Arrow_Right_Button.png";
import arrowRightHover from "../../../static/img/icons/Arrow_Right_Button_Hover.png";

import logout from "../../../static/img/profile/Logout_Button.png";

const ScoreLabel = styled.label`
  background: brown;
  margin: 3vmin;
`;

const Arrow = styled.div`
  padding: 4vmin 4vmin;
  margin: 0vmin 0vmin;
  background-image: ${props =>
    props.left ? `url(${arrowLeft})` : `url(${arrowRight})`};
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    transform: scale(1.1);
    background-image: ${props =>
      props.left ? `url(${arrowLeftHover})` : `url(${arrowRightHover})`};
  }
`;

const Avatar = styled.div`
  padding: 14vmin 14vmin;
  /* background-image: url('/img/avatars/1_GeneralWu.jpg'); */
  background-image: ${props => `url(${props.avatarUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ScoreCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5vmin;
`;

const ProfileLabel = styled.label`
  display: block;
  margin: 0vmin auto;
  font-size: 2vmin;
  font-weight: 700;
`;

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
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-image: url(${buttonHover});
  }
`;

const ProfileContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 0vmin auto;
  margin-top: 20vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
`;

const Profile = styled.div`
  background-image: url(${plate});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 3.5vmin;
  color: #280408;
  margin: 5vmin auto;
  padding-top: 5vmin;
  padding-bottom: 5vmin;
  width: var(--width);
  height: var(--height);

  form {
    margin-top: 9vmin;
  }

  h3 {
    padding-top: 4vmin;
    font-size: 2vmin;
  }

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`;

export default function Stats(props) {
  return (
    <BGImage img={img}>
      <ProfileContainer>
        <Profile>
          <ProfileLink to="/games" />
          <LogoutButton img={logout} onClick={props.handleLogout} />
          <form onSubmit={props.handleSubmit}>
            <ProfileLabel>
              {props.user.username}
              's Profile
            </ProfileLabel>
            <Avatar avatarUrl={props.user.currentAvatarUrl} />
            <Arrow id={1} right onClick={props.selectAvatar} />
            <Arrow id={2} left onClick={props.selectAvatar} />
            <ScoreCard>
              <ScoreLabel>
                Wins:
                {props.user.stats.wins}
              </ScoreLabel>
              <ScoreLabel>
                Losses:
                {props.user.stats.losses}
              </ScoreLabel>
            </ScoreCard>
          </form>
        </Profile>
      </ProfileContainer>
    </BGImage>
  );
}
