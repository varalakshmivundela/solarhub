import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/portfolio/06.jpg';
import img2 from '../../../assets/img/portfolio/01.jpg';
import img3 from '../../../assets/img/portfolio/07.jpg';
import img4 from '../../../assets/img/portfolio/08.jpg';
import img5 from '../../../assets/img/portfolio/10.jpg';
import img6 from '../../../assets/img/portfolio/11.jpg';
import img7 from '../../../assets/img/portfolio/12.jpg';
import img8 from '../../../assets/img/portfolio/13.jpg';
import img9 from '../../../assets/img/portfolio/14.jpg';

const filtersbtn = [
    { name: "All works", value: "All works", isActive: true },
    { name: "Solar", value: "Solar", isActive: false },
    { name: "Consultancy", value: "Consultancy", isActive: false },
    { name: "Interiors", value: "Interiors", isActive: false },
    { name: "Custom", value: "Custom", isActive: false },
    { name: "Expert", value: "Expert", isActive: false },
];
class Section extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    img: img1,
                    origin: ["Solar", "Custom", "Expert"],
                },
                {
                    img: img2,
                    origin: ["Consultancy", "Expert", "Interiors"],
                },
                {
                    img: img3,
                    origin: ["Consultancy", "Expert", "Interiors"],
                },
                {
                    img: img4,
                    origin: ["Custom", "Solar", "Interiors"],
                },
                {
                    img: img5,
                    origin: ["Expert", "Custom", "Interiors"],
                },
                {
                    img: img6,
                    origin: ["Solar", "Consultancy", "Interiors"],
                },
                {
                    img: img7,
                    origin: ["Solar", "Consultancy", "Interiors"],
                },
                {
                    img: img8,
                    origin: ["Custom", "Interiors"],
                },
                {
                    img: img9,
                    origin: ["Custom", "Interiors", "Expert"],
                },
            ],
            filterProject: []
        };
    }

    componentDidMount() {
        this.setState({
            filterProject: this.state.projects
        });
    }
    handleClick = name => {
        let filterProject = [];
        if (name === "All works") {
            filterProject = this.state.projects;

        } else {
            filterProject = this.state.projects.filter(
                (project, i) => project.origin.includes(name)
            );
        }
        var index = filtersbtn.map(function (e) { return e.name; }).indexOf(name);
        if (index) {
            filtersbtn.forEach(item => {
                item.isActive = false;
            });
            filtersbtn[index].isActive = true;
        }
        this.setState({ filterProject });
    };
    render() {
        const renderAll = this.state.filterProject.map((project, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
                <div className="portfolio-grid-box">
                    <div className="portfolio-img" style={{ backgroundImage: "url(" + project.img + ")" }} />
                    <Link to="/portfolio-details" className="portfolio-link">
                        <i className="far fa-expand" />
                    </Link>
                </div>
            </div>
        ));
        return (
            <section className="portfolio-section pt-120 pb-90">
                <div className="container">
                    {/* portfolio filter */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="portfolio-filter grid-filter">
                                <ul>
                                    {filtersbtn.map(({ name, value, isActive }) => (
                                        <li key={name} value={value} className={isActive === true ? 'active' : ''} onClick={this.handleClick.bind(this, name)}>{name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* portfolio loop */}
                    <div className="row portfolio-grid-loop grid-isotope">
                        {renderAll}
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;