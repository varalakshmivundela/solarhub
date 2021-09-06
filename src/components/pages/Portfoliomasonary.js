import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree';
import Content from '../sections/portfoliomasonary/Content';

class Portfoliomasonary extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Solarhubenergy | Portfolio Masonary</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Portfolio Masonary'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfoliomasonary;