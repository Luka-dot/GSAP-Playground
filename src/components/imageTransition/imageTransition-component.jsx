import React, {useEffect, useRef} from 'react';

import {TimelineLite, Power2} from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin";

import mountainPicture from '../../assets/mountain.jpg';
import './imageTransition.styles.scss';

function ImageTransition() {
    let container = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule('.image-container:after')

    const tl = new TimelineLite();

    useEffect(() => {
        console.log(imageReveal);
        tl.to(container, 1, {css: {visibility: "visible"} })
        .to(imageReveal, 1.4, {width: "0%", ease: Power2.easeInOut});
    });

    return (
        <div ref={el => container = el} className="container" >
        <div className="image-container">
            <img ref={el => image = el} src={mountainPicture} />
        </div>
        </div>
    )
};

export default ImageTransition;