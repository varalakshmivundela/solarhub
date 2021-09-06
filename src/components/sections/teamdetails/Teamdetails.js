import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import teamdetail from '../../../assets/img/details/team.jpg';

class Teamdetails extends Component {
    render() {
        return (
            <section className="team-details pt-150 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 col-md-9">
                            <div className="member-img">
                                <img src={teamdetail} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-9">
                            <div className="member-information">
                                <div className="member-info-top d-sm-flex align-items-center justify-content-between">
                                    <div className="title">
                                        <h2>Rosalina D. William</h2>
                                        <span>Founder &amp; UX Designer</span>
                                    </div>
                                    <div className="link">
                                        <Link to="/contact" className="main-btn btn-filled">Get Appointment</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-9 col-md-11">
                                        <ul className="contact-list">
                                            <li>
                                                <i className="fas fa-phone" />
                                                <span className="title">Phone : </span>
                  (123) 456-7890 8, +987 868 6578 648
                </li>
                                            <li>
                                                <i className="fas fa-envelope" />
                                                <span className="title">Email : </span>
                                                <Link to="#">info@example.com</Link>, <Link to="#">job@webmail.com</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                <span className="title">Address Info : </span>
                  24 Fifth st., New York, US
                </li>
                                        </ul>
                                        <ul className="social-list">
                                            <li>
                                                <i className="fab fa-facebook-f" />
                                                <span className="title">Facebook : </span>
                                                <Link to="#">www.facebook.com/rosalina</Link>
                                            </li>
                                            <li>
                                                <i className="fab fa-twitter" />
                                                <span className="title">Twitter : </span>
                                                <Link to="#">www.twitter.com/rosalina</Link>
                                            </li>
                                            <li>
                                                <i className="fab fa-youtube" />
                                                <span className="title">Youtube : </span>
                                                <Link to="#">www.youtube.com/rosalina</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Teamdetails;