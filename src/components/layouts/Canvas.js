import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class Canvas extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <div className="widget social-widget">
                        <h4 className="widget-title"><Link to="/register">Register</Link></h4>
                        <h4 className="widget-title"><Link to="/register">Login</Link></h4>
                       
                    </div>
                                        
                    {/* <div className="widget recent-post">
                        <h4 className="widget-title">Recent Posts</h4>
                        <ul>
                            {recentpost.map((item, i) => (
                                <li key={i}>
                                    <div className="post-img" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                    </div>
                                    <div className="post-content">
                                        <h6>
                                            <Link to="/blog-details">{item.title}</Link>
                                        </h6>
                                        <span className="time"><i className="far fa-clock" />{item.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div className="widget contact-widget">
                        <h4 className="widget-title">Contact Us</h4>
                        <ul>
                            <li>
                                <i className="far fa-map-marker-alt" />
                                Plot no 1211,1st floor,Gokul Plots,<br/>venkataramana colony<br /> HYDERABAD,INDIA 
                            </li>
                            <li>
                                <i className="far fa-phone" />
                                <Link to="#">+91-8686363068</Link>
                            </li>
                            <li>
                                <i className="far fa-envelope-open" />
                                <Link to="#">support@solarhubind.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="widget social-widget">
                        <h4 className="widget-title">Follow Us</h4>
                        <ul>
                            <li>
                                <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                <Link to="#"><i className="fab fa-twitter" /></Link>
                                <Link to="#"><i className="fab fa-instagram" /></Link>
                                <Link to="#"><i className="fab fa-behance" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Canvas;