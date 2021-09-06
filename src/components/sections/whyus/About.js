import React, { Fragment } from 'react';
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

import aboutmanimg from '../../../assets/img/about/why_choose_us.png';

export default function Counter() {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="about-section">
            <div className="container">
                <div className="with-man-shape">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text">
                                <div className="section-title mb-40 left-border">
                                    <span className="title-tag">our impressions</span>
                                    <h2>We help businesses elevate their solar.</h2>
                                </div>
                                <p>
                                    With more than four decades of proven success in quality solar services, Shelder solar and Retro-Fit group is a family-owned &amp; operated business serving the greater San Fransisco area state.Our expert team has been dedicated to providing the best service and quality available.
            </p>
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
                                            <CountUp start={focus ? 0 : null} end={32} duration={5} redraw={true}>
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
                                            <CountUp start={focus ? 0 : null} end={99} duration={5} redraw={true}>
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
                    <div className="about-man-img">
                        <div className="shape">
                            <img src={aboutmanimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
