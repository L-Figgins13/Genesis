import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';


function Message(props) {

    return (
        <div>
            <div>
                <div>
                    {props.username + ":"}
                </div>
                <div>
                    {" " + props.message}
                </div>
            </div>
        </div>
    )
    
}

function ChatMessages(props){
    const messages = props.messages.map((message, index) => 
        <Message 
            key={index} 
            username={message.username} 
            message={message.message} 
        />
    );

    return(
        <div>
            {messages}
        </div>
    )
}

function ChatInput(props) {
    const username = props.username;
    
    return (
        <div>
            <form onSubmit ={props.sendMessage}>
                <label >Input Message: </label>
                <input type="text" onChange={props.onChange} value={props.value} />
            </form>
        </div>
    )
}

const Chat = function Chat(props) {
    return (
        <div>
            <div>    
                <div>
                    <ChatMessages   messages = {props.messages} username={props.username} />
                </div>

                <div>
                    <ChatInput username= {props.username} onChange={props.handleInputChange} sendMessage={props.sendMessage} value={props.value} />
                </div>
            </div>
        </div>
    )
}

export default Chat