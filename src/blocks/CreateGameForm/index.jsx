import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import img from "../../../static/img/backgrounds/Map_Borders.jpg";
import button from "../../../static/img/login/Submit_Button.png";
import buttonHover from "../../../static/img/login/Submit_Button.png";
import plate from "../../../static/img/gamesfinder/AspectRatioGames.png";

const BGImageGame = styled.div`
  background-image: url(${img});
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  -webkit-animation: 100s scroll infinite linear;
  -moz-animation: 100s scroll infinite linear;
  -o-animation: 100s scroll infinite linear;
  -ms-animation: 100s scroll infinite linear;
  animation: 100s scroll infinite linear;

  @-webkit-keyframes scroll {
    100% {
      background-position: 2500px 0px;
    }
    50% {
      background-position: 2500px 0px;
    }
  }

  @-moz-keyframes scroll {
    100% {
      background-position: 2500px 0px;
    }
    50% {
      background-position: 2500px 0px;
    }
  }

  @-o-keyframes scroll {
    100% {
      background-position: 2500px 0px;
    }
    50% {
      background-position: 2500px 0px;
    }
  }

  @-ms-keyframes scroll {
    100% {
      background-position: 2500px 0px;
    }
    50% {
      background-position: 2500px 0px;
    }
  }

  @keyframes scroll {
    100% {
      background-position: 2500px 0px;
    }
    50% {
      background-position: 2500px 0px;
    }
  }
`;
const GameLabel = styled.label`
  display: block;
  margin: 0vmin auto;
  font-size: 2vmin;
  font-weight: 700;
`;

const GameButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  margin: 5vmin auto;
  margin-top: 20vmin;
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

const GameContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 0vmin auto;
  padding-top: 15vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
`;

const InputBox = styled.input`
  margin: 2vmin auto;
  font-size: 2vmin;
  width: 50vmin;
  height: 4vmin;
  padding: 1vmin;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  transition: border 0.5s ease;
  transition: box-shadow 0.25s ease;
  background-color: #fff;
  color: #2d1e10;
  -webkit-box-shadow: inset 0px 0px 6px 3px rgba(0, 0, 0, 0);
  -moz-box-shadow: inset 0px 0px 6px 3px rgba(0, 0, 0, 0);
  box-shadow: inset 0px 0px 6px 3px rgba(0, 0, 0, 0);

  &:hover {
    transition: background-color 0.5s ease;
    transition: border 0.5s ease;
    transition: box-shadow 0.25s ease;
    background-color: #ffebd8;
    border: 0.25vmin solid #2d1e10;
    -webkit-box-shadow: inset 0px 0px 10px 3px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: inset 0px 0px 10px 3px rgba(0, 0, 0, 0.15);
    box-shadow: inset 0px 0px 10px 3px rgba(0, 0, 0, 0.15);
  }
  &:focus,
  :visited {
    border: none;
  }
`;

const Game = styled.div`
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

const CreateGameForm = function(props) {
  return (
    <BGImageGame>
      <GameContainer>
        <Game>
          <form onSubmit={props.handleSubmit}>
            <GameLabel>Create A Game Title: </GameLabel>
            <InputBox
              name="title"
              type="text"
              value={props.title}
              onChange={props.handleInputChange}
            />
            <GameButton type="submit" />
          </form>
        </Game>
      </GameContainer>
    </BGImageGame>
  );
};

CreateGameForm.propTypes = {
  // owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default CreateGameForm;
