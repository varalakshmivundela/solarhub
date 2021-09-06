import React, { Component, Fragment } from 'react';
import Backtotop from './Backtotop';
import { Link } from 'react-router-dom';
 
import logo from '../../assets/img/hub-logo.png';

import img1 from '../../assets/img/recent-post-wid/01.jpg';
import img2 from '../../assets/img/recent-post-wid/02.jpg';
import img3 from '../../assets/img/recent-post-wid/03.jpg';

const newsfeeds = [
    { img: img1, title: 'Managing Partner along with Senior Counsels.', date: '14th Aug 2020' },
    { img: img2, title: 'Managing Partner along with Senior Counsels.', date: '14th Aug 2020' },
    { img: img3, title: 'Managing Partner along with Senior Counsels.', date: '14th Aug 2020' },
];


class Footerthree extends Component {
    render() {
        return (
            <Fragment>
                <Backtotop />
                <footer className="footer-style-three">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* <div className="col-sm-4">
                                    <div className="logo text-center text-sm-left">
                                        <Link to="/">
                                            <img src={logo} alt="" />
                                        </Link>
                                    </div>
                                </div> */}
                                <div className="col-sm-8">
                                    <div className="social-icon text-center text-sm-right">
                                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link to="#"><i className="fab fa-twitter" /></Link>
                                        <Link to="#"><i className="fab fa-behance" /></Link>
                                        <Link to="#"><i className="fab fa-linkedin" /></Link>
                                        <Link to="#"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* widgets */}
                    <div className="footer-widget-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start">
                                        <div>
                                            <h5 className="widget-title">Company</h5>
                                            <ul>
                                                <li><Link to="#">About</Link></li>
                                                <li><Link to="#">Leadership</Link></li>
                                                <li><Link to="#">Blog</Link></li>
                                                <li><Link to="#">Careers</Link></li>
                                                <li><Link to="#">Partners</Link></li>
                                                <li><Link to="#">Referral Program</Link></li>
                                                <li><Link to="#">Press</Link></li>
                                                <li><Link to="#">Legal</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start justify-content-lg-center">
                                        <div>
                                            <h5 className="widget-title">Community</h5>
                                            <ul>
                                                <li><Link to="#">Tutorials</Link></li>
                                                <li><Link to="#">Meetups</Link></li>
                                                <li><Link to="#">Q&amp;A</Link></li>
                                                <li><Link to="#">Write for DOnations</Link></li>
                                                <li><Link to="#">Droplets for Demos</Link></li>
                                                <li><Link to="#">Hatch Startup Program</Link></li>
                                                <li><Link to="#">Shop Swag</Link></li>
                                                <li><Link to="#">Research Program</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start justify-content-lg-center">
                                        <div>
                                            <h5 className="widget-title">Solutions</h5>
                                            <ul>
                                                <li><Link to="#">Single Ply solar</Link></li>
                                                <li><Link to="#">Team Support</Link></li>
                                                <li><Link to="#">Buil-Up solar</Link></li>
                                                <li><Link to="#">Managed Services</Link></li>
                                                <li><Link to="#">Business Solutions</Link></li>
                                                <li><Link to="#">Metal solar</Link></li>
                                                <li><Link to="#">Vegetative solar</Link></li>
                                                <li><Link to="#">Budget solar</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget recent-post">
                                        <div>
                                            <h5 className="widget-title">news feeds</h5>
                                            <div className="post-loop">
                                                {newsfeeds.map((item, i) => (
                                                    <div className="post" key={i}>
                                                        <div className="post-img">
                                                            <img src={item.img} alt="" />
                                                        </div>
                                                        <div className="post-desc">
                                                            <span className="time"><i className="fal fa-calendar-alt" /> {item.date}</span>
                                                            <h5><Link to="/blog-details">{item.title}</Link></h5>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* copyright */}
                    <div className="copy-right-area">
                        <div className="container">
                            <div className="copyrigt-text d-sm-flex justify-content-between">
                                <p>Copyright By@<Link to="#">SolarHubEnergy Pvt Ltd</Link> - 2021</p>
                                <p>Design By@<Link to="#">SolarHubEnergy Pvt Ltd</Link> - 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footerthree;