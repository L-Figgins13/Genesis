import React from 'react';
import styled from 'styled-components';
import { FormLabel, InputBox } from '../../elements';

const ChatStyledInput = InputBox.extend`
    ::placeholder { opacity: .25; }
    :-ms-input-placeholder { opacity: .25; }
    ::-ms-input-placeholder { opacity: .25; }
    border: 1px solid #17202A;
    width: 100%;
`

const ChatInputContainer = styled.div`
    border: 1px solid black;
    background-color: #17202A;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`

const ChatInput = function(props) {
    return (
    <ChatInputContainer>
     <form onSubmit = {props.sendMessage}>
        <ChatStyledInput 
            placeholder = "Enter Your Message"
            type = "text"
            value = {props.value}
            onChange={props.handleInputChange}
        />
     </form>
     </ChatInputContainer>
    )
}

export default ChatInput;