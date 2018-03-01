import React from 'react';
import io from "socket.io-client";

function Message(props) {

    return (
        <div>
            {props.username}: {props.message}
        </div>
    )
    
}

function ChatMessages(props){
    const messages = props.messages.map(message => <Message username={props.username} message={message.message} />);


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

export default class Chat extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {
            username: 'ZACK',
            messageInput: '',
            messages: [],
        };

        this.socket = io('localhost:3000');
        this.handleInputChange = this.handleInputChange.bind(this);
        

        this.socket.on('RECIEVE_MESSAGE', function(data) {
            // console.log(data);
            // console.log(this.state);
            // // console.log(JSON.parse(JSON.stringify(this.state)));
            // // console.log(...this.state.messages);
            // this.setState({messages: [...this.state.messages, data]});

            addMessage(data);
            
        })

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        }

         this.sendMessage = event => {
            console.log('attempting to send message');
            event.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                username: this.state.username,
                message: this.state.messageInput
            });
            this.setState({messageInput: ''});
            }
    }
   

    handleInputChange(event) {
        this.setState({
            messageInput: event.target.value
        });
    }
    
    render(){
        return (
            <div>
                <ChatMessages messages={this.state.messages} username={this.state.username} />
                <ChatInput username={this.state.username} onChange={this.handleInputChange} sendMessage={this.sendMessage} value={this.state.messageInput} />
            </div>
        )
    }

}