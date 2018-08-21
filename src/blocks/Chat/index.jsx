import React from 'react';
import styled from 'styled-components';
import ChatMessages from './ChatMessages.jsx';
import ChatInput from './ChatInput.jsx';

const ChatWrapper =  styled.div`
  width: 100%;
  height: 80vh;
`

const Chat = function(props) {
  return (
    <ChatWrapper>
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
    </ChatWrapper>  
  )
}

export default Chat;