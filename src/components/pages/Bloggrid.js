import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree';
import Content from '../sections/bloggrid/Content';

class Bloggrid extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Solarhubenergy | Blog Grid</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Blog Grid'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Bloggrid;