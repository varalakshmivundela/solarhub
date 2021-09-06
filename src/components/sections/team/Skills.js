import React, { Component } from 'react';

import skillimg from '../../../assets/img/skill-img-2.jpg';

class Skills extends Component {
    render() {
        return (
            <section className="skills-section bg-transparent pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-bars">
                                <div className="section-title mb-60 left-border">
                                    <span className="title-tag">skillset</span>
                                    <h2> Check Skillset &amp; Experience </h2>
                                </div>
                                <div className="skill-progress mb-45">
                                    <div className="title d-flex justify-content-between">
                                        <span>INTERIORS &amp; MARKETING
              </span>
                                        <span>72%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" style={{ width: '72%' }} />
                                    </div>
                                </div>
                                <div className="skill-progress mb-45">
                                    <div className="title d-flex justify-content-between">
                                        <span>PERFECT SOLAR SOLUTIONS
              </span>
                                        <span>81%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" style={{ width: '81%' }} />
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <div className="title d-flex justify-content-between">
                                        <span>CUSTOMER SATISFACTION
              </span>
                                        <span>72%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" style={{ width: '45%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-img text-right">
                                <img src={skillimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;