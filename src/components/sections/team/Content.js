import React, { Component, Fragment } from 'react';
import Teamsection from './Teamsection';
import Services from '../home/Services';
import Skills from './Skills';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Teamsection/>
                <Services/>
                <Skills/>
            </Fragment>
        );
    }
}

export default Content;