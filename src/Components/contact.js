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


export default function Contact() {
  return (
    <Container>
      <h1>This is how to contact me</h1>
      <p>Contacts galore</p>
    </Container>
  )
}