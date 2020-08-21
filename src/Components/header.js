import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 650px;
  padding: 1rem;
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`

const HeaderInline = styled.div`
    h3{
      display: inline;
      margin: 1rem;
      color: purple;
      font-family: 'Comfortaa', cursive;
    }

    a{
      text-decoration: none;
    }
  
  #aboutp:hover{
    color: red;
  }

  #skillsp:hover{
    color: yellow;
  }

  #projectsp:hover{
    color: orange;
  }

  #contactp:hover{
    color: blue;
  }


`



export default function Header() {
  return (
    <>
    <HeaderContainer>
        <HeaderInline>
        <a href="/#about"><h3 id="aboutp">About</h3></a>
        <a href="/#skills"><h3 id="skillsp">Skills</h3></a>
        <a href='/#projects'><h3 id="projectsp">Projects</h3></a>
        <a href='/#contact'><h3 id="contactp">Contact</h3></a>
        </HeaderInline>
      </HeaderContainer>
    </>
  )
}