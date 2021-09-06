import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../../assets/img/services/icon-1.png';
import icon2 from '../../../assets/img/services/icon-2.png';
import icon3 from '../../../assets/img/services/icon-3.png';

const featuredservice = [
    { icon: icon1, title: 'Single Ply solar', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', extclass: 'white-bg' },
    { icon: icon2, title: 'Panel Setup', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', extclass: 'secondary-bg doted' },
    { icon: icon3, title: 'Built-Up solar', text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', extclass: 'primary-bg' },
];
class Featured extends Component {
    render() {
        return (
            <section className="services-secton featured-service mt-negative">
                <div className="container">
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            {featuredservice.map((item, i) => (
                                <div className="col-lg-4 col-md-6 col-sm-10" key={i}>
                                    <div className={"single-service text-center mt-60 " + item.extclass + ""}>
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

export default Featured;