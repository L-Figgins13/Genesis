import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';


function Message(props) {

    return (
        <div>
            
                {props.username + ":"}
            
                {" " + props.message}
        </div>
    )
    
}

export default Message;