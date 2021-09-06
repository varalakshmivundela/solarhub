import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/services/img-01.jpg';
import img2 from '../../../assets/img/services/img-02.jpg';
import img3 from '../../../assets/img/services/img-03.jpg';
const services = [
    { img: img1, title: 'Single Ply solar' },
    { img: img2, title: 'Outdoor' },
    { img: img3, title: 'Built-Up solar' },
    { img: img1, title: 'Custom solar' },
    { img: img2, title: 'Fully Authorized solar' },
    { img: img3, title: 'Experienced JAVA' },
];
class Services extends Component {
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
            <section className="services-slider-secton">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5 col-md-8 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">our services</span>
                                <h2>We Provide Superior solar Services with Competitive Pricing</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="service-link text-right">
                                <Link to="/services" className="main-btn btn-filled">learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="serive-slider-wrap">
                    <div className="container">
                        {/* Loop start */}
                        <Slider className="services-slider row" {...settings}>
                            {services.map((item, i) => (
                                <div key={i} className="col-lg-12">
                                    <div className="single-slider" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                        <h6>
                                            <Link to="/service-details">{item.title}</Link>
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;