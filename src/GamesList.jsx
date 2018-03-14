import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../client/auth.js';
import 'isomorphic-fetch';
import {Route, Switch,Redirect, BrowserRouter, Link} from 'react-router-dom';


const GameRow = (props) => (
    <tr>
        <td> {props.game._id}   </td>
        <td> {props.game.owner} </td>
        <td> {props.game.title} </td>
        <td><button id={props.game._id} onClick={props.joinGame}>Join</button></td>
    </tr>
);

GameRow.propTypes = {
    game: PropTypes.object.isRequired,
};

function GameTable (props) {
    const gameRows = props.games.map(game => <GameRow key = {game._id} game = {game} joinGame={props.joinGame}/>);
    return(
        <table className= "bordered-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Owner</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>{gameRows}</tbody>
        </table>
    )
}

GameTable.propTypes = {
    games: PropTypes.array.isRequired,
}

export default class GamesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {games:[],join:-1}; 
        this.joinGame = this.joinGame.bind(this);
    }

    componentDidMount(){
        this.loadData();
    }

    


    joinGame(event) {
        const target = event.target;
        console.log(target.id);

        fetch('/api/games/join',{
            method: 'POST',
            headers: {
                'Authorization' : `bearer ${Auth.getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                game_id: target.id
            })
        })
        .then(response => {
            response.json()
            .then(game => {
             
                this.setState({join:target.id});
            })
        })

        
    }

    loadData() {
        fetch('/api/games', {
            headers:{
                'Authorization': `bearer ${Auth.getToken()}`
            }
    })
    .then(response => {
        if(response.ok){
            console.log(response);
            response.json()
            .then(data => { 
                console.log('logging data',data);
                this.setState({games: data});
                
            });
        } else {
            response.json()
            .then(error => {
                alert(`Failed to Fetch Games ${error.message}`)
            });
        }
        }).catch(err => {
            alert(`Error fetching data from server: ${err}`)
        });
    }

    

    render() {
        
        if(this.state.join != -1){
            const url = 'games/' + this.state.join;
            return(
                <Redirect to={url} push />
            )
        }
        
        return(
            <div>
                <h1>Games List</h1>
                <GameTable games={this.state.games} joinGame={this.joinGame} />
                <li><Link to= '/games/create'>Create Game </Link></li>
            </div>
        );
    }
    
}

