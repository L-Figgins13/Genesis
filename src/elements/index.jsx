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

const LI = styled.li`
    padding: 1rem;
`
export { LI };

const Button = styled.button`
  background: #8f34d9;
  background-image: linear-gradient(to bottom, #8f34d9, #44009e);
  box-shadow: 0px 3px 8px #666666;
  color: #ffffff;
  font-size: 1rem;
  padding: 8px 15px 8px 15px;
  border: solid #3500a6 2px;
  text-decoration: none;
`
export { Button };

const Input = styled.input`
  width: 100%;
  width: 20vw;
  height: 3vh;
  background-color: #120600;
  color: #fff;
  border: 2px solid #e9e9e9;
  -webkit-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  -moz-box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
  box-shadow: 0px 9px 5px -1px rgba(0,0,0,0.59);
`;

export {Input}

const StyledLink = styled(Link)`
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    padding: 2rem;
    &:hover{
        color: #ffb700;
    }
`
export { StyledLink };
