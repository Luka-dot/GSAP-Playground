import React, {useRef, useEffect} from 'react';

import {TweenMax, Power3} from 'gsap';

function Dots() => {

    return (
        <div className='circle-container'>
            <div className='circle'></div>
            <div className='circle red'></div>
            <div className='circle blue'></div>
        </div>
    )
};

export default Dots;