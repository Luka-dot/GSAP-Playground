import React, {useEffect, useRef, useState} from 'react';

import {TimelineLite, Power2} from 'gsap';

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

    return (
        <div className="testimonial-section">
            <div className="testimonial-component">
                <div className="arrows left">
                    <spam>
                        <img src={leftArrow} alt="left arrow" />
                    </spam>
                </div>
                <div className="inner">
                    <div className="t-mage">
                        <ul>
                            <li>
                                <img src={testimonials[0].image} alt={testimonials[0].name} />
                            </li>
                            <li>
                                <img src={testimonials[1].image} alt={testimonials[1].name} />
                            </li>
                            <li>
                                <img src={testimonials[2].image} alt={testimonials[2].name} />
                            </li>
                        </ul>
                    </div>
                    <div className="t-content">
                        <ul>
                            <li>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[0].quote}</p>
                                    <h3 className="name>">{testimonials[0].name}</h3>
                                    <h4 className="title">{testimonials[0].title}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[2].quote}</p>
                                    <h3 className="name>">{testimonials[2].name}</h3>
                                    <h4 className="title">{testimonials[2].title}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[3].quote}</p>
                                    <h3 className="name>">{testimonials[3].name}</h3>
                                    <h4 className="title">{testimonials[3].title}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="arrows right">
                    <spam>
                        <img src={rightArrow} alt="right arrow" />
                    </spam>
                </div>
            </div>
        </div>
    )
};

export default Slider;