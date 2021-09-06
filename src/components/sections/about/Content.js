import React, { Component, Fragment } from 'react';
import About from './About';
import Process from './Process';
import Services from './Services';
import Counter from '../../layouts/Counter';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Services />
                <Process />
                <section className="counter-section mt-negative">
                    <Counter />
                </section>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;