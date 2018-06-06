import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../client/auth.js';
import 'isomorphic-fetch';
import {Route, Switch, Redirect, BrowserRouter, Link} from 'react-router-dom';

import GameFinder from '../blocks/GameFinder';

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
            .then(result => {
                if(result.errCode === 0) {
                    console.log(result.message);
                    this.setState({join:target.id});
                } else if (result.errCode === 1 || result.errCode === 2) {
                    console.error(result.message);
                    alert(result.message);
                } else if (result.errcode === 3) {
                    console.error(result.message);
                    this.setState({join:target.id});
                }
            })     
        })
        .catch(error => {
            console.log(error);
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
                // console.log('logging data',data);
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
            const url = '/games/' + this.state.join;
            return(
                <Redirect to={url} push />
            )
        }
        
        return(
            <GameFinder 
                games={this.state.games} 
                joinGame={this.joinGame} 
            />
        );
    }
    
}

