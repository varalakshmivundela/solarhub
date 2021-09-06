import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

import circleicon from '../../../assets/img/banner/solar-hub.jpg';

class Banner extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-youtube').magnificPopup({
                type: 'iframe',
            });
        }
        popup();
    }
    render() {
        return (
            <section className="banner-section banner-style-two">
                <div className="single-banner">
                    <div className="container-fluid custom-container-two">
                         <div className="imageiconforbackground ">
                            <img src={circleicon} alt="" className="img-bg"/>
                        </div>
                        <div className="row align-items-center">
                            
                            <div className="col-md-6">
                                <div className="banner-img">
                                    
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="banner-text">
                                    <Link to="https://www.youtube.com/embed/pbiEfJd2Hpw" className="video-icon popup-youtube">
                                        <i className="fas fa-play" />
                                    </Link>
                                    <h1>We Create Reliable solar and Retro-fit</h1>
                                    <p>Delivering solor power since 1995</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;