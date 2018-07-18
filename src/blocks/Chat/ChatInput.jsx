import React from 'react';
import styled from 'styled-components';
import { InputBox } from '../../elements';

const ChatStyledInput = InputBox.extend`
    padding: 2vmin;
    margin-top: 3vmin;
    margin-bottom: 3vmin;
    width: 100%;
`

const ChatInput = function(props) {
    return (
     <form onSubmit = {props.sendMessage}>
        <ChatStyledInput 
            style={{zIndex:1}}
            type = "text"
            value = {props.value}
            onChange={props.handleInputChange}
        />
     </form>
    )
}

export default ChatInput;