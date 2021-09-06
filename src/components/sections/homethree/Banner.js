import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import bannerbg from '../../../assets/img/banner/02.jpg';
const bannerpost = [
    { title: 'We Create', titlespan: 'solar', titlespanspan: 'Solutions', btn1text: 'Get Started Now', btn2text: 'Learn More' },
    { title: 'We Create', titlespan: 'solar', titlespanspan: 'Solutions', btn1text: 'Get Started Now', btn2text: 'Learn More' },
    { title: 'We Create', titlespan: 'solar', titlespanspan: 'Solutions', btn1text: 'Get Started Now', btn2text: 'Learn More' },
];

function NextArrow(props) {
    const { onClick } = props;
    return (
        <span className="slick-arrow next-arrow" onClick={onClick}>next<i className="fal fa-long-arrow-right" /></span>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <span className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" />Prev</span>
    );
}
class Banner extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: true,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    },
                },
            ],
        }
        return (
            <section className="banner-section banner-style-three banner-slider-two" style={{ backgroundImage: "url(" + bannerbg + ")" }}>
                <Slider className="slider-active" id="bannerSliderTwo" {...settings}>
                    {bannerpost.map((item, i) => (
                        <div key={i} className="single-banner">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="banner-text">
                                            <h1 data-animation="fadeInUp" data-delay=".7s" style={{ animationDelay: '0.7s' }}>{item.title}
                                                <span>{item.titlespan}</span> <span>{item.titlespanspan}</span></h1>
                                            <div className="btn-wrap" data-animation="fadeInUp" data-delay=".9s">
                                                <Link to="/contact" className="main-btn btn-filled">{item.btn1text}</Link>
                                                <Link to="/about" className="main-btn btn-borderd">{item.btn2text}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="banner-shape-three">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z">
                        </path>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Banner;