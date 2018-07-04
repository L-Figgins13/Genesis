import React from 'react';
import Stats from '../blocks/Stats';
import Auth from '../../client/auth.js';

const PATHS = []


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
            },
            avatarPaths: []
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.selectAvatar = this.selectAvatar.bind(this);
    }

    selectAvatar(event) {
        let id = parseInt(event.target.id);

        if( id === 1) {
            console.log(`hello`);
            let avatarID = ((this.state.user.avatarID + 1) % (this.state.avatarPaths.length + 1) === 0) 
                ? 1 : (this.state.user.avatarID + 1) % (this.state.avatarPaths.length + 1) ;
            let currentAvatarUrl = this.state.avatarPaths[avatarID - 1];
            
            console.log(avatarID);
            let user = this.state.user;
            user.avatarID = avatarID;

            console.log('User.avatarID', user.avatarID)
            user.currentAvatarUrl =  currentAvatarUrl;

            let newState = this.state;
            newState.user = user;

            this.setState(newState);        
        } else {
            let avatarID = ((this.state.user.avatarID - 1) % (this.state.avatarPaths.length + 1) === 0) 
                ? 4 : (this.state.user.avatarID - 1 ) % (this.state.avatarPaths.length + 1) ;
            let currentAvatarUrl = this.state.avatarPaths[avatarID - 1];
            
            console.log(avatarID);
            let user = this.state.user;
            user.avatarID = avatarID;
            user.currentAvatarUrl =  currentAvatarUrl;

            let newState = this.state;

            newState.user = user;

            this.setState(newState);
        }
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
                    let currentAvatarUrl = data.paths[data.user.avatarID - 1];

                    const newState = {
                        user: {
                            username: data.user.username,
                            stats:{
                                wins: data.user.stats.wins,
                                losses: data.user.stats.losses,
                            },
                            avatarID: data.user.avatarID,
                            currentAvatarUrl: currentAvatarUrl
                        },
                        avatarPaths: data.paths
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
        
        componentDidUpdate(prevProps, prevState) {
            if(this.state.user.AvatarID !== prevState.user.avatarID) {
                console.log('hello from inside component did Update');
                console.log('PrevState', prevState.user.avatarID);
                console.log('This.state', this.state.user.avatarID);
                fetch('/api/users/saveAvatarSelection', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${Auth.getToken()}`
                    },
                    body: JSON.stringify({
                        avatarID: this.state.user.avatarID,
                    })
                }).then(response => {
                    response.json()
                    .then(data => {
                        console.log(data.msg);
        
                    })
                }).catch(error => console.log(error))
            }
        }





    // componentWillUnmount() {

    //     fetch('/api/users/saveAvatarSelection', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `bearer ${Auth.getToken()}`
    //         },
    //         body: JSON.stringify({
    //             avatarID: this.state.avatarID,

    //         })
    //     }).then(response => {
    //         response.JSON()
    //         .then(data => {
    //             console.log(data.msg);

    //         })
    //     }).catch(error => console.log(error.msg))

    
    // }


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
                    selectAvatar = {this.selectAvatar} 
               />
           </div>
        )
    }
}   