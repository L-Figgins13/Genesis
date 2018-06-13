import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: linear-gradient(to bottom, #8f34d9, #44009e);
  cursor: pointer;
  color: #fff;
  border: solid #3500a6 2px;
  text-decoration: none;
  width: 100%;
  padding: .5rem;
  font-size: 1.25rem;
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
  color: #000;
  font-weight: bold;
  text-decoration: none;
  padding: .5rem;
  &:hover{
      color: #ffb700;
  }
`
export { StyledLink };

const BG_Image = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { BG_Image };

const Container = styled.div`
  color: #000;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60%;
`
export { Container };

const Wrapper = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 800px;
  background-image: url(${props => props.plate});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: 1px solid blue;
`
export { Wrapper };