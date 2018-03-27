
import React from 'react';
import styles from '../css/Stats.css';
import Stats from '../Stats.jsx';
import Auth from '../../client/auth.js';


export default class Profile extends React.Component {

    constructor(props) {
        //init state
        super(props);
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

            fetch(`/api/users/${this.props.match.params.id}`, {
                headers:{
                    'Authorization': `bearer ${Auth.getToken()}`
                }
            })
            .then(response =>{
                response.json()
                .then(user => {

                    console.log('logging user' , JSON.stringify(user));
                    const newState = {
                        user: {
                            username: user.username,
                            stats:{
                                wins: user.stats.wins,
                                losses: user.stats.losses,
                            }
                        }
                    }

                    this.setState(newState);
                })
                .catch(err => {
                    console.log(err);
                })
                
            })
        }


    render(){
        return (
           <div>
               <h1>Title</h1>
               <Stats user={this.state.user} />
           </div>
        
        )
    }
}   