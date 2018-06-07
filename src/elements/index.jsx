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
  background: #8f34d9;
  background-image: linear-gradient(to bottom, #8f34d9, #44009e);
  color: #ffffff;
  border: solid #3500a6 2px;
  text-decoration: none;
  width: 100%;
  height: 4vh;
`
export { Button };

const Label = styled.label`
  font-size: 1.5rem;
  color: #fff;
  /* Small Screens */
  @media only screen and (max-width : 320px) {
    text-align: center;
  }

`;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80vh;
  background-image: url(${props => props.plate});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: 1px solid red;
`
export { Container };

const Wrapper = styled.div`

`
