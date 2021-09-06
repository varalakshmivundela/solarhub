import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/details/comment-1.jpg';
import img2 from '../../../assets/img/details/comment-2.jpg';
import img3 from '../../../assets/img/details/comment-3.jpg';

const testimonialmainpost = [
    { img: img1, text: 'Reliable solar solution not only looks appealing to you but also keeps your house protected from unfortunate weather conditions.', name: 'Rosalina D. William', post: 'Founder, Kilixer Co.' },
    { img: img2, text: 'Reliable solar solution not only looks appealing to you but also keeps your house protected from unfortunate weather conditions.', name: 'Rosalina D. William', post: 'Founder, Kilixer Co.' },
    { img: img3, text: 'Reliable solar solution not only looks appealing to you but also keeps your house protected from unfortunate weather conditions.', name: 'Rosalina D. William', post: 'Founder, Kilixer Co.' },
    { img: img1, text: 'Reliable solar solution not only looks appealing to you but also keeps your house protected from unfortunate weather conditions.', name: 'Rosalina D. William', post: 'Founder, Kilixer Co.' },
    { img: img2, text: 'Reliable solar solution not only looks appealing to you but also keeps your house protected from unfortunate weather conditions.', name: 'Rosalina D. William', post: 'Founder, Kilixer Co.' },
    { img: img3, text: 'Reliable solar solution not only looks appealing to you but also keeps your house protected from unfortunate weather conditions.', name: 'Rosalina D. William', post: 'Founder, Kilixer Co.' },
];

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }
    render() {
        const settings = {
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const settingsthumb = {
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        }
        return (
            <section className="testimonial-section pt-120 pb-120">
                <div className="container">
                    {/* testimonial Content Slider*/}
                    <Slider className="testimonial-slider mb-45" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} {...settings}>
                        {testimonialmainpost.map((item, i) => (
                            <div key={i}>
                                <div className="single-testimonial">
                                    <div className="author-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="desc">
                                        <div className="rateing mb-20">
                                            <Link to="#"><i className="fas fa-star" /></Link>
                                            <Link to="#"><i className="fas fa-star" /></Link>
                                            <Link to="#"><i className="fas fa-star" /></Link>
                                            <Link to="#"><i className="fas fa-star" /></Link>
                                            <Link to="#"><i className="fal fa-star" /></Link>
                                        </div>
                                        <h2>“ {item.text} ”</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* Author Info Slider */}
                    <div className="row no-gutters justify-content-center">
                        <div className="col-lg-9">
                            <Slider className="testimonial-author-slider" asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} {...settingsthumb}>
                                {testimonialmainpost.map((item, i) => (
                                    <div key={i} className="single-slider">
                                        <h4>{item.name}</h4>
                                        <span>{item.post}</span>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;