import React from 'react';
import chat from '../css/Chat.css';
import chatMessages from '../css/ChatMessages.css';
import {Container, Row, Col} from 'react-grid-system';


function Message(props) {

    return (
        <div>
            <div className={chatMessages.messages}>
                <div className={chatMessages.username}>
                    {props.username + ":"}
                </div>
                <div className={chatMessages.usermessage}>
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
            <div className={chat.container}>
                <ChatMessages messages = {props.messages} username={props.username} />
                <ChatInput username= {props.username} onChange={props.handleInputChange} sendMessage={props.sendMessage} value={props.value} />
            </div>
        </div>
    )
}

export default Chat