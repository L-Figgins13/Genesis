import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import {Container, Row, Column } from 'react-grid-system';

import Message from './Message';

const MessageContainer = styled.div`
    background: #99A3A4;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 69vh;
    border: 1px solid black;
`

const ChatMessages = (props) => {
    const messages = props.messages.map((message, index) => 
        <Message 
            key={index} 
            username={message.username} 
            message={message.message} 
        />
    );

    return(
        <MessageContainer>      
            {messages}
        </MessageContainer>
    )
}

export default ChatMessages;