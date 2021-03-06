import React, {useRef, useEffect} from 'react';
import { TweenMax, TimelineLite, Power3} from 'gsap';

import './hero.styles.scss';
import hero1Picture from '../../assets/hero2.jpg';
import hero2Picture from '../../assets/hero1.jpg';
import rightArr from '../../assets/right-arrow.svg';

function Hero() {
    let hero = useRef(null);
    let images = useRef(null);
    let content = useRef(null);

    let tl = new TimelineLite({delay: .8});

    useEffect(() => {
        const imageOne = images.firstElementChild;
        const imageTwo = images.lastElementChild;

        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.children[1];
        const contentButton = content.children[2];

        // images animations
        TweenMax.to(hero, 0, {css: {visibility: 'visible'}});  // this avoids flashing on load.
        tl.from(imageOne, 1.8, {y: 1380, ease: Power3.easeOut}, 'Start')
            .from(imageOne.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
            .from(imageTwo, 1.5, {y: 800, ease: Power3.easeOut}, .5)
            .from(imageTwo.firstElementChild, 1.6, {scale: 1.6, ease: Power3.easeOut}, 1);

        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
            y: 44,
            ease: Power3.easeOut,
            delay: .8
        }, 0.15, 'Start')
        .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
        .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.8);
    }, [tl]);

    return(
        <div className="hero" ref={el => hero = el}>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="hero-content">                      
                        <div className="hero-content-inner" ref={el => content = el}>
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
                        <div className="hero-images-inner" ref={el => images = el}>
                            <div className="hero-image one">
                                <img src={hero1Picture} alt="one" />
                            </div>
                            <div className="hero-image two">
                                <img className="image-two" src={hero2Picture} alt="two" />
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
};

export default Hero;