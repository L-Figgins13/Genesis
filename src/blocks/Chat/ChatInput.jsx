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

const ChatInput = function(props) {
    return (
     <form onSubmit = {props.sendMessage}>
        <FormLabel>Message: </FormLabel>
        <ChatStyledInput 
            placeholder = "Enter Your Message"
            type = "text"
            value = {props.value}
            onChange={props.handleInputChange}
        />
     </form>
    )
}

export default ChatInput;