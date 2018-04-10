import React from 'react';
import Auth from '../client/auth.js'
import {Link} from 'react-router-dom';
import home from './css/home.css';
import main from './css/main.css';
import {Container, Row, Col} from 'react-grid-system';

export default class HelloWorld extends React.Component {

    componentDidMount() {
        this.props.toggleAuthenticateStatus();
    }


    //todo remove the ternary operator stuff because it doesn't make sense at all
    render(){
        return (
            <div>
                <Container fluid className = {main.container}>
                    <Row className={main.row}>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                        <div className={home.loginBox}>
                            <ul>
                                <li><Link to ='/login'>Login</Link></li>
                                <li><Link to ='/signup'>Signup</Link></li>
                            </ul>
                        </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>

                    <Row className={main.row}>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <div className={home.prompt}>
                                {Auth.isUserAuthenticated() ? (<li><Link to ='/games'>Games Page Quicklink</Link></li>):(<li>YOU NEED TO LOGIN FIRST!</li>)}
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}