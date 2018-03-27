import Stats from '../component/Stats.jsx';




export default class Profile extends React.Component {

    constructor(props) {
        //init state
        this.state = {
            user: {
                username: '',
                stats:{
                    wins: null,
                    losses: null,
                }
            }
        }
    }


    componentDidMount() {
       // 1 .fetch /api/user/:id

        //expects a user object {} user.username expect user.imageurl user.stats.wins

        //2. "THEN PART"  .then(user=> { do stuff here })

        //3. setState({username:})
        }


    render(){
        return (
           <div>
               <h1>Title</h1>
               <PlayerArea  />
               <Stats user={this.state.user} />


           </div>
        
        )
    }
}   