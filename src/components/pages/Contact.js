import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree';
import Content from '../sections/contact/Content';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Solarhubenergy | Contact Us</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Contact Us'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Contact;