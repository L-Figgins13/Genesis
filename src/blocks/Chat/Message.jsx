import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import {Container, Row, Col}  from 'react-grid-system';

const User = styled.div`
    font-weight: bold;
    font-size: 2vmin;
    background: red;
    display: flex;
    padding: 1vmin;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const UserMessage = styled.div`
    font-size: 1.75vmin;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1.5vmin;
    background: orange;
`

const UserInput = styled.div`
    background: yellow;
    width: 100vmin;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .5vmin;
`

const Bleh = styled.div`
    overflow-y: auto;
`

function Message(props) {
    return (
        <Row>
            <Col xs= {12}>
            
                <UserInput>
                    <User>
                        {props.username + ": "}
                    </User>
                    <UserMessage>
                        {props.message}
                    </UserMessage>
                </UserInput>
            
             </Col>
         </Row>
    )
}

export default Message;