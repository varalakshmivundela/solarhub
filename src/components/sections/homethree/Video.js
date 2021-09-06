import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

import videobg from '../../../assets/img/video-bg-2.jpg';

class Video extends Component {
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
            <section className="video-section video-style-two" style={{ backgroundImage: "url(" + videobg + ")" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="video-text text-center">
                                <div className="video-link-two">
                                    <Link to="https://www.youtube.com/embed/pbiEfJd2Hpw" className="popup-video popup-youtube"><i className="fas fa-play" /></Link>
                                </div>
                                <p>These values give us the foundations we need</p>
                                <h1>our values is only hard working</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;