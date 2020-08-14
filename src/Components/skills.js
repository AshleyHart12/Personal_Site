import React from "react";
import styled from 'styled-components';

const Container = styled.div`
min-height: 20rem;
text-align: center;
padding: 1rem;
background-color: #F8F8FF;

h1:hover{
  transform: scale(1.1);
  text-shadow: 2px 2px mediumpurple;
}
`

const Box = styled.div`
  height: 20rem;
  min-width: 16rem;
  border: 1px solid black;
  display: inline-block;
  margin: 2rem;

  :hover {
    transform: scale(1.1);
  }
`

export default function Skills(props) {
  return( 
    <Container id="skills">
      <h1>
        {props.skillsHeader}
      </h1>
      <Box>
        <h3>Languages</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>Python</p>
      </Box>
      <Box>
        <h3>Frameworks</h3>
        <p>Bootstrap</p>
        <p>Express</p>
        <p>jQuery</p>
      </Box>
      <Box>
        <h3>Tools</h3>
        <p>Git</p>
        <p>npm</p>
      </Box>
    </Container>
  )
}