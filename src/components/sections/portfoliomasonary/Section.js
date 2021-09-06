import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import img1 from '../../../assets/img/portfolio/17.jpg';
import img2 from '../../../assets/img/portfolio/18.jpg';
import img3 from '../../../assets/img/portfolio/22.jpg';
import img4 from '../../../assets/img/portfolio/19.jpg';
import img5 from '../../../assets/img/portfolio/20.jpg';
import img6 from '../../../assets/img/portfolio/21.jpg';

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
                    origin: ["Solar", "Custom", "Interiors"],
                    category: 'interior design',
                    title: 'expert solar solution',
                    colclass: 'col-lg-4 col-sm-6',
                },
                {
                    img: img2,
                    origin: ["Interiors", "Solar", "Custom"],
                    category: 'interior design',
                    title: 'expert solar solution',
                    colclass: 'col-lg-4 col-sm-6',
                },
                {
                    img: img3,
                    origin: [],
                    category: 'interior design',
                    title: 'expert solar solution',
                    colclass: 'col-lg-8 col-sm-12',
                    extraclass: 'double-height',
                },
                {
                    img: img4,
                    origin: ["Custom", "Solar", "Consultancy"],
                    category: 'interior design',
                    title: 'expert solar solution',
                    colclass: 'col-lg-4 col-sm-6',
                },
                {
                    img: img5,
                    origin: ["Expert", "Solar", "Consultancy"],
                    category: 'interior design',
                    title: 'expert solar solution',
                    colclass: 'col-lg-4 col-sm-6',
                },
                {
                    img: img6,
                    origin: ["Solar", "Consultancy", "Interiors"],
                    category: 'interior design',
                    title: 'expert solar solution',
                    colclass: 'col-lg-4 col-sm-6',
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
            <div key={i} className={"masonry-item "+ project.colclass +""}>
                <div className={"portfolio-box "+ project.extraclass +""}>
                    <div className="portfolio-img" style={{ backgroundImage: "url(" + project.img + ")" }} />
                    <div className="portfolio-desc">
                        <span className="portfolio-cat">{project.category}</span>
                        <h4><Link to="/portfolio-details">{project.title}</Link></h4>
                    </div>
                </div>
            </div>
        ));
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
            percentPosition: false,
            gutter: 30,
            resize: true,
            fitWidth: true
        };
        return (
            <section className="portfolio-section pt-120 pb-90">
                <div className="container">
                    {/* portfolio filter */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="portfolio-filter masonry-filter">
                                <ul>
                                    {filtersbtn.map(({ name, value, isActive }) => (
                                        <li key={name} value={value} className={isActive === true ? 'active' : ''} onClick={this.handleClick.bind(this, name)}>{name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* portfolio loop */}
                    <Masonry className="row portfolio-masonary-loop masonry-items" imagesLoadedOptions={imagesLoadedOptions}>
                        {renderAll}
                    </Masonry>
                </div>
            </section>
        );
    }
}

export default Section;