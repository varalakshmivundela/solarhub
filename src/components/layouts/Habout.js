import React, { Fragment } from 'react';
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";


// About
import img1 from '../../assets/img/tile-gallery/01.jpg';
import img2 from '../../assets/img/tile-gallery/02.jpg';
import img3 from '../../assets/img/tile-gallery/03.jpg';
import img4 from '../../assets/img/tile-gallery/icon.png';
import img5 from '../../assets/img/tile-gallery/icon-2.png';
const tilegallery = [
    { img: img1, class: 'image-one' },
    { img: img2, class: 'image-two' },
    { img: img3, class: 'image-three' },
    { img: img4, class: 'icon' },
    { img: img5, class: 'zero-icon' },
];

export default function Counter() {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center col-reverse">
                <div className="col-lg-6 col-md-10">
                    <div className="about-tile-gallery">
                        {tilegallery.map((item, i) => (
                            <img src={item.img} className={item.class} key={i} alt="" />
                        ))}
                    </div>
                </div>
                <div className="col-lg-6 col-md-10">
                    <div className="about-text bottom-space pl-25">
                        <div className="section-title mb-40 left-border">
                            <span className="title-tag">About us</span>
                            <h2>We help businesses elevate their solar</h2>
                        </div>
                        <p>
                            With more than four decades of proven success in quality solar services, Shelder solar and Retro-Fit group is a family-owned &amp; operated business serving the greater San Fransisco area state.Our expert team has been dedicated to providing the best service and quality available in the area.
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
        </div>
    );
}