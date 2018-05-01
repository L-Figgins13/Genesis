import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';


function Message(props) {

    return (
        <div>
            <div>
                <div>
                    {props.username + ":"}
                </div>
                <div>
                    {" " + props.message}
                </div>
            </div>
        </div>
    )
    
}

export default Message;