import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { Button, Input, Label, Wrapper, Container, StyledLink, BG_Image } from '../../elements/';


import img from '../../../static/img/backgrounds/Map_Borders.jpg';
import plate from '../../../static/img/backgrounds/plate.png';


const CreateGameForm = function (props) {
    return (    
    <BG_Image img={img}>
    <Wrapper plate={plate}>
      <Container>
          <Box width={1} px={2} py={2}>
            <Flex flexDirection='column' justifyContent= 'center' alignItems= 'center'>
              
              <Box px={4} py={4}>
                <Label textAlign={'center'} fontSize={'2rem'}>Create A Game</Label>
              </Box>
              
              <Box>
                <Label textAlign={'center'} fontSize={'2rem'}>Game Title</Label>
              </Box>
              
              <Box px={4} py={4}>
              <form onSubmit = {props.handleSubmit}>
                  <Input
                    name = "title" 
                    type = "text" 
                    value = {props.title} 
                    onChange = {props.handleInputChange}
                  />
                  
                  <Box px={2} py={4}>
                    <Button type = "submit">Submit</Button>
                  </Box>
              </form>
              </Box>
            </Flex>

          </Box>
      </Container>
    </Wrapper>
    </BG_Image>
    )
}

CreateGameForm.propTypes = {
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default CreateGameForm;