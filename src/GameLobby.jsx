import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../client/auth.js';
import 'whatwg-fetch';
import Chat from './Chat.jsx';
import io from "socket.io-client";


function PlayerArea (props) {
    const players = props.players; // place holder
    
    const playerRows = players.map(player => <Player key={player._id} player = {player}/>)

    return(
        <div>
           {playerRows}     
        </div>
    )
}

function Player (props) {
    return (
        <div>
            <div>-----------------------------------------</div>
            <div>{props.player.user_id}</div>
            <div>{props.player.username}</div>
            <div>-----------------------------------------</div>

        </div>
    )
}

export default class GameLobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {players:[], gameID:null};

        this.socket = io('localhost:3000');

       //

        //socket is expecting a player object to update the state
        this.socket.on('PLAYER_JOINED', data => {
            console.log('Player: ' + data.username + ' has joined the game');
            this.setState({players: [...this.state.players, data]});
            console.log(this.state.players);
        })

        this.socket.on('USER_JOINED', data =>{
            this.loadData();
        })


        //you are not suppose to change the array directly in react
        // so this essentially makes a copy of the array missing one element
        this.socket.on('PLAYER_LEFT', data => {
            console.log('Player: ' + data.username + ' has left the game');
            this.setState(prevState => ({ players: prevState.players.filter(player => {
                player.user_id !== data.user_id;
            })}))
            console.log(this.state.players);
        })
        
    }

    componentDidMount () {
        this.loadData();
        const data = {game_id: this.state.gameID};
        this.socket.emit('JOIN', data);
    }

    loadData() {
        fetch(`/api/games/${this.props.match.params.id}`,{
            headers:{
                'Authorization': `bearer ${Auth.getToken()}`
            }
    })
        .then(response =>{
            if(response.ok){
                response.json().then(game => {
                    this.setState({players: game.players, gameID: game._id});
                })
            }
        })
    }

    render(){
        return(
            <div>
                <h2>DA GAMEEEEE></h2>
                <PlayerArea players = {this.state.players} />
                <Chat />
            </div>
        )
    }
}