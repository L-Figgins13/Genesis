import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../client/auth.js';
import 'whatwg-fetch';
import io from "socket.io-client";

//components
import Chat from '../component/Chat.jsx';
import GameLobby from '../component/GameLobby.jsx';





export default class Game extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
            gameID:null,
            gameName: '',
            playerTurn: null,
            gameCards:[],
            players:[],
            chat:{
                username: localStorage.getItem('username'),
                messageInput: '',
                messages:[],
                chatID: null
            }
        }

        //bind methods

        this.handleInputChange = this.handleInputChange.bind(this);


        //create sockets
        this.gameIO = io('localhost:3000');
        this.chatIO = io('localhost:3000/chat')

        this.gameIO.on('USER_JOINED', data => {
            this.loadData()
            .then(gameID => {
                console.log(' a Player has joined the game');
            })
            .catch(error => {
                console.log('Error During USER_JOINED socket event:', error);
            })
        })

        this.gameIO.on('USER_LEFT', data => {
            this.loadData()
            .then(gameID => {
                console.log(' a Player: ' + data.username + ' has left the game');
            })
            .catch(error => {
                console.log('Error in USER_LEFT socket event');
            })
        })

        this.chatIO.on('RECIEVE_MESSAGE', data => {
            console.log('RECIEVE MESSAGE EVENT: ', data);
            console.log(data);

            const chat = {...this.state.chat};

            chat.messages.push(data);

            this.setState({chat});

            console .log('logging temp chat object before  setting state');
        

            this.setState({chat}); 
        })

       

         this.sendMessage = event => {
            console.log('attempting to send message');
            event.preventDefault();
            this.chatIO.emit('SEND_MESSAGE', {
                username: this.state.chat.username,
                message: this.state.chat.messageInput,
                chat_id: this.state.gameID

            });

            let chat = {...this.state.chat};
            chat.messageInput = '';
            this.setState({chat});
            }

            this.sendMessage = this.sendMessage.bind(this);    
    }

    componentDidMount () {
        this.loadData()
        .then(gameID => {
            const data = {game_id: this.state.gameID};
            this.gameIO.emit('JOIN', data);
            this.chatIO.emit('JOIN', data);
        })
    }

    loadData() {
        let promise = new Promise( (resolve,reject)=> {
            fetch(`/api/games/${this.props.match.params.id}`, {
                headers:{
                    'Authorization': `bearer ${Auth.getToken()}`
                }
        })
        .then(response=> {
            if(response.ok){
                response.json().then(game => {
                    this.setState({
                        players: game.players, 
                        gameID: game._id,
                        gameName: game.title
                    });
                    resolve(game._id);
                })
            }
        })
    });

    return promise
    }

    //rember to check here if there is an error
    handleInputChange(event) {
        let chat = {...this.state.chat};
        chat.messageInput = event.target.value;
        this.setState({chat});
    }

    render() {
        return(
            <div>
                <h1>{this.state.gameName}</h1>
                <h2>ID: {this.state.gameID} </h2>
                <GameLobby players={this.state.players} />
                <Chat handleInputChange={this.handleInputChange} sendMessage={this.sendMessage}  
                      messages={this.state.chat.messages} 
                      username={this.state.chat.username} value={this.state.chat.messageInput} />          
            </div>
        )
    }
}