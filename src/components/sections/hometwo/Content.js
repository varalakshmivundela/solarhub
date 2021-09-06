import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Habout from '../../layouts/Habout';
import Services from './Services';
import Cta from './Cta';
import Whychooseus from './Whychooseus';
import Video from './Video';
import Team from './Team';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <section className="about-section style-1 pt-120 pb-120">
                    <Habout />
                </section>
                <Services/>
                <Cta/>
                <Whychooseus/>
                <Video/>
                <Team/>
                <Skills/>
                <Portfolio/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;