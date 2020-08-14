import 'aframe';
import 'aframe-particle-system-component';
// import {Entity, Scene} from 'aframe-react';
import React from 'react';
import photo from './colors.jpg';

 
export default function Aframe() {
  
    return (
      <>
      <a-scene embedded style={{height: '30rem'}} fog="type: linear; color: #AAA">
        <a-sky id="my-image" src={photo}></a-sky>
        <a-text font="kelsonsans" value="Ashley Hart" width="6" position="-0.8 1.75 -1.0"
              rotation="0 15 0"></a-text>
              <a-text font="kelsonsans" value="Full Stack Developer" width="6" position="-1.2 1.15 -1.2"
              rotation="0 15 0" ></a-text>
              <button>Button</button>
      </a-scene>
      </>
    );
}