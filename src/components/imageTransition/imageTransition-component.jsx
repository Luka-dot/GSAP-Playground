import React, {useEffect, useRef} from 'react';

import {TweenMax, Power3} from 'gsap';

import mountainPicture from '../../assets/mountain.jpg';
import './imageTransition.styles.scss';

function ImageTransition() {
    let container = useRef(null);
    let image = useRef(null);

    useEffect(() => {

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