import React, { Component, Fragment } from 'react';
import Features from '../home/Features';
import Testimonials from '../home/Testimonials';
import Blogpost from '../home/Blogpost';
import Process from './Process';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Features />
                <Process/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;