import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import mapNoBorders from '../../static/img/login/MapNoBorders.jpg';
// import plate from '../../static/img/login/Aspect_Ratio_BG_Plate.png';

//images
import button from '../../static/img/login/Submit_Button.png';
import button_hover from '../../static/img/login/Submit_Button_Hover.png';
import logoutImg from '../../static/img/icons/Logout_Button.png';
import logoutImg_hover from '../../static/img/icons/Logout_Hover_Button.png';

import logout_hover from '../../static/img/profile/Logout_Button_Hover.png';

const Button = styled.button`
  background: linear-gradient(to bottom, #8f34d9, #44009e);
  cursor: pointer;
  color: #fff;
  border: solid #3500a6 2px;
  text-decoration: none;
  padding: 3vmin;
  font-size: 2vmin;
  -webkit-transition: box-shadow .5s ease;
  -moz-transition: box-shadow .5s ease;
  -ms-transition: box-shadow .5s ease;
  -o-transition: box-shadow .5s ease;
  -webkit-box-shadow: 0px 0px 0px 0px rgba(220,1,244,0.49);
  -moz-box-shadow: 0px 0px 0px 0px rgba(220,1,244,0.49);
  box-shadow: 0px 0px 0px 0px rgba(220,1,244,0.49);
    
  &:focus {
    -webkit-transition: box-shadow .5s ease;
    -moz-transition: box-shadow .5s ease;
    -ms-transition: box-shadow .5s ease;
    -o-transition: box-shadow .5s ease;
    -webkit-box-shadow: 0px 0px 31px 0px rgba(220,1,244,0.49);
    -moz-box-shadow: 0px 0px 31px 0px rgba(220,1,244,0.49);
    box-shadow: 0px 0px 31px 0px rgba(220,1,244,0.49);
    
  }
  &:hover{
    background: linear-gradient(to top, #8f34d9, #44009e);
  }
  &:active{
   background: purple;
  }
`
export { Button };

const Label = styled.label`
  font-size: ${props => props.fontSize? props.fontSize : '1rem'};
  text-align: ${props => props.textAlign};
  color: #fff;

  a{
    color: #73247C;
  }

  /* @media (min-width: 375px) {
    background: red;
  }
  @media only screen and (min-width : 768px) {
    background: violet;
  }
  @media only screen and (min-width : 992px) {
    background: red;
  }
  @media only screen and (min-width : 1200px) {
    background: black;
  } */
`
export { Label };

const Input = styled.input`
  width: 100%;
  height: 4vh;
  background-color: wheat;
  border-radius: .5rem;
  border: 1px solid #111;
  padding: .75rem .75rem;
  font-weight: bold;
  font-size: 1.5rem;
  -webkit-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  -moz-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  -webkit-transition: box-shadow .5s ease;
  -moz-transition: box-shadow .5s ease;
  -ms-transition: box-shadow .5s ease;
  -o-transition: box-shadow .5s ease;

  &:focus, textarea:focus {
    -webkit-transition: box-shadow .5s ease;
    -moz-transition: box-shadow .5s ease;
    -ms-transition: box-shadow .5s ease;
    -o-transition: box-shadow .5s ease;
    -webkit-box-shadow: 0px 0px 31px 0px rgba(220,1,244,0.49);
    -moz-box-shadow: 0px 0px 31px 0px rgba(220,1,244,0.49);
    box-shadow: 0px 0px 31px 0px rgba(220,1,244,0.49);
  }
`;

export {Input}

const StyledLink = styled(Link)`
  color: #2d1e10;
  font-weight: bold;
  text-decoration: none;
  padding: .5rem;
  &:hover{
      transition: scale(1.09);
      color: #ffb700;
  }
`
export { StyledLink };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position:fixed;
  background-image: url(${props => props.mapNoBorders});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`
export { Wrapper };

const BG_Image =  styled.div`
  background-image: url(${props => props.img});
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  position:fixed;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export { BG_Image };

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
export { BG_Image_Scroll };

const FormHint =  styled.div`
  color: #B22222;
  margin-bottom: 3vmin;
  padding: 1vmin;
  position: absolute;
  top: 41%;
  left: 39%;
  z-index: 2;
  font-size: 2vmin; 
`
export { FormHint };

const FormLabel =  styled.label`
  display: block;
  margin: 0vmin auto;
  font-size: 2.5vmin;
  font-weight: 700;
`
export { FormLabel };

const FormButton =  styled.button`
  cursor: pointer;
  text-decoration: none;
  margin: 5vmin auto;
  margin-top: ${props => props.marginTop ? props.marginTop : '5vmin'};
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
FormButton.propTypes = {
  marginTop: PropTypes.string
}

export { FormButton };

const FormContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 0vmin auto;
  padding-top: 15vmin;
  width: var(--width);
  height: var(--height);
  text-align: center;
`
export { FormContainer };

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
export { InputBox };

const FormBG = styled.div`
  background-image: url(${props => props.img});
  /* background: red; */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid blue; */
  font-size: 2vmin;
  color: #280408;
  margin: 5vmin auto;
  padding-top: 4vmin;
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
export { FormBG };

const LogoutButton = styled.div`
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid red;
  width: 10vmin;
  height: 10vmin;
  margin-left: 6vmin;
  margin-top: 1.5vmin;
  /* margin-top: ${props => props.marginTop ? props.marginTop : '5vmin'};
  margin-left: 6vmin; */
  background-color: Transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all .2s ease-in-out;



  &:hover{
    transform: scale(1.1);
    background-image: url(${logout_hover});
  }
`


export {LogoutButton};