import ChatMessages from './ChatMessages.jsx';

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