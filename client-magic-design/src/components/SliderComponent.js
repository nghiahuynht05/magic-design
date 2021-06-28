import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Slider from "react-slick";
import slider1 from './../../src/image/slider-1.jpg';

export default class SliderComponent extends Component {
    render() {
        const settings = {
            customPaging: function (i) {
                return (
                    <div className="slideshow-container">
                        <div className="mySlides fade">
                            <img src={slider1} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                        </div>
                    </div>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className=" thumbnail">
                    <div className="item" id="item1">
                        <img src={slider1} alt='' />
                    </div>
                    <div className="item" id="item1">
                        <img src={slider1} alt='' />
                    </div>
                    <div className="item" id="item1">
                        <img src={slider1} alt='' />
                    </div>
                    <div className="item" id="item1">
                        <img src={slider1} alt='' />
                    </div>
                </div>
            </Slider>
        );
    }
}