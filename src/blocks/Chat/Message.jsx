import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import {Container, Row, Col}  from 'react-grid-system';

const UserName = styled.div`
    font-weight: bold;
    font-size: 2vmin;
    background: #17202A;
    color: #fff;
    display: flex;
    padding: 1vmin;
    justify-content: center;
    align-items: center;
    height: 100%;  
    overflow-wrap: break-word;
`

const UserMessage = styled.div`
    font-size: 1.75vmin;
    width: 100%;
    height: 100%;
    overflow-wrap: break-word;
    align-items: center;
    padding: 1.5vmin;
    background: #F2F3F4;
    border: 1px solid black;
`

const MessageWrapper = styled.div`
    background: #B2BABB;
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    padding: .25vmin;
    overflow-wrap: break-word;
`

const Message = (props) => {
    return (
        <MessageWrapper>
            <UserName>
                {props.username + ": "}
            </UserName>
            <UserMessage>
                {props.message}
            </UserMessage>
        </MessageWrapper>      
    )
}

export default Message;