import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';

import blogthumb from '../../../assets/img/details/blog-thub.jpg';
import blogimg from '../../../assets/img/details/05.jpg';
import gridicon from '../../../assets/img/details/grid-icon.png';
import authorimg from '../../../assets/img/details/author.jpg';
import comment1 from '../../../assets/img/details/comment-1.jpg';
import comment2 from '../../../assets/img/details/comment-2.jpg';
import comment3 from '../../../assets/img/details/comment-3.jpg';
import relimg1 from '../../../assets/img/details/related-post-1.jpg';
import relimg2 from '../../../assets/img/details/related-post-2.jpg';

// Related Tags
const reltags = [
    { tag: 'Popular' },
    { tag: 'desgin' },
    { tag: 'solar' },
];
// socialshare
const socialshare = [
    { icon: 'fa-facebook-f', url: '/' },
    { icon: 'fa-twitter', url: '/' },
    { icon: 'fa-behance', url: '/' },
    { icon: 'fa-linkedin', url: '/' },
    { icon: 'fa-pinterest', url: '/' },
];
// Related Post
const relatedpost = [
    { img: relimg1, title: 'Why solar Material Warrenties is Important?', text: 'Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.', date: '24th March 2019' },
    { img: relimg2, title: 'Roof Inspection and related process outcomes and benefits.', text: 'Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.', date: '24th March 2019' },
];

class Content extends Component {
    render() {
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8">
                            <div className="blog-details-box">
                                <div className="entry-content">
                                    <Link to="/blog-details" className="cat">Maintenance</Link>
                                    <h2 className="title">Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.
            </h2>
                                    <ul className="post-meta">
                                        <li><Link to="/blog-details"><i className="far fa-user" />by Piklo D. Sindom</Link></li>
                                        <li><Link to="/blog-details"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                                        <li><Link to="/blog-details"><i className="far fa-comments" />35 Comments</Link></li>
                                    </ul>
                                    <p className="mb-30">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                                        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
                                    <figure className="mt-45 mb-45">
                                        <img src={blogthumb} alt="" />
                                    </figure>
                                    <h3 className="subtitle"> A cleansing hot shower or bath</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>
                                    <div className="line" />
                                    <h3 className="subtitle">Setting the mood with incense</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>
                                    <div className="line" />
                                    <h3 className="subtitle">Setting the mood with incense</h3>
                                    <ul className="list-icon">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                    </ul>
                                    <blockquote className="mt-40 mb-40">
                                        <span className="quote-by">by Hetmayar</span>
              Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug
              pitchfork post-ironic.
            </blockquote>
                                    <p className="mb-30">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium.
            </p>
                                    <div className="row align-items-center">
                                        <div className="col-md-5 mb-30">
                                            <img src={blogimg} alt="" />
                                        </div>
                                        <div className="col-md-7 mb-30">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                </p>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem.
            </p>
                                </div>
                                <div className="entry-footer">
                                    <div className="tag-and-share mt-50 mb-50 d-md-flex align-items-center justify-content-between">
                                        <div className="tag">
                                            <h5>Related Tags</h5>
                                            <ul>
                                                {reltags.map((item, i) => (
                                                    <li key={i}>
                                                        <Link to="/blog-details">{item.tag}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="share text-md-right">
                                            <h5>Social Share</h5>
                                            <ul>
                                                {socialshare.map((item, i) => (
                                                    <li key={i}>
                                                        <Link to={item.url}><i className={"fab " + item.icon + ""} /></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post-nav d-md-flex align-items-center justify-content-between">
                                        <div className="prev-post">
                                            <span>Prev Post</span>
                                            <Link to="/blog-details">Tips On Minimalist</Link>
                                        </div>
                                        <span className="icon">
                                            <img src={gridicon} alt="" />
                                        </span>
                                        <div className="next-post">
                                            <span>Next Post</span>
                                            <Link to="/blog-details">Less Is More</Link>
                                        </div>
                                    </div>
                                    <div className="related-post mt-50">
                                        <h3 className="mb-30">Releted Post</h3>
                                        <div className="row">
                                            {relatedpost.map((item, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <div className="related-post-box mb-50">
                                                        <div className="thumb" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                                        </div>
                                                        <div className="desc">
                                                            <Link to="/blog-details" className="date"><i className="far fa-calendar-alt" />{item.date}</Link>
                                                            <h4><Link to="/blog-details">{item.title}</Link></h4>
                                                            <p>{item.text}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={authorimg} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Written by</span>
                                            <h3>Hilixer D. Dilimmah</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation is enougn for today.
                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-template">
                                    <h3 className="box-title">03 Comments</h3>
                                    <ul className="comments-list mb-40">
                                        <li>
                                            <div className="comment-img">
                                                <img src={comment1} alt="" />
                                            </div>
                                            <div className="comment-desc">
                                                <div className="desc-top">
                                                    <h6>Rosalina Kelian</h6>
                                                    <span className="date">19th May 2018</span>
                                                    <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                  </p>
                                            </div>
                                            <ul className="children">
                                                <li>
                                                    <div className="comment-img">
                                                        <img src={comment2} alt="" />
                                                    </div>
                                                    <div className="comment-desc">
                                                        <div className="desc-top">
                                                            <h6>Rosalina Kelian</h6>
                                                            <span className="date">19th May 2018</span>
                                                            <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat.
                      </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comment-img">
                                                <img src={comment3} alt="" />
                                            </div>
                                            <div className="comment-desc">
                                                <div className="desc-top">
                                                    <h6>Rosalina Kelian</h6>
                                                    <span className="date">19th May 2018</span>
                                                    <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                  </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 className="box-title">03 Comments</h3>
                                    <div className="comment-form">
                                        <form action="#">
                                            <div className="input-group textarea mb-20">
                                                <textarea placeholder="Type your comments...." defaultValue={""} />
                                                <div className="icon"><i className="fas fa-pen" /></div>
                                            </div>
                                            <div className="input-group mb-20">
                                                <input type="text" placeholder="Type your Name...." />
                                                <div className="icon"><i className="fas fa-user" /></div>
                                            </div>
                                            <div className="input-group mb-20">
                                                <input type="email" placeholder="Type your email...." />
                                                <div className="icon"><i className="fas fa-envelope" /></div>
                                            </div>
                                            <div className="input-group mb-20">
                                                <input type="url" placeholder="Type your Website...." />
                                                <div className="icon"><i className="fas fa-globe" /></div>
                                            </div>
                                            <div className="input-group mt-30">
                                                <button type="submit" className="main-btn btn-filled"><i className="far fa-comments" /> Post Comment</button>
                                            </div>
                                        </form>
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