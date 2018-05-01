import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import {H1, H2} from '../../elements';

import backgroundImg from '../../../static/img/backgrounds/bg1.jpg';
import plateImg from '../../../static/img/login/login-plate.png';



const Label = styled.label`
    color: blue;
    display: block;
`;
const Input = styled.input`
    color: purple;
    background: papayawhip;
`;

const Button = styled.button`
    color:gold;
`

const Bar = styled.div`
    border: 1px solid purple;
`

const Background = styled(Box)`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding:0;
`

const LoginPlate = styled(Box)`
   
   
    border : 2px solid white;
    height: 600px;
    width: 100vw;
    background-image: url(${plateImg});
    background-repeat: no-repeat;
    background-position: center center;
    `

// const SignupForm = function(props) {
//     return (
//         <div>
//             <H1>Elements index.jsx file is behaving as intented</H1>
//             <H2>Still working</H2>
//             <form onSubmit= {props.handleSubmit}>
//                 <label>
//                     Username:
//                     <input name = "username" type = "text" value = {props.username} onChange= {props.handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     password:
//                     <input name="password" type="password" value={props.password} onChange= {props.handleInputChange} />
//                 </label>
//                 <input type="submit" value="Create User"/>
//             </form>
//         </div>
//     );
// }

const SignupForm = (props) => {
    return (
        <Flex>
            <Background>
                <Flex justifyContent = 'center'>
                <form onSubmit= {props.handleSubmit}>
                 <label>
                     Username:
                     <input name = "username" type = "text" value = {props.username} onChange= {props.handleInputChange} />
                 </label>
                 <br />
                <label>
                     password:
                     <input name="password" type="password" value={props.password} onChange= {props.handleInputChange} />
                 </label>
                 <input type="submit" value="Create User"/>
             </form>
                </Flex>
                
            </Background>
        </Flex>
    )
}

SignupForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default SignupForm;