import React, {useEffect, useRef, useState} from 'react';

import {TweenLite, Power3} from 'gsap';

import "./slider.styles.scss";
import motoImage from '../../assets/moto.jpg';
import roadImage from '../../assets/road.jpg';
import skylineImage from '../../assets/skyline.jpg';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';

const testimonials = [
    {
        name: "Mike",
        title: "CEO",
        image: motoImage,
        quote: "this is test quote for first slide"
    },
    {
        name: "Jennifer",
        title: "CFO/HR",
        image: roadImage,
        quote: "this is test quote for second slide"
    },
    {
        name: "John Dow",
        title: "CTO wizzard",
        image: skylineImage,
        quote: "this is test quote for third slide"
    }
]

function Slider() {
    let imageList = useRef(null);
    let testimonialList = useRef(null);

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
    })

    useEffect(() => {
    //    console.log(imageList.children[0])
        TweenLite.to(testimonialList.children[0], 0, {
            opacity: 1,
        })
    }, [])

    return (
        <div className="testimonial-section">
            <div className="testimonial-container">
                <div className="arrows left">
                    <img className="arrowIcon" src={leftArrow} alt="left arrow" />
                </div>
                <div className="inner">
                    <div className="t-image">
                        <ul ref={el => imageList = el} >
                            <li className={state.isActive1 ? "active" : "" } >
                                <img className="img-testimonial" src={testimonials[0].image} alt={testimonials[0].name} />
                            </li>
                            <li className={state.isActive2 ? "active" : "" } >
                                <img className="img-testimonial" src={testimonials[1].image} alt={testimonials[1].name} />
                            </li>
                            <li className={state.isActive3 ? "active" : "" } >
                                <img className="img-testimonial" src={testimonials[2].image} alt={testimonials[2].name} />
                            </li>
                        </ul>
                    </div>
                    <div className="t-content">
                        <ul ref={el => testimonialList = el} >
                            <li>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[0].quote}</p>
                                    <h3 className="name>">{testimonials[0].name}</h3>
                                    <h4 className="title">{testimonials[0].title}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[1].quote}</p>
                                    <h3 className="name>">{testimonials[1].name}</h3>
                                    <h4 className="title">{testimonials[1].title}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[2].quote}</p>
                                    <h3 className="name>">{testimonials[2].name}</h3>
                                    <h4 className="title">{testimonials[2].title}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="arrows right">
                    <img className="arrowIcon" src={rightArrow} alt="right arrow" />
                </div>
            </div>
        </div>
    )
};

export default Slider;