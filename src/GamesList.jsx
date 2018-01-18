import React from 'react';
import 'whatwg-fetch';

const GameRow = (props) => {
    <tr>
        <td> {props.game._id}   </td>
        <td> {props.game.owner} </td>
        <td> {props.game.title} </td>
    </tr>
};

GameRow.propTypes = {
    game: React.propTypes.object.isRequired,
};

function GameTable (props) {
    const gameRows = props.games.map(game => <GameRow key = {game._id} game = {game} />);
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
    games: React.propTypes.array.isRequired,
}

export default class GamesList extends React.Component {
    constructor() {
        super();
        this.state = {games:[]};
    }

    componentDidMount(){
        this.loadData();
    }

    loadData() {
        fetch('/api/games')
        .then(response => {
            if(response.ok){
                response.json()
                .then(data => {
                    this.setState({games: data.records});
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
        return(
            <div>
                <h1>Games List</h1>
                <GamesTable games={this.state.games} />
            </div>
        )
    }
}