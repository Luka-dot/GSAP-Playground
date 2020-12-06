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

    const imageWidth = 340;

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

    const slideLeft = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {             //  TweenLite.to(imageList.children[1], 1, {
            x: -imageWidth - multiplied,                                //  x: -imageWidth,
            ease: Power3.easeout,                                       //  ease: Power3.easeout,
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {             
            x: imageWidth - multiplied,                                
            ease: Power3.easeout,                                       
        });
    }

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index], duration, {             
            scale: 1.2,                             
            ease: Power3.easeout,                                      
        });
    }

    const fadeOut = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 0
        });
    }

    const fadeIn = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 1,
            delay: 0.8
        })
    }

    const nextSlide = () => {
        if (imageList.children[0].classList.contains('active')) {
            setState({isActive1: false, isActive2: true });

            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0);
            fadeOut(0, 1);
            fadeIn(1, 1);
            
        } else if (imageList.children[1].classList.contains('active')) {
            setState({isActive2: false, isActive3: true })
        } else if (imageList.children[2].classList.contains('active')) {
            setState({isActive3: false, isActive1: true })
        }
    };

    const previousSlide = () => {
        if (imageList.children[0].classList.contains('active')) {
            setState({isActive1: false, isActive3: true });

            slideLeft(2, 0, 3);
            slideLeft(2, 1, 2);
            scale(2, 1);
            slideRight(0, 1);
            slideRight(1, 1);
            //content transtion
            fadeOut(0, 1);
            fadeIn(2, 1);

        } else if (imageList.children[1].classList.contains('active')) {
            setState({isActive2: false, isActive1: true })
        } else if (imageList.children[2].classList.contains('active')) {
            setState({isActive1: true, isActive3: false })
        }
    }

    return (
        <div className="testimonial-section">
            <div className="testimonial-container">
                <div className="arrows left" onClick={previousSlide}>
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
                            <li className={state.isActive1 ? "active" : "" }>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[0].quote}</p>
                                    <h3 className="name>">{testimonials[0].name}</h3>
                                    <h4 className="title">{testimonials[0].title}</h4>
                                </div>
                            </li>
                            <li className={state.isActive2 ? "active" : "" }>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[1].quote}</p>
                                    <h3 className="name>">{testimonials[1].name}</h3>
                                    <h4 className="title">{testimonials[1].title}</h4>
                                </div>
                            </li>
                            <li className={state.isActive3 ? "active" : "" }>
                                <div className="content-inner">
                                    <p className="quote">{testimonials[2].quote}</p>
                                    <h3 className="name>">{testimonials[2].name}</h3>
                                    <h4 className="title">{testimonials[2].title}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="arrows right" onClick={nextSlide}>
                    <img className="arrowIcon" src={rightArrow} alt="right arrow" />
                </div>
            </div>
        </div>
    )
};

export default Slider;