import React from 'react';
import styled from 'styled-components';
import ChatMessages from './ChatMessages.jsx';
import ChatInput from './ChatInput.jsx'; 


 const Chat = function(props) {
    return (
        <div>
            <ChatMessages   
                messages = {props.messages}
                username={props.username} 
            />
                
            <ChatInput
                username= {props.username} 
                handleInputChange={props.handleInputChange} 
                sendMessage={props.sendMessage} 
                value={props.value} 
                />
        </div>
    )
}

export default Chat;