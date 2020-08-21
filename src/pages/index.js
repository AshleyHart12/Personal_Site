import React from "react";
import Skills from '../Components/skills';
import Header from '../Components/header';
import About from '../Components/about';
import Projects from '../Components/projects';
import Contact from '../Components/contact';
import Aframe from '../Components/aframe';
import '../App.css';



export default function Home() {

  const module = typeof window !== `undefined` ? require("module") : null
  
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
