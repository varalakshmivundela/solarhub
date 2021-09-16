import React, { Component, Fragment } from 'react';
import Habout from '../../layouts/Habout'
import Portfolio from '../../layouts/Portfolio';
import Blogpost from './Blogpost';
import Cta from './Cta';
import Features from './Features';
import Services from './Services';
import Testimonials from './Testimonials';
import Slideshow from './Slideshow';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Slideshow />
                <section className="about-section style-1 bg-light-blue pt-120 pb-120">
                    <Habout />
                </section>
                <Features />
                <Services />
                <Cta />
                <section className="portfolio-slider-section pb-120">
                    <Portfolio />
                </section>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;