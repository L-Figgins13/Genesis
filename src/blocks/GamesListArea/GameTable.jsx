
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