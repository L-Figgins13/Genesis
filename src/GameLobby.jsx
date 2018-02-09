import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';


function PlayerArea (props) {
    const props = props; // place holder
    
    return(
        <div>
            <img> 
            </img> 
        </div>
    )
}







export default class GameLobby extends React.Component {
    constructor() {
        super();
        this.state = {players:[], flags: [] };
    }

    componentDidMount () {
        this.loadData();
    }

    loadData() {
        fetch(`/api/games/${this.props.params.id}`)
        .then(response =>{
            if(response.ok){
                response.json().then(game => {
                    game
                })
            }
        })
    }
}