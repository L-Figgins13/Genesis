import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

export default class CreateGame extends React.Component {
    constructor(props){
        super(props);
        //eventually the owner of the game with done automatically by determining whoever
        // the logged in user is. For now. its just going to be a field to test
        // all the databse logic
        this.state = {
            owner: '',
            title:'',
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.owner + ' ' + this.state.title);
        this.createGame();
    }

    createGame() {
        const url = '/api/games/create';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                owner: this.state.owner,
                title: this.state.title
            })
        }).then(res =>  res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('logging response object ' + JSON.stringify(response));
            if(response.msg === 'ok') {
            console.log('Success:', response);
            this.setState({redirect:true});
            }
        });
    }

    render() {
        const redirect = this.state.redirect;
        const url = '/games';

        if(redirect) {
        return ( <Redirect to={url} push /> )
        }

        return (
        <div>
            <h2>CREATE A GAME FUCKTARD </h2>
            <form onSubmit = {this.handleSubmit}>
                <label>Owner:
                    <input name = "owner" type = "text" value = {this.state.owner} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>Title:
                        <input name = "title" type="text" value = {this.state.title} onChange = {this.handleInputChange} onSubmit= {this.handeSubmit} />
                    </label>
                    <input type= "submit"/> 
            </form>
        </div>
        )
    }
}