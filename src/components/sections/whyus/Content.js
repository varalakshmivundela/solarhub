import React, { Component, Fragment } from 'react';
import About from './About';
import Counter from '../../layouts/Counter';
import Service from './Service';
import Portfoliotext from './Portfoliotext';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <section className="counter-section">
                    <Counter/>
                </section>
                <Service/>
                <Portfoliotext/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;