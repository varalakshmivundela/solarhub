import React, { Component } from 'react';

import aboutimg1 from '../../../assets/img/tile-gallery/04.jpg';
import aboutimg2 from '../../../assets/img/tile-gallery/05.jpg';

class About extends Component {
    render() {
        return (
            <section className="about-section about-style-three pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-tile-gallery-two">
                                <img src={aboutimg1} alt="" className="image-one" />
                                <img src={aboutimg2} alt="" className="image-two" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text pl-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About us</span>
                                    <h2>We help businesses elevate their solar.</h2>
                                </div>
                                <p>
                                 SolarHubEnergy is the Flagship Business Vertical of Asthra Projects, The the Business vertical has been separated in 2019 with dedicated team of Resources focusing on the Turnkey Solar offerings to our end customers. Ecosky currently leading the way in the growing solar energy market and offers one of the widest ranges of products and solutions in the segment . With the motive of consistent product improvement through deep research that makes it right for the first time itself and to make available the most reliable, innovative and affordable solar products to the Industry.
                                </p><br /><br /><br />                                 
                                {/* <div className="about-extra"> */}
                               <h6> "We at SolarHubEnergy help you to managing the energy costs effectively while maximizing the ROI(Return on Investment) "</h6>
                                    {/* <div className="experience-tag">
                                        <img src={aboutexp} alt="" />
                                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;