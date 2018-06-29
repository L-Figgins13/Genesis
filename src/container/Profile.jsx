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
                },
                avatarID: 0,
                currentAvatarUrl: ''
            }
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
            fetch(`/api/users/${this.props.match.params.id}`, {
                headers:{
                    'Authorization': `bearer ${Auth.getToken()}`
                }
            })
            .then(response =>{
                response.json()
                .then(data => {
                    const newState = {
                        user: {
                            username: data.user.username,
                            stats:{
                                wins: data.user.stats.wins,
                                losses: data.user.stats.losses,
                            },
                            avatarID: data.user.avatarID,
                            currentAvatarUrl: data.avatarUrl
                        }
                    }
                    console.log(newState);
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
        // localStorage.clear();
        // this.props.history.push('/');
        console.log(' la click');
    }

    render(){
        return (
           <div>
               <Stats 
                    user={this.state.user}
                    handleLogout = {this.handleLogout}
                    avatarUrl = {this.state.currentAvatarUrl} 
               />
           </div>
        )
    }
}   