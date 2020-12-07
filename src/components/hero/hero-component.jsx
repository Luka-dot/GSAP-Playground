import React from 'react';
import { TweenLite, Power3} from 'gsap';

import './hero.styles.scss';
import hero1Picture from '../../assets/hero1.jpg';
import hero2Picture from '../../assets/hero2.jpg';
import rightArr from '../../assets/right-arrow.svg';

function Hero() {

    return(
        <div className="hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="hero-content">                      
                        <div className="hero-content-inner">
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">First line</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">This is second line</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">third line for random text.</div>
                                </div>
                                </h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                <div className="btn-row">
                                    <button className="explore-button">Explore
                                        <div className="arrow-icon">
                                            <img className="arrow-svg" src={rightArr} alt="arrow" />
                                        </div>
                                    </button>
                                </div>
                            </div>                       
                        </div>
                    <div className="hero-images">
                        <div className="hero-images-inner">
                            <div className="hero-image one">
                                <img src={hero1Picture} alt="one" />
                            </div>
                            <div className="hero-image two">
                                <img src={hero2Picture} alt="two" />
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
};

export default Hero;