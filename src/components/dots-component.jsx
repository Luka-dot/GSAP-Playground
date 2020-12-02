import React, {useRef, useEffect} from 'react';

import {TweenMax, Power3} from 'gsap';

import './dots.styles.css';

function Dots() {
    let circleContainer = useRef(null);
    let circle = useRef(null);
    let circleRed = useRef(null);
    let circleBlue = useRef(null);

    useEffect(() => {
        // TweenMax.to(circleContainer, 0, {css: {visibility: 'visible'}});
        // TweenMax.from(circle, .8, {opacity: 0, x: 40, ease: Power3.easeOut});
        // TweenMax.from(circleRed, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .2});
        // TweenMax.from(circleBlue, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .4})
        TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, {opacity: 0, x: 40, ease: Power3.easeOut}, .3)
    }, []);

    return (
        <div className='circle-container'
            ref={el => circleContainer = el}
        >
            <div className='circle'
                ref={el => circle = el }
            ></div>
            <div className='circle red'
                ref={el => circleRed = el }
            ></div>
            <div className='circle blue'
                ref={el => circleBlue = el }
            ></div>
        </div>
    )
};

export default Dots;