import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/portfolio/01.jpg';
import img2 from '../../../assets/img/portfolio/02.jpg';
import img3 from '../../../assets/img/portfolio/03.jpg';
import img4 from '../../../assets/img/portfolio/04.jpg';
import img5 from '../../../assets/img/portfolio/05.jpg';

const portfolioblock = [
    { img: img1, category: 'interior design', name: 'expert solar solution', colclass: 'col-lg-4 col-sm-6' },
    { img: img2, category: 'interior design', name: 'expert solar solution', colclass: 'col-lg-4 col-sm-6' },
    { img: img3, category: 'interior design', name: 'expert solar solution', colclass: 'col-lg-4 col-sm-6' },
    { img: img4, category: 'interior design', name: 'expert solar solution', colclass: 'col-lg-4 col-sm-6' },
    { img: img5, category: 'interior design', name: 'expert solar solution', colclass: 'col-lg-8 col-sm-12' },
];
class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio-section pt-120 pb-90">
                <div className="container">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">portfolio</span>
                        <h2>case study</h2>
                    </div>
                    {/* portfolio loop */}
                    <div className="row portfolio-masonary-loop">
                        {portfolioblock.map((item, i) => (
                            <div className={item.colclass} key={i}>
                                <div className="portfolio-box height-extra" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                    <div className="portfolio-desc">
                                        <span className="portfolio-cat">{item.category}</span>
                                        <h4><Link to="/portfolio-details">{item.name}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;