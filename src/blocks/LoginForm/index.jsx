import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLink, BG_Image_Scroll, FormBG, FormHint, FormLabel, FormButton, FormContainer, InputBox } from '../../elements';

import img from '../../../static/img/login/MapNoBorders.jpg';
import plate from '../../../static/img/login/Aspect_Ratio_BG_Plate.png';
import button from '../../../static/img/login/Submit_Button.png';
import button_hover from '../../../static/img/login/Submit_Button_Hover.png';



const LoginForm = function (props) {
  return (
    <BG_Image_Scroll img={img}>
    <FormContainer>
      <FormBG img= {plate}>
        <form onSubmit= {props.handleSubmit}>
          <FormLabel>Username</FormLabel>
          <InputBox 
                name = "username" 
                type = "text" 
                value = {props.username} 
                onChange = {props.handleInputChange}
            />
          <FormLabel>Password</FormLabel>
          <InputBox 
                name = "password" 
                type = "password" 
                value = {props.password} 
                onChange = {props.handleInputChange}
            />
            {props.showIncorrectUsernameOrPasswordHint && 
              <FormHint>Incorrect Username or Password</FormHint>
            } 
            <h3>Dont Have An Account? <StyledLink to ='/signup'>Create An Account.</StyledLink></h3>
            <FormButton type = "submit"></FormButton>
        </form>
        </FormBG>
      </FormContainer>
    </BG_Image_Scroll>
  )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;