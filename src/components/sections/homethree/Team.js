import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/team/01.jpg';
import img2 from '../../../assets/img/team/02.jpg';
import img3 from '../../../assets/img/team/03.jpg';
import img4 from '../../../assets/img/team/04.jpg';
import img5 from '../../../assets/img/team/05.jpg';

const teamblock = [
    { img: img1, name: 'Rosa D.William', post: 'Founder & CEO' },
    { img: img2, name: 'hilixer b. browni', post: 'co-founder' },
    { img: img3, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img4, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img5, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img1, name: 'Rosa D.William', post: 'Founder & CEO' },
    { img: img2, name: 'hilixer b. browni', post: 'co-founder' },
    { img: img3, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img4, name: 'pokoloko k. kilix', post: 'consultant' },
];

class Team extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
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
            <section className="team-section pt-120 pb-90">
                <div className="container">
                    <div className="section-title both-border text-center mb-80">
                        <span className="title-tag">Team</span>
                        <h2>Our Team Members</h2>
                    </div>
                    <Slider className="row team-loop team-slider-two" {...settings}>
                        {teamblock.map((item, i) => (
                            <div key={i} className="col-lg-12">
                                <div className="member-box">
                                    <div className="member-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="member-info">
                                        <h3>{item.name}</h3>
                                        <span>{item.post}</span>
                                    </div>
                                    <Link to="#" className="socail-trigger">+</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Team;