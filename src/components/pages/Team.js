import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree';
import Content from '../sections/team/Content';

class Team extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Solarhubenergy | Team</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Team'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Team;