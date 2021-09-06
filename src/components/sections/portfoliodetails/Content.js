import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import portfoliothumb from '../../../assets/img/details/portfolio-thumb.jpg';
import avatar from '../../../assets/img/details/avatar.png';
import advimg from '../../../assets/img/banner-widget-2.jpg';
import gl1 from '../../../assets/img/details/03.jpg';
import gl2 from '../../../assets/img/details/04.jpg';
// gallery
const gallery = [
    { img: gl1 },
    { img: gl2 },
];

// Category
const categories = [
    { title: 'Roof Consultancy' },
    { title: 'Timely Services' },
    { title: 'Advisory Services' },
    { title: 'solar Structuring' },
    { title: 'Experience Design' },
    { title: 'Creative Engineering' },
];

class Content extends Component {
    render() {
        return (
            <section className="portfolio-details-wrap pt-150 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="portfolio-thumb mb-60" style={{ backgroundImage: "url(" + portfoliothumb + ")" }}>
                                <div className="portfolio-info">
                                    <ul>
                                        <li>
                                            <span className="title">Project Name</span>
                                            <p>solar Consultancy App</p>
                                        </li>
                                        <li>
                                            <span className="title">Client Name</span>
                                            <p>Miranda H. Halim</p>
                                        </li>
                                        <li>
                                            <span className="title">Date</span>
                                            <p>30 December 2020</p>
                                        </li>
                                        <li>
                                            <span className="title">Tag</span>
                                            <p><Link to="/portfolio-details">solar,</Link> <Link to="/portfolio-details">Business,</Link> <Link to="/portfolio-details"> Website</Link></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="portfolio-details">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">solar consultancy</span>
                                    <h2>Dedicated solar Solutions with 25 Years Experience in this field</h2>
                                </div>
                                <p className="mb-30">
                                    Once a business owner defined the needs to take a business to the next level, a decision
                                    maker will define a scope, cost and a time frame of the project.[1] The role of the IT
                                    consultancy company is to support and nurture the company from the very beginning of the
                                    project until the end, and deliver the project not only in the scope, time and cost but also
                                    with complete customer satisfaction.
          </p>
                                <p>
                                    The scope of a project is linked intimately to the proposed business processes and systems
                                    that the project is going to deliver. Regardless of whether the project is to launch a new
                                    product range or discontinue unprofitable parts of the business, the change will have some
                                    impact on business processes and systems. The documentation of your business processes and
                                    system requirements are as fundamental to project scoping as an architects plans would be to
                                    the costing and scoping of the construction of a building. The most successful business
                                    projects are always those that are driven by an employee who has the authority, vision and
                                    influence to drive the required changes in a business. It is highly unlikely that a business
                                    owner (decision maker or similar) will realize the changes unless one has one of these
                                    people in the employment. However, the project leadership role typically requires
                                    significant experience and skills which are not usually found within a company focused on
                                    day-to-day operations. Due to this requirement within more significant business change
                                    projects/programs, outside expertise is often sought from firms which can bring this
                                    specific skill set to the company.
          </p>
                                <div className="gallery mb-30 mt-60">
                                    <div className="row">
                                        {gallery.map((item, i) => (
                                            <div className="col-sm-6 mb-30" key={i}>
                                                <img src={item.img} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="mb-60">
                                    The scope of a project is linked intimately to the proposed business processes and systems
                                    that the project is going to deliver. Regardless of whether the project is to launch a new
                                    product range or discontinue unprofitable parts of the business, the change will have some
                                    impact on business processes and systems. The documentation of your business processes and
                                    system requirements are as fundamental to project scoping as an architects plans would be to
                                    the costing and scoping of the construction of a building. The most successful business
                                    projects are always those that are driven by an employee who has the authority, vision and
                                    influence to drive the required changes in a business.
          </p>
                                <blockquote>
                                    <span><img src={avatar} alt="" />by Hetmayar</span>
            solar development experience is just a tool to achieve business goals. But there is no
            way to get worthwhile results without cooperation and trust.
          </blockquote>
                                <p className="mt-60">
                                    The scope of a project is linked intimately to the proposed business processes and systems
                                    that the project is going to deliver. Regardless of whether the project is to launch a new
                                    product range or discontinue unprofitable parts of the business, the change will have some
                                    impact on business processes and systems. The documentation of your business processes and
                                    system requirements are as fundamental to project scoping as an architects plans would be to
                                    the costing and scoping of the construction of a building. The most successful business
                                    projects are always those that are driven by an employee who has the authority, vision and
                                    influence to drive the required changes in a business. It is highly unlikely that a business
                                    owner (decision maker or similar) will realize the changes unless one has one of these
                                    people in the employment. However, the project leadership role typically requires
                                    significant experience and skills which are not usually found within a company focused on
                                    day-to-day operations. Due to this requirement within more significant business change
                                    projects/programs, outside expertise is often sought from firms which can bring this
                                    specific skill set to the company.
          </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            {/* Page Sidebar */}
                            <div className="sidebar">
                                {/* Service cat */}
                                <div className="widget service-cat-widget mb-40">
                                    <h5 className="widget-title">Category</h5>
                                    <ul>
                                        {categories.map((item, i) => (
                                            <li key={i}>
                                                <Link to="/service-details">{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Brouchers widget */}
                                <div className="widget brouchers-widget mb-40">
                                    <h5 className="widget-title">Brouchers</h5>
                                    <ul>
                                        <li><Link to="#"><i className="fas fa-file-pdf" />DOWNLOAD PDF FILE</Link></li>
                                        <li><Link to="#"><i className="fas fa-file-powerpoint" />OUR ISO CERTIFICATES</Link></li>
                                        <li><Link to="#"><i className="fas fa-file-image" />OUR ISO CERTIFICATES</Link></li>
                                    </ul>
                                </div>
                                {/* Contact Widget */}
                                <div className="widget contact-widget mb-40">
                                    <h5 className="widget-title">Contact Us</h5>
                                    <form action="#">
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-user" /></span>
                                            <input type="text" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-envelope" /></span>
                                            <input type="email" placeholder="Enter email" />
                                        </div>
                                        <div className="input-group textarea">
                                            <span className="icon"><i className="fas fa-edit" /></span>
                                            <textarea placeholder="Enter message" defaultValue={""} />
                                        </div>
                                        <div className="text-center mt-20"><button type="submit" className="main-btn btn-filled">Get A
                  QUote</button></div>
                                    </form>
                                </div>
                                {/* Bannner Widget */}
                                <div className="widget banner-ad-widget">
                                    <img src={advimg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;