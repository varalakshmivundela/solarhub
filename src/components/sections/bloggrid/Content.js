import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    render() {
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8 col-md-8 col-sm-10">
                            <div className="blog-loop">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Home Decoration</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Protecting Your Roof From Storm Damage.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Roof Designs</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Why solar Material Warrenties is Important?.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Roof Designs</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Roof Designs</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Home Decoration</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Roof Designs</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Home Decoration</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Expert's Opinion</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Roof Designs</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Business</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">Consider we have two screens of the ui app, the
                                                first
                      screen has instructions.</Link></h4>
                                                <p>Too much data and forcing the brain to accommodate all these data frustrate
                                                the user
                                                and leads them to abandon the task. The short term memory of our brain has.
                  </p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="post-grid-box mb-30">
                                            <ul className="post-cat">
                                                <li><Link to="/blog-details">Roof Designs</Link></li>
                                            </ul>
                                            <div className="post-desc">
                                                <h4><Link to="/blog-details">All these data frustrate the user and leads.</Link>
                                                </h4>
                                                <p>Too much data and forcing the brain to accommodate all these data fru strate
                                                the user
                    and leads them.</p>
                                            </div>
                                            <ul className="post-meta">
                                                <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />14th Aug 2020</Link></li>
                                                <li><Link to="/blog-details"><i className="fal fa-comments" />10 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;