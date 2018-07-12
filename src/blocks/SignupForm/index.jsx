
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BG_Image_Scroll, FormLabel, FormButton, FormContainer, InputBox, FormBG, FormHint, LogoutButton } from '../../elements';

import img from '../../../static/img/login/MapNoBorders.jpg';
import plate from '../../../static/img/signup/AspectRatioSignup.png';
import button from '../../../static/img/signup/Create_Button.png';
import button_hover from '../../../static/img/signup/Create_Button_Hover.png';

const CreateButton =  FormButton.extend`
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

const SignupForm = function (props) {
  return (
    <BG_Image_Scroll img={img}>
      <FormContainer>
        <FormBG img={plate}>
          <form onSubmit= {props.handleSubmit}>
            <FormLabel>Username</FormLabel>
            <InputBox 
                  name = "username" 
                  type = "text" 
                  value = {props.username} 
                  onChange = {props.handleInputChange}
              />
              { props.showUsernameHint &&
                <FormHint>Your Username Is Not Unique, Please Try Again.</FormHint>
              }
              {props.showIncorrectUsernameOrPasswordHint && 
                <FormHint>Incorrect Username or Password</FormHint>
              }  
            <FormLabel>Password</FormLabel>
            <InputBox 
              name = "password" 
              type= "password" 
              value= {props.password} 
              onChange= {props.handleInputChange}
            />
             { props.showValidPasswordHint &&
              <FormHint>Please Enter An Alphanumeric Password. No Symbols</FormHint>
             }

            { props.showPasswordsDoNotMatchHint &&
                <FormHint>Passwords Do Not Match</FormHint>
            }
            <FormLabel>ReEnter Password</FormLabel>
            <InputBox 
              name = "password2" 
              type= "password" 
              value= {props.password2} 
              onChange= {props.handleInputChange}
            />
              <CreateButton marginTop="1.5vmin" type="submit"></CreateButton>
          </form>
        </FormBG>
      </FormContainer>
    </BG_Image_Scroll>
  )
}

SignupForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default SignupForm;