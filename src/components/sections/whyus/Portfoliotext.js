import React, { Component } from 'react';
import Portfolio from '../../layouts/Portfolio';

class Portfoliotext extends Component {
    render() {
        return (
            <section className="portfolio-slider-section with-bg pt-120 pb-120">
                <div className="container-fluid">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">portfolio</span>
                        <h2>case study</h2>
                    </div>
                    {/* portfolio loop */}
                </div>
                <Portfolio/>
            </section>
        );
    }
}

export default Portfoliotext;