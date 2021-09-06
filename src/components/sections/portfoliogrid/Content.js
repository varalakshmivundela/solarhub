import React, { Component, Fragment } from 'react';
import Cta from './Cta';
import Section from './Section';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Section/>
                <Cta/>
            </Fragment>
        );
    }
}

export default Content;