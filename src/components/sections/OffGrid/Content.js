import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';
import offgrid from '../../../assets/img/solutions/OFF GRID.png';
import offgridsystem from '../../../assets/img/solutions/off grid system.png';


class Content extends Component {
    render() {
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-title left-border mb-40">
                            <span className="title-tag">Off Grid System:</span>
                        </div>
                    </div>
                </div>

            </section>
        );
        }
}
export default Content;