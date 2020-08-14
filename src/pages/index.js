import React from "react";
import Skills from '../Components/skills';
import Header from '../Components/header';
import styled from 'styled-components';
import About from '../Components/about';
import Projects from '../Components/projects';
import Contact from '../Components/contact';
import Aframe from '../Components/aframe';
import '../App.css';



export default function Home() {
  return( 
    <div>
      <Aframe />
      <Header />
      <About />
      <Skills skillsHeader="These are my skills" />
      <Projects />
      <Contact />
    </div>
    )
}
