import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../client/auth.js';
import 'whatwg-fetch';
import Chat from './Chat.jsx';


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
            <div>{props.player.user_id}</div>
            <div>{props.player.username}</div>
        </div>
    )
}

export default class GameLobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {players:[], gameID:null};
        
    }

    componentDidMount () {
        this.loadData();
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