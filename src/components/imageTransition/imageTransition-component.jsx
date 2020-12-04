import React, {useEffect, useRef} from 'react';

import {TweenMax, Power3} from 'gsap';

import mountainPicture from '../../assets/mountain.jpg';
import './imageTransition.styles.css';

function ImageTransition() {

    return (
        <div className="container" >
        <div className="image-container">
            <img src={mountainPicture} />
        </div>
        </div>
    )
};

export default ImageTransition;