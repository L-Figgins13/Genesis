import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../client/auth.js';
import 'whatwg-fetch';
import io from "socket.io-client";

//Styles
import {Container, Row, Col} from 'react-grid-system';

//components
import Chat from '../blocks/Chat';
import GameLobby from '../blocks/GameLobby';
import {Button} from '../elements';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
            gameID:null,
            gameName: '',
            playerTurn: null,
            gameCards:[],
            players:[],
            hasStarted: false,
            chat:{
                username: localStorage.getItem('username'),
                messageInput: '',
                messages:[],
                chatID: null
            }
        }

        //bind methods

        this.handleInputChange = this.handleInputChange.bind(this);
        this.startGame = this.startGame.bind(this);
        


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
            const chat = this.state.chat;
            chat.messages.push(data);
            this.setState({chat});
        })

       
        //now it updates the state itself so for a cleaner user experience
        //and only sends messages to the other sockets so the user typing the message
        // does not experience latency
         this.sendMessage = event => {
            event.preventDefault();
            this.chatIO.emit('SEND_MESSAGE', {
                username: this.state.chat.username,
                message: this.state.chat.messageInput,
                chat_id: this.state.gameID

            });

            const chat = this.state.chat
            const msg = {
                username:this.state.chat.username,
                message:this.state.chat.messageInput,
                chat_id: this.state.gameID
                };

            chat.messages.push(msg);
            chat.messageInput = '';
            this.setState({chat:chat});
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
        let promise = new Promise((resolve,reject)=> {
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
        console.log(chat);
        console.log(event.target.value);
        chat.messageInput = event.target.value;
        console.log(chat.messageInput);
        this.setState({chat:chat});
    }

    startGame(event) {
        console.log('attempting to start');

        fetch(`/api/games/start`, {
            method: `POST`,
            headers: {
                'Authorization' : `bearer ${Auth.getToken()}`,
                'Content-Type': `application/json`
            },
            body: JSON.stringify({
                gameID: this.state.gameID,
            })
        })
        .then( res => res.json())
            .then(updatedGame => {
                console.log(updatedGame);
            })
        .catch(err => {
            console.log(err);
        })    
    }

    render() {
        return(
            <div>
                <h1>{this.state.gameName}</h1>
                <h2>ID: {this.state.gameID} </h2>
                    
                <GameLobby players={this.state.players} />

                <Button onClick={this.startGame}>Start</Button>

                <Chat 
                    handleInputChange={this.handleInputChange} 
                    sendMessage={this.sendMessage}  
                    messages={this.state.chat.messages} 
                    username={this.state.chat.username} 
                    value={this.state.chat.messageInput} 
                />
                              
            </div>
        )
    }
}