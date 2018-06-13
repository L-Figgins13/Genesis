import ChatMessages from './ChatMessages.jsx';

const Chat = function Chat(props) {
    return (
        <div>
            <ChatMessages 
                messages = {props.messages} 
                username={props.username} 
            />
            <ChatInput 
                username= {props.username} 
                onChange={props.handleInputChange} 
                sendMessage={props.sendMessage} 
                value={props.value} 
            />
        </div>
    )
}