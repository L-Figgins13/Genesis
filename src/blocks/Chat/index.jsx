import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import ChatMessages from './ChatMessages.jsx';
import ChatInput from './ChatInput.jsx'; 


const Chat = function Chat(props) {
    return (
    <div>
        <ChatMessages   messages = {props.messages} username={props.username} />
        <ChatInput username= {props.username} onChange={props.handleInputChange} sendMessage={props.sendMessage} value={props.value} />
    </div>
    )
}

export default Chat;