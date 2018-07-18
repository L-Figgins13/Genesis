import React from 'react';
import styled from 'styled-components';
import ChatMessages from './ChatMessages.jsx';
import ChatInput from './ChatInput.jsx';



const ChatContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: grey;
    width: 80vw;
    max-height: 500px;
    padding-top: 3vmin;
    padding-bottom: 3vmin; 
   
`

 const Chat = function(props) {
    return (
     <ChatContainer>
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
     </ChatContainer>          
    )
}

export default Chat;