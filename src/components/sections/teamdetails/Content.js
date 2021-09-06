import React, { Component, Fragment } from 'react';
import Portfoliotext from './Portfoliotext';
import Teamdetails from './Teamdetails';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Teamdetails/>
                <Portfoliotext/>
            </Fragment>
        );
    }
}

export default Content;