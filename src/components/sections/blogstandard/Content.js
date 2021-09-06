import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from '../../layouts/Pagination';
import $ from 'jquery';
import 'magnific-popup';

import author from '../../../assets/img/author-small.png';
import blogimg1 from '../../../assets/img/blog/01.jpg';
import blogimg2 from '../../../assets/img/blog/02.jpg';
import blogimg3 from '../../../assets/img/blog/03.jpg';
import blogimg6 from '../../../assets/img/blog/06.jpg';

class Content extends Component {
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
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8 col-md-10">
                            <div className="blog-loop">
                                <div className="post-standard-box mb-40">
                                    <div className="post-media">
                                        <img src={blogimg1} alt="" />
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/blog-details" className="cat">Maintenance</Link>
                                        <h2>
                                            <Link to="/blog-details">Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod
                  tempor.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/blog-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/blog-details">
                                                    <img src={author} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/blog-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-standard-box with-video mb-40">
                                    <div className="post-media">
                                        <img src={blogimg2} alt="" />
                                        <Link to="https://www.youtube.com/embed/pbiEfJd2Hpw" className="play-icon popup-youtube"><i className="fas fa-play" /></Link>
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/blog-details" className="cat">Maintenance</Link>
                                        <h2>
                                            <Link to="/blog-details">Adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/blog-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/blog-details">
                                                    <img src={author} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/blog-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-standard-box mb-40">
                                    <div className="post-media">
                                        <img src={blogimg3} alt="" />
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/blog-details" className="cat">Maintenance</Link>
                                        <h2>
                                            <Link to="/blog-details">Magna aliqua. Ut enim ad minim venia
                  m, quis nostrud exercitation ullamco</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/blog-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/blog-details">
                                                    <img src={author} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/blog-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-standard-box sound-cloud-post mb-40">
                                    <div className="post-media">
                                        <img src={blogimg6} alt="" />
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/blog-details" className="cat">Maintenance</Link>
                                        <h2>
                                            <Link to="/blog-details">Laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/blog-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/blog-details">
                                                    <img src={author} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/blog-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-standard-box no-thumb mb-40">
                                    <div className="post-desc">
                                        <Link to="/blog-details" className="cat">Maintenance</Link>
                                        <h2>
                                            <Link to="/blog-details">In reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/blog-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/blog-details">
                                                    <img src={author} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/blog-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-standard-box quote-post mb-40">
                                    <div className="post-desc">
                                        <h2>
                                            <Link to="/blog-details">Excepteur sint occaecat cupida
                  tat non proident, sunt in.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/blog-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-standard-box title-with-thumb mb-40">
                                    <div className="post-desc">
                                        <Link to="/blog-details" className="cat">Maintenance</Link>
                                        <h2>
                                            <Link to="/blog-details">Culpa qui officia deserunt mollit anim
                  id est laborum. Sed ut perspiciatis</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/blog-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Pagination />
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