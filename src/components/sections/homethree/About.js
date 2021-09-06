import React, { Component } from 'react';

// about
import aboutimg from '../../../assets/img/about/about-2.jpg';
import expimg from '../../../assets/img/experience-tag.png';

class About extends Component {
    render() {
        return (
            <section className="about-section about-style-three pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text pr-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About us</span>
                                    <h2>SolarHubEnergy help businesses elevate their solar.</h2>
                                </div>
                                <p>
                                    With more than four decades of proven success in quality solar services, Shelder solar and
                                    Retro-Fit group is a family-owned &amp; operated business serving the greater San Fransisco area
                                    state.Our expert team has been dedicated to providing the best service and quality available.
          </p>
                                <div className="experience-tag mt-40">
                                    <img src={expimg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 order-first order-lg-last">
                            <div className="about-img">
                                <img src={aboutimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;