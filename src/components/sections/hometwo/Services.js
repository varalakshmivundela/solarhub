import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../../assets/img/services/icon-1.png';
import icon2 from '../../../assets/img/services/icon-2.png';
import icon3 from '../../../assets/img/services/icon-3.png';

// Services
const servicesblock = [
    { icon: icon1, title: 'Single Ply solar', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', extclass: 'white-bg' },
    { icon: icon2, title: 'Panel Setup', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', extclass: 'secondary-bg doted mt-60' },
    { icon: icon3, title: 'Built-Up solar', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', extclass: 'primary-bg mt-120' },
];

class Services extends Component {
    render() {
        return (
            <section className="services-secton pt-120 pb-200">
                <div className="container">
                    <div className="section-title mb-80 text-center both-border">
                        <span className="title-tag">Services</span>
                        <h2>What We Do</h2>
                    </div>
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            {servicesblock.map((item, i) => (
                                <div className="col-lg-4 col-md-6 col-sm-10" key={i}>
                                    <div className={"single-service text-center " + item.extclass + ""}>
                                        <div className="icon">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                        <Link to="/service-details" className="service-link">Read More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;