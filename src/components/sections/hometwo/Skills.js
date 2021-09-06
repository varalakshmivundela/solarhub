import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import skillimg from '../../../assets/img/skill-img.jpg';

class Skills extends Component {
    render() {
        return (
            <section className="skills-section pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-bars">
                                <div className="section-title mb-60 left-border">
                                    <span className="title-tag">skillset</span>
                                    <h2> Check Skillset &amp; Experience </h2>
                                </div>
                                <div className="skill-progress mb-45">
                                    <div className="title d-flex justify-content-between">
                                        <span>battery Life Expectancy</span>
                                        <span>72%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" style={{ width: '72%' }} />
                                    </div>
                                </div>
                                <div className="skill-progress mb-45">
                                    <div className="title d-flex justify-content-between">
                                        <span>Perfect solar Solutions</span>
                                        <span>81%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" style={{ width: '81%' }} />
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <div className="title d-flex justify-content-between">
                                        <span>Customer satisfaction</span>
                                        <span>72%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" style={{ width: '45%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-img text-right">
                                <img src={skillimg} alt="" />
                            </div>
                        </div>
                        <Link to="/contact" className="main-btn btn-filled hire-btn">Hire Us Now</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;