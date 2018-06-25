import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Wrapper, Container, Label, Button, Input, H1, BG_Image, StyledLink } from '../../elements';

import img from '../../../static/img/login/MapNoBorders.jpg';
import title_plank from '../../../static/img/login/Title_Plank_Blank.png';
import plate from '../../../static/img/login/Aspect_Ratio_BG_Plate.png';
import plate_sm from '../../../static/img/login/Wood_BG_Plate_SM.png';
import button from '../../../static/img/login/Submit_Button.png';
import button_hover from '../../../static/img/login/Submit_Button_Hover.png';

const BG_Image_Form =  styled.div`
  background-image: url(${props => props.img});
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
const FormHint =  styled.div`
  color:#fff;
  background-color: #B22222;
  margin-bottom: 3vmin;
  padding: 1vmin;
  position: absolute;
  top: 43%;
  left: 33%;
  z-index: 2;
  
`
const FormLabel =  styled.label`
  display: block;
  margin: 0vmin auto;
  font-size:3vmin;
  font-weight: 700;
`

const FormButton =  styled.button`
  cursor: pointer;
  text-decoration: none;
  margin: 5vmin auto;
  margin-top: 5vmin;
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

const FormContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 0vmin auto;
  padding-top: 15vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
`

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
  transition: background-color .5s ease;
  transition: border .5s ease;
  transition: box-shadow .25s ease;
  background-color: #fff;
  color: #2d1e10;
  -webkit-box-shadow: inset 0px 0px 6px 3px rgba(0,0,0,0.0);
    -moz-box-shadow: inset 0px 0px 6px 3px rgba(0,0,0,0.0);
    box-shadow: inset 0px 0px 6px 3px rgba(0,0,0,0.0);

  &:hover{
    transition: background-color .5s ease;
    transition: border .5s ease;
    transition: box-shadow .25s ease;
    background-color: #ffebd8;
    border: .25vmin solid #2d1e10;
    -webkit-box-shadow: inset 0px 0px 10px 3px rgba(0,0,0,0.15);
    -moz-box-shadow: inset 0px 0px 10px 3px rgba(0,0,0,0.15);
    box-shadow: inset 0px 0px 10px 3px rgba(0,0,0,0.15);
  }
`

const Login = styled.div`
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

const LoginForm = function (props) {
  return (
    <BG_Image_Form img={img}>
    <FormContainer>
      <Login>
        <form onSubmit= {props.handleSubmit}>
          <FormLabel>Username</FormLabel>
          <InputBox 
                name = "username" 
                type = "text" 
                value = {props.username} 
                onChange = {props.handleInputChange}
            />
            {props.showIncorrectUsernameOrPasswordHint && 
              <FormHint>Incorrect Username or Password</FormHint>
            } 
          <FormLabel>Password</FormLabel>
          <InputBox 
                name = "password" 
                type = "password" 
                value = {props.password} 
                onChange = {props.handleInputChange}
            />
            <h3>Dont Have An Account? <StyledLink to ='/signup'>Create An Account.</StyledLink></h3>
            <FormButton type = "submit"></FormButton>
        </form>
      </Login>
      </FormContainer>
    </BG_Image_Form>
  )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;