import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/laest-post/01.jpg';
import img2 from '../../../assets/img/laest-post/02.jpg';
import img3 from '../../../assets/img/laest-post/03.jpg';

const blogpost = [
    { img: img1, title: 'We’ll then ask you current  solar budget', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', date: '14th Aug 2020', comment: '10 Comments' },
    { img: img2, title: 'We’ll then ask you current  solar budget', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', date: '14th Aug 2020', comment: '10 Comments' },
    { img: img3, title: 'We’ll then ask you current  solar budget', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', date: '14th Aug 2020', comment: '10 Comments' },
];
class Blogpost extends Component {
    render() {
        return (
            <section className="latetest-post pt-120 pb-90">
                <div className="container">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">Blog</span>
                        <h2>news feeds</h2>
                    </div>
                    {/* Blog Loop */}
                    <div className="row justify-content-center">
                        {blogpost.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-10" key={i}>
                                <div className="latest-post-box mb-30 text-center">
                                    <ul className="post-meta">
                                        <li><Link to="/blog-details"><i className="fal fa-calendar-alt" />{item.date}</Link></li>
                                        <li><Link to="/blog-details"><i className="fal fa-comments" />{item.comment}</Link></li>
                                    </ul>
                                    <div className="post-img mb" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                    <div className="post-desc mt-35">
                                        <h3><Link to="/blog-details">{item.title}</Link></h3>
                                        <p>{item.text}</p>
                                        <Link to="/blog-details" className="post-link"> Read More </Link>
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

export default Blogpost;