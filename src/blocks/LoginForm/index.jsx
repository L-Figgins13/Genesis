import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Wrapper, Container, Label, Button, Input, H1, BG_Image, StyledLink } from '../../elements';

import img from '../../../static/img/login/MapNoBorders.jpg';
import plate from '../../../static/img/login/Wood_BG_Plate.png';
import plate_sm from '../../../static/img/login/Wood_BG_Plate_SM.png';
import input from '../../../static/img/login/Plank_Input.png';

// const FormHint =  styled.div`
//   color:#fff;
//   background-color: #B22222;
//   margin-top: .5rem;
//   padding: 1rem;
// `

const Image = styled.div`
  background-image: url(${input});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 95vw;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginWrapper = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; /* height of image */
  background-image: url(${props => props.plate});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: 375px) {
      background-image: url(${plate_sm});
      background-position: 50% 50%;
  }
`
const LoginContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 30vw;
  height: 60vh;

  h1{
    position: relative;
    top:0%;
    left: 0%;
  }

  @media only screen and (max-width: 1400px) {
    width: 40vw;
  }
  @media only screen and (max-width: 1200px) {
    height: 45vw;
  }
  @media only screen and (max-width: 375px) {
    width: 70vw;
    height: 35vh; 
  }
`

const LoginForm = function (props) {
  return (
    // <BG_Image img={img}>
    //   <FormWrapper plate={plate}>
    //     <Container>
    //       <form onSubmit= {props.handleSubmit}>
    //         <Flex flexDirection='column'>
    //           <Label fontSize={'2rem'} textAlign={'center'}>Login</Label>
    //           <Box width={1} px={2} py={2}>
    //             <Box py={2}><Label>Username</Label></Box>
    //             <Input
    //                 name = "username" 
    //                 type = "text" 
    //                 value = {props.username} 
    //                 onChange = {props.handleInputChange}
    //             />

    //             {props.showIncorrectUsernameOrPasswordHint && 
    //               <FormHint>Incorrect Username or Password</FormHint>
    //             } 
    //           </Box>

    //           <Box width={1} px={2} py={2}>
    //             <Box py={2}><Label>Password</Label></Box>
    //             <Input 
    //                 name = "password" 
    //                 type = "password" 
    //                 value = {props.password} 
    //                 onChange = {props.handleInputChange}
    //             />
    //           </Box>
              
    //           <Box width={1} px={2} py={4}>
    //             <Button type = "submit">Submit</Button>
    //           </Box>

    //           <Label fontSize={'.75rem'} textAlign={'center'}>
    //             Not Registered? 
    //             <StyledLink to ='/signup'>Create An Account.</StyledLink>
    //           </Label>

    //           </Flex>
    //         </form>
    //     </Container>
    //   </FormWrapper>
    // </BG_Image>


    
    <BG_Image img={img}>
      <LoginWrapper plate={plate}>
      <Image><h1>HI MOM</h1></Image>
        <LoginContainer>
          <h1>Container Here</h1>
        
        </LoginContainer>
      </LoginWrapper>
    </BG_Image>
  )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;