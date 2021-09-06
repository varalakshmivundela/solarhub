import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import icon1 from '../../../assets/img/services/icon-1.png';
import icon2 from '../../../assets/img/services/icon-3.png';
// features-boxes
const featuresboxes = [
    { count: '01', icon: 'fa-paper-plane', title: 'our mission', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor' },
    { count: '02', icon: 'fa-globe', title: 'our vision', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor', rsclass: "mt-30" },
    { count: '03', icon: 'fa-users', title: 'our approch', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor', rsclass: "mt-30" },
    { count: '04', icon: 'fa-cogs', title: 'our strategy', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor', rsclass: "mt-30" },
];
// feature-icon
const featureicon = [
    { icon: icon1, title: 'Quality Material' },
    { icon: icon2, title: 'Trained Workers' },
];

class Features extends Component {
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.col-md-6',
            percentPosition: false,
            gutter: 30,
            resize: true,
            fitWidth: true
        };
        return (
            <section className="features-boxes-two pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="features-boxes-loop">
                                {/* Loop start */}
                                <Masonry className="row fetaure-masonary" imagesLoadedOptions={imagesLoadedOptions}>
                                    {featuresboxes.map((item, i) => (
                                        <div className="col-md-6 col-sm-6" key={i}>
                                            <div className={"feature-box-two text-center " + item.rsclass + ""}>
                                                <div className="icon text-center">
                                                    <i className={"fas " + item.icon + ""} />
                                                </div>
                                                <h4>{item.title}</h4>
                                                <p>{item.text}
                                                </p>
                                                <span className="count">{item.count}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="feature-text pl-50">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">COLLABRATION WITH US</span>
                                    <h2>Dedicated solar Solutions with 25 Years Experience.</h2>
                                </div>
                                <p>Over the years, a wide range of developments and innovations in the global IT arena have led
                                to many new IT-enabled devices and services being produced. Moreover, there is need for IT
            today, not just in urban areas but rural regions as well.</p>
                                <ul className="feature-icon mt-40">
                                    {featureicon.map((item, i) => (
                                        <li key={i}>
                                            <img src={item.icon} alt="" />
                                            <h6>{item.title}</h6>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/services" className="main-btn btn-filled mt-40">Our Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;