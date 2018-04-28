import React from 'react';
import Auth from '../client/auth.js'
import {Link} from 'react-router-dom';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import img from './../static/img/BG.png';


const ImageTest = styled.div`
    color: blue;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

export default class HelloWorld extends React.Component {

    componentDidMount() {
        this.props.toggleAuthenticateStatus();
    }


    //todo remove the ternary operator stuff because it doesn't make sense at all
    render(){
        return (
            <div>
                <div>
                    <ul>
                        <ImageTest>
                            <Link to ='/login'>Login</Link>
                            <Link to ='/signup'>Signup</Link>
                        </ImageTest>
                    </ul>
                </div>

                <div>
                    {Auth.isUserAuthenticated() ? (<li><Link to ='/games'>Games Page Quicklink</Link></li>):(<li>YOU NEED TO LOGIN FIRST!</li>)}
                </div>
            </div>
        );
    }
}