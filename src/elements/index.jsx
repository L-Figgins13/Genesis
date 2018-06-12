import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  color: red;
`
export { H1 };

const H2 = styled.h2`
  color: blue;
`
export { H2 };

const Button = styled.button`
  background: linear-gradient(to bottom, #8f34d9, #44009e);
  color: #fff;
  border: solid #3500a6 2px;
  text-decoration: none;
  width: 100%;
  padding: .5rem;
  font-size: 1.25rem;
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

  @media (min-width: 375px) {
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
  }
`
export { Label };

const Input = styled.input`
  width: 100%;
  height: 4vh;
  background-color: wheat;
  color: #382f24;
  font-weight: bold;
  font-size: 1.5rem;
  border: 2px solid #382f24;
  -webkit-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  -moz-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
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