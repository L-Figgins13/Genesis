import React from 'react';
import Stats from '../blocks/Stats';
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

        this.handleLogout = this.handleLogout.bind(this);
    }

    

    componentDidMount() {
            console.log('-----------loggings match params-----------');
            console.log(this.props.match.params.id);
            console.log('-------------------------------------------');

            fetch(`/api/users/${this.props.match.params.id}`, {
                headers:{
                    'Authorization': `bearer ${Auth.getToken()}`
                }
            })
            .then(response =>{
                console.log(response);
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
                
            }).catch(err => {
                console.log(err);
            })
        }

    handleLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render(){
        return (
           <div>
               <Stats 
                    user={this.state.user}
                    handleLogout = {this.handleLogout} 
               />
           </div>
        )
    }
}   