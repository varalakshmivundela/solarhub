import React, { Component, Fragment } from 'react';
import Portfolio from '../../layouts/Portfolio';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Cta from './Cta';
import Featured from './Featured';
import Services from './Services';
import Team from './Team';
import Video from './Video';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Featured/>
                <About/>
                <Services/>
                <section className="portfolio-slider-section pt-120 pb-120">
                    <Portfolio/>
                </section>
                <Cta/>
                <Team/>
                <Video/>
                <Contact/>
            </Fragment>
        );
    }
}

export default Content;