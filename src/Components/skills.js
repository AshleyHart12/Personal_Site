import React from "react";
import styled from 'styled-components';
import pic from './images/pic2.jpg';

const Container = styled.div`
min-height: 40rem;
text-align: center;
width: 100%;
position: relative;
z-index: 1;
// background-color: #F8F8FF;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 85%);


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

const ImageWrapper = styled.div`
  background-image: url(${pic});  
  background-size: contain;
  opacity: .4;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
`

const Box = styled.div`
  height: 20rem;
  min-width: 16rem;
  border: 4px inset #F8F8FF;
  display: inline-block;
  margin: 2rem;
  background-color: white;
  opacity: .6;

  :hover {
    transform: scale(1.1);
  }
`

export default function Skills(props) {
  return( 
    <Container>
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
      <ImageWrapper id="ImageWrapper">
      </ImageWrapper>
    </Container>
  )
}