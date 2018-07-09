import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  StyledLink,
  BGImage,
  FormBG,
  FormHint,
  FormLabel,
  FormButton,
  FormContainer,
  InputBox
} from "../../elements";

import img from "../../../static/img/login/MapNoBorders.jpg";
import plate from "../../../static/img/login/Aspect_Ratio_BG_Plate.png";
import button from "../../../static/img/login/Submit_Button.png";
import buttonHover from "../../../static/img/login/Submit_Button_Hover.png";

const BGImageScroll = BGImage.extend`
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

const LoginForm = function(props) {
  return (
    <BGImageScroll img={img}>
      <FormContainer>
        <FormBG img={plate}>
          <form onSubmit={props.handleSubmit}>
            <FormLabel>Username</FormLabel>
            <InputBox
              name="username"
              type="text"
              value={props.username}
              onChange={props.handleInputChange}
            />
            {props.showIncorrectUsernameOrPasswordHint && (
              <FormHint>Incorrect Username or Password</FormHint>
            )}
            <FormLabel>Password</FormLabel>
            <InputBox
              name="password"
              type="password"
              value={props.password}
              onChange={props.handleInputChange}
            />
            <h3>
              Dont Have An Account?{" "}
              <StyledLink to="/signup">Create An Account.</StyledLink>
            </h3>
            <FormButton type="submit" />
          </form>
        </FormBG>
      </FormContainer>
    </BGImageScroll>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
