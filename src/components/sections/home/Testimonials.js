import React, { Component } from 'react';
import Slider from 'react-slick';
import Clients from '../../layouts/Clients';

import quote from '../../../assets/img/testimonials/quote.png';

import testi1 from '../../../assets/img/testimonials/01.jpg';
import testi2 from '../../../assets/img/testimonials/02.jpg';
import testi3 from '../../../assets/img/testimonials/03.jpg';

const testimonialsblock = [
    { img: testi1, name: 'Rosalina d. william', post: 'founder,slidesigma', text: 'Our team can assist you in transforming your business through latest solar solutions to stay ahead of the curve.' },
    { img: testi2, name: 'Rosalina d. william', post: 'founder,slidesigma', text: 'Our team can assist you in transforming your business through latest solar solutions to stay ahead of the curve.' },
    { img: testi3, name: 'Rosalina d. william', post: 'founder,slidesigma', text: 'Our team can assist you in transforming your business through latest solar solutions to stay ahead of the curve.' },
    { img: testi1, name: 'Rosalina d. william', post: 'founder,slidesigma', text: 'Our team can assist you in transforming your business through latest solar solutions to stay ahead of the curve.' },
    { img: testi2, name: 'Rosalina d. william', post: 'founder,slidesigma', text: 'Our team can assist you in transforming your business through latest solar solutions to stay ahead of the curve.' },
    { img: testi3, name: 'Rosalina d. william', post: 'founder,slidesigma', text: 'Our team can assist you in transforming your business through latest solar solutions to stay ahead of the curve.' },
];

class Testimonials extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        }
        
        return (
            <section className="testimonials-clinet-section pt-120 pb-120">
                <div className="container">
                    <div className="section-title both-border text-center pb-80">
                        <span className="title-tag">Testimonials</span>
                        <h2>Client Feedbacks</h2>
                    </div>
                    <div className="testimonials-section pb-125">
                        <Slider className="testimonials-slider-two row" {...settings}>
                            {testimonialsblock.map((item, i) => (
                                <div key={i} className="col-lg-12">
                                    <div className="single-testimonial-two">
                                        <p>{item.text}</p>
                                        <div className="testimonial-author">
                                            <div className="author-img">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="author-info">
                                                <h5>{item.name}</h5>
                                                <span>{item.post}</span>
                                            </div>
                                        </div>
                                        <span className="quote-icon">
                                            <img src={quote} alt="" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="clinet-section">
                    <Clients/>
                </div>
            </section>
        );
    }
}

export default Testimonials;