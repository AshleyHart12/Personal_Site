import React from "react";
import styled from 'styled-components';

const Container = styled.div`
min-height: 20rem;
text-align: center;
padding: 1rem;


h1{
  font-family: 'Rubik Mono One', sans-serif;
    font-size: 3rem;
    letter-spacing: 7px;
    background: linear-gradient(to right, #FFD3A5  13%, #FD6585 82%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h1:hover{
  transform: scale(1.1);
}
`

const Box = styled.div`
  height: 15rem;
  width: 16rem;
  border: 4px inset #F8F8FF;
  display: inline-block;
  margin: .5rem;
  box-shadow: inset 0 0 0 0 #933469;
	-webkit-transition: all ease 1.5s;
	-moz-transition: all ease 1.5s;
	transition: all ease 1.5s;

  :hover {
    box-shadow: inset 500px 0 0 0 #e4ced1;
    color: #black;
    
  }
`

export default function Projects(props) {
  return( 
    <Container id="skills">
      <h1>
        These are my projects
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