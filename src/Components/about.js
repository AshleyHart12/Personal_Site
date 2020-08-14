import React from "react";
import styled from 'styled-components';
import backpack from './backpack.jpeg';
import beach from './beach.jpeg';
import oregon from './oregon.jpeg';
import dock from './dock.jpeg';
import moab from './moab.jpeg'

const AboutBackground = styled.div`
  background: rgba(139, 0, 139, .1);
  height: 45rem;
  padding: 1rem;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
  margin: auto;
  text-align: center;

  h1{
    font-family: 'Rubik Mono One', sans-serif;
    letter-spacing: 7px;
    background: linear-gradient(to right, #6600ff 13%, #cc00ff 82%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`


const Cube = styled.div`

@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }

  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
    height: 230px;
    width: 230px;
    right: 15rem;
    margin-top: -15rem;
    transform-style: preserve-3d;
    position: absolute;
    animation: rotate 10s infinite linear;

    >div{
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
    width: 100%;
    border: solid 3px white;
    background-color: rgba(249, 243, 237, 0.7);
    }


  #one{
    transform: translateZ(130px);
    display: flex;
    align-items: center;
    background-image: url(${backpack});
    background-size: cover;
    background-repeat: no-repeat;
  }

  #two{
    transform: translateZ(-100px) rotateY(180deg);
    display: flex;
    align-items: center;
    background-color: blue;
  }

  #three{
    transform: rotateX(-270deg) translateY(-100px);
    transform-origin: top center;
    display: flex;
    align-items: center;
    background-color: green;
    background-image: url(${moab});
    background-size: cover;
    background-repeat: no-repeat;
  }

  #four{
    transform: rotateX(270deg) translateY(100px);
    transform-origin: bottom center;
    display: flex;
    align-items: center;
    background-image: url(${dock});
    background-size: cover;
    background-repeat: no-repeat;
  }

  #five{
    transform: rotateY(270deg) translateX(-100px);
    transform-origin: center left;
    display: flex;
    align-items: center;
    background-image: url(${beach});
    background-size: cover;
    background-repeat: no-repeat;
  }

  #six{
    transform: rotateY(-270deg) translateX(100px);
    transform-origin: top right;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(${oregon});
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const Paragraph = styled.div`
  width: 600px;
  line-height: 2;
  margin-top: 7rem;
`

export default function About() {
  return (
    <AboutBackground id="about">
      <h1>This is about me</h1>
      <Paragraph>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Paragraph>
    <Cube class='box'>
      <div id='one' ></div>
      <div id='two' ></div>
      <div id='three' ></div>
      <div id='four' ></div>
      <div id='five' ></div>
      <div id='six' ></div>
    </Cube>
    </AboutBackground>
  )
}