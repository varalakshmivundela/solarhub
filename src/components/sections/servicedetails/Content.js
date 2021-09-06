import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap';

import serviceimg from '../../../assets/img/details/01.jpg';
import serviceimg1 from '../../../assets/img/details/02.jpg';
import advimg from '../../../assets/img/banner-widget-2.jpg';
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
            <section className="service-details-wrap pt-150 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="service-details">
                                <div className="thmb mb-50">
                                    <img src={serviceimg} alt="" />
                                </div>
                                <div className="details-text mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">roof consultancy</span>
                                        <h2>Dedicated solar Solutions with 25 Years Experience in this field.</h2>
                                    </div>
                                    <p className="mb-30">
                                        Once a business owner defined the needs to take a business to the next
                                        level, a decision maker will define a scope, cost and a time frame of the project.[1]
                                        The role of the IT consultancy company is to support and nurture the company from the
                                        very beginning of the project until the end, and deliver the project not only in the
                                        scope, time and cost but also with complete customer satisfaction.
            </p>
                                    <p>
                                        The scope of a project is linked intimately to the proposed business processes and
                                        systems that the project is going to deliver. Regardless of whether the project is to
                                        launch a new product range or discontinue unprofitable parts of the business, the change
                                        will have some impact on business processes and systems. The documentation of your
                                        business processes and system requirements are as fundamental to project scoping as an
                                        architects plans would be to the costing and scoping of the construction of a building.
                                        The most successful business projects are always those that are driven by an employee
                                        who has the authority, vision and influence to drive the required changes in a business.
                                        It is highly unlikely that a business owner (decision maker or similar) will realize the
                                        changes unless one has one of these people in the employment. However, the project
                                        leadership role typically requires significant experience and skills which are not
                                        usually found within a company focused on day-to-day operations. Due to this requirement
                                        within more significant business change projects/programs, outside expertise is often
                                        sought from firms which can bring this specific skill set to the company.
            </p>
                                </div>
                                <div className="feature-list-wrap mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">features</span>
                                        <h2>Why Choose Us</h2>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row align-items-center">
                                            <div className="col-sm-5">
                                                <div className="list-img">
                                                    <img src={serviceimg1} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-7">
                                                <div className="list-text">
                                                    <p>The most successful business projects are always those that are driven by
                                                    an employee who has the authority, vision and influence to drive the
                      required changes in a business.</p>
                                                    <ul>
                                                        <li><i className="fal fa-check" /> Advisory skills</li>
                                                        <li><i className="fal fa-check" /> Guaranteed skills</li>
                                                        <li><i className="fal fa-check" /> Interior skills</li>
                                                        <li><i className="fal fa-check" /> Business and management experts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">faq</span>
                                        <h2>get every answers here</h2>
                                    </div>
                                    <Accordion defaultActiveKey="0" className="faq-accordion faq-loop accordion" >
                                        <Card>
                                            <Accordion.Collapse eventKey="0" className="collapseparent">
                                                <Card.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    Under normal circumstances a fee for solar consulting ?
                                            </Accordion.Toggle>
                                            </Card.Header>
                                        </Card>
                                        <Card>
                                            <Accordion.Collapse eventKey="1" className="collapseparent">
                                                <Card.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                    Under normal circumstances a fee for solar consulting ?
                                            </Accordion.Toggle>
                                            </Card.Header>
                                        </Card>
                                        <Card>
                                            <Accordion.Collapse eventKey="2" className="collapseparent">
                                                <Card.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                                    Under normal circumstances a fee for solar consulting ?
                                            </Accordion.Toggle>
                                            </Card.Header>
                                        </Card>
                                        <Card>
                                            <Accordion.Collapse eventKey="3" className="collapseparent">
                                                <Card.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                                    Under normal circumstances a fee for solar consulting ?
                                            </Accordion.Toggle>
                                            </Card.Header>
                                        </Card>
                                        <Card>
                                            <Accordion.Collapse eventKey="4" className="collapseparent">
                                                <Card.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                                    Under normal circumstances a fee for solar consulting ?
                                            </Accordion.Toggle>
                                            </Card.Header>
                                        </Card>
                                    </Accordion>
                                </div>
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
                                        <li><Link to="/service-details"><i className="fas fa-file-pdf" />DOWNLOAD PDF FILE</Link></li>
                                        <li><Link to="/service-details"><i className="fas fa-file-powerpoint" />OUR ISO CERTIFICATES</Link></li>
                                        <li><Link to="/service-details"><i className="fas fa-file-image" />OUR ISO CERTIFICATES</Link></li>
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
            </section >
        );
    }
}

export default Content;