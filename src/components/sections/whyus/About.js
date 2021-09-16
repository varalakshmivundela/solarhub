import React, { Fragment } from 'react';
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";


export default function Counter() {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="about-section">
            <div className="container">
                <div className="with-man-shape">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-12 col-md-10">
                            <div className="about-text">
                                <div className="section-title mb-40 left-border">
                                    <span className="title-tag">our impressions</span>
                                    <h2>We help businesses elevate their solar.</h2>
                                </div>
                                <p>
                                 SolarHubEnergy is leading the way in the growing for solar energy market and offers one of the widest ranges of products and solutions in the market.
                                 </p>
                                <ui>
                                    <li>Turnkey EPC Solution Provider</li>

                                    <li>Complaint to Global standards</li>

                                    <li>Cutting edge technology with Partnerships</li>

                                    <li>Customized designs as per the Site conditions</li>

                                    <li>Efficient Operations and Maintenance</li>

                                    <li>Shortest Return On Investments</li>

                                    <li>Capex or Resco Mode of Installations</li>
                                </ui>
                                <div className="about-features mt-50">
                                    <div className="sngle-features">
                                        <div className="chart" data-percent={75}>
                                            <VisibilitySensor>
                                                {({ isVisible }) => {
                                                    const percentage = isVisible ? 75 : 0;
                                                    return (
                                                        <CircularProgressbar
                                                            value={percentage}
                                                            strokeWidth={5}
                                                            styles={buildStyles({
                                                                strokeLinecap: 'butt',
                                                                pathColor: '#ff4a17',
                                                                trailColor: '#e8e8e8',
                                                                backgroundColor: '#f5f5f5',
                                                            })}
                                                        />
                                                    );
                                                }}
                                            </VisibilitySensor>
                                            <span className="icon"><i className="fas fa-award" /></span>
                                        </div>
                                        <div className="counter-box">
                                            <CountUp start={focus ? 0 : null} end={5} duration={5} redraw={true}>
                                                {({ countUpRef }) => (
                                                    <Fragment>
                                                        <span className="timer" ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                            <span>+</span>
                                                        </VisibilitySensor>
                                                    </Fragment>
                                                )}
                                            </CountUp>
                                        </div>
                                        <div className="desc">
                                            <h4>Years of Experience</h4>
                                            <p>As a result, most of us need to know how to design roofs. Our knowledge of
                    interiors.</p>
                                        </div>
                                    </div>
                                    <div className="sngle-features">
                                        <div className="chart" data-percent={85}>
                                            <VisibilitySensor>
                                                {({ isVisible }) => {
                                                    const percentage = isVisible ? 85 : 0;
                                                    return (
                                                        <CircularProgressbar
                                                            value={percentage}
                                                            strokeWidth={5}
                                                            styles={buildStyles({
                                                                strokeLinecap: 'butt',
                                                                pathColor: '#ff4a17',
                                                                trailColor: '#e8e8e8',
                                                                backgroundColor: '#f5f5f5',
                                                            })}
                                                        />
                                                    );
                                                }}
                                            </VisibilitySensor>
                                            <span className="icon"><i className="fas fa-globe" /></span>
                                        </div>
                                        <div className="counter-box">
                                            <CountUp start={focus ? 0 : null} end={30} duration={5} redraw={true}>
                                                {({ countUpRef }) => (
                                                    <Fragment>
                                                        <span className="timer" ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                            <span>+</span>
                                                        </VisibilitySensor>
                                                    </Fragment>
                                                )}
                                            </CountUp>
                                        </div>
                                        <div className="desc">
                                            <h4>Project Done together</h4>
                                            <p>As a result, most of us need to know how to design roofs. Our knowledge of
                    interiors.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="about-man-img">
                        <div className="shape">
                            <img src={aboutmanimg} alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
