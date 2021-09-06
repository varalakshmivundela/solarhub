import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../assets/img/portfolio/23.jpg';
import img2 from '../../assets/img/portfolio/24.jpg';
import img3 from '../../assets/img/portfolio/25.jpg';

const portfolioblocks = [
    { img: img1, category: 'interior design, mobile app', title: 'Modern Pattern Style' },
    { img: img2, category: 'interior design, mobile app', title: 'Tiler Covering Roof' },
    { img: img3, category: 'interior design, mobile app', title: 'Fixing Storm Damage' },
    { img: img1, category: 'interior design, mobile app', title: 'Modern Pattern Style' },
    { img: img2, category: 'interior design, mobile app', title: 'Tiler Covering Roof' },
    { img: img3, category: 'interior design, mobile app', title: 'Fixing Storm Damage' },
];

class Portfolio extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            speed: 900,
            centerPadding: '25%',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: '20%',
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '10%',
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: '5%',
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: '0',
                    },
                },
            ],
        }
        return (
            <div className="container-fluid">
                {/* portfolio loop */}
                <Slider className="row portfolio-slider-loop portfolio-slider" {...settings}>
                    {portfolioblocks.map((item, i) => (
                        <div key={i} className="col-12">
                            <div className="portfolio-box">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                    </div>
                                </div>
                                <div className="portfolio-desc">
                                    <span className="portfolio-cat">{item.category}</span>
                                    <h2><Link to="/portfolio-details">{item.title}</Link></h2>
                                    <Link to="/portfolio-details" className="portfolio-link">
                                        <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Portfolio;