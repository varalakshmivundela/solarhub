import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blogpost extends Component {
    render() {
        return (
            <section className="latetest-post pt-120 pb-90">
                <div className="container">
                    {/* Section  Title */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7 col-6">
                            <div className="section-title left-border">
                                <span className="title-tag">Blog</span>
                                <h2>news feeds</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 col-6">
                            <div className="blog-btn text-right">
                                <Link to="/blog-standard" className="main-btn btn-filled">learn more</Link>
                            </div>
                        </div>
                    </div>
                    {/* post Loop */}
                    <div className="post-loop mt-70">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-12 col-sm-10 order-2 order-lg-1">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Home Decoration</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Protecting Your Roof From Storm Damage</Link>
                                                </h4>
                                                <p>In 1991 we expanded our outstanding service lists, offering a variety of energy saving solutions that we had perfected.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="#"><i className="fal fa-calendar-alt" />11th Aug 2020</Link></li>
                                                <li><Link to="#"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Roof Designs</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Why solar Material Warrenties is Important?</Link>
                                                </h4>
                                                <p>In 1991 we expanded our outstanding service lists, offering a variety of energy saving solutions that we had perfected.
                    .</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />10th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-10 col-sm-10 order-1 order-lg-2">
                                <div className="post-grid-box mb-30">
                                    <ul className="post-cat">
                                        <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                    </ul>
                                    <div className="post-desc">
                                        <h4><Link to="/blog-details">Roof Inspection and related process outcomes and benefits</Link></h4>
                                        <p>In 1991 we expanded our outstanding service lists, offering a variety of energy saving solutions that we had perfected &amp; operated business serving the greater San Fransisco area state..
              </p>
                                    </div>
                                    <ul className="post-meta">
                                        <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />11th Aug 2020</Link></li>
                                        <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogpost;