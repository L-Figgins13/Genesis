import React from 'react';


function Message(props) {

    return (
        <div>
            {props.username}: {props.message}
        </div>
    )
    
}

function ChatMessages(props){
    const messages = props.messages.map(message => <Message username={message.username} message={message.message} />);


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
                <label>Ftw</label>
                <input type="text" onChange={props.onChange} value={props.value} />
            </form>
        </div>
    )
}

const Chat = function Chat(props) {

    console.log(JSON.stringify(props));

    return (
        <div>
            <ChatMessages messages = {props.messages} username={props.username} />
            <ChatInput username= {props.username} onChange={props.handleInputChange} sendMessage={props.sendMessage} value={props.value} />
        </div>
    )
}

export default Chat