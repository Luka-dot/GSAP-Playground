import React, {useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import { TweenMax, Power3 } from 'gsap';

import Dots from './components/dots/dots-component';
import ImageTransition from './components/imageTransition/imageTransition-component';

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    TweenMax.to(
      logoItem,
      1.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
    );
    TweenMax.to(
      textItem,
      1.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .4
      }
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img 
          ref={el => {logoItem = el}}
          src={logo} 
          className="App-logo" 
          alt="logo" 
        />
        <p
          ref={el => { textItem = el}}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ImageTransition />
      {/* <Dots /> */}
    </div>
  );
}

export default App;
