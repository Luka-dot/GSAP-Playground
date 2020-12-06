import React, {useRef, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'reset-css';

import { TweenMax, Power3 } from 'gsap';

import Dots from './components/dots/dots-component';
import ImageTransition from './components/imageTransition/imageTransition-component';
import Slider from './components/slider/slider-component';

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
          Text and Logo scrolls on re-load.
        </p>
      </header>
      <div className="body-container">
        <Dots />
        <ImageTransition />
      </div>
      {/* <Route exact path='/slider' component={Slider} /> */}
      <div>
      <Slider />
      </div>
    </div>
  );
}

export default App;
