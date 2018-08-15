import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import {Container, Row, Col}  from 'react-grid-system';

const User = styled.div`
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
    border: 1px solid #17202A;
`

const UserInput = styled.div`
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
const MessageBlock = styled.div`
    width: 100%;
    overflow-wrap: break-word;
`

function Message(props) {
    return (
        <MessageBlock>
            <UserInput>
                <User>
                    {props.username + ": "}
                </User>
                <UserMessage>
                    {props.message}
                </UserMessage>
            </UserInput>
        </MessageBlock>  
    )
}

export default Message;