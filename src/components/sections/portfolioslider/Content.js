import React, { Component, Fragment } from 'react';
import Portfolio from '../../layouts/Portfolio';
import { Link } from 'react-router-dom';

import ctaimg from '../../../assets/img/cta/cta-img-2.png';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section class="portfolio-slider-section pt-150 pb-120">
                    <Portfolio />
                </section>
                <section className="call-to-action cta-style-two mb-120">
                    <div className="container">
                        <div className="cta-inner">
                            <div className="cat-img">
                                <div className="cat-shape shape-two">
                                    <img src={ctaimg} alt="" />
                                </div>
                            </div>
                            <div className="cta-text diff-bg">
                                <div className="row align-items-center justify-content-end">
                                    <div className="col-lg-6 col-md-7 col-sm-10">
                                        <div className="section-title pl-30 left-border">
                                            <span className="title-tag">need consultation</span>
                                            <h2>We are here for your estimate price.</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2">
                                        <div className="link-wrap text-center">
                                            <Link to="/contact" className="cat-link"><i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Content;