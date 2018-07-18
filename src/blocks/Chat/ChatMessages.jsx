import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import {Container, Row, Column } from 'react-grid-system';

import Message from './Message';

const MessageContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;  
    flex-direction: column;
    background: darkgrey;
    overflow-y: scroll;
    width: 100%;
    height: 500px;
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