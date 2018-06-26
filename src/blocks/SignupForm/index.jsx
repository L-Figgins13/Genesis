
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BG_Image, FormLabel, FormButton, FormContainer, InputBox, FormBG } from '../../elements';

import img from '../../../static/img/login/MapNoBorders.jpg';
import plate from '../../../static/img/signup/AspectRatioSignup.png';
import button from '../../../static/img/login/Submit_Button.png';
import button_hover from '../../../static/img/login/Submit_Button.png';

const FormLabelSignup =  FormLabel.extend`
  font-size:2vmin;
`

const BG_Image_Scroll = BG_Image.extend`
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
              {/* { props.showUsernameHint &&
                <FormHint>Your Username Is Not Unique, Please Try Again.</FormHint>
              }
              {props.showIncorrectUsernameOrPasswordHint && 
                <FormHint>Incorrect Username or Password</FormHint>
              }  */}
            <FormLabel>Password</FormLabel>
            <InputBox 
              name = "password" 
              type= "password" 
              value= {props.password} 
              onChange= {props.handleInputChange}
            />
            {/* { props.showValidPasswordHint &&
              <FormHint>Please Enter a Valid Password</FormHint>
            }

            { props.showPasswordsDoNotMatchHint &&
                <FormHint>Passwords Do Not Match</FormHint>
            } */}
            <FormLabel>ReEnter Password</FormLabel>
            <InputBox 
              name = "password2" 
              type= "password" 
              value= {props.password2} 
              onChange= {props.handleInputChange}
            />
              <FormButton marginTop="0vmin" type="submit"></FormButton>
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