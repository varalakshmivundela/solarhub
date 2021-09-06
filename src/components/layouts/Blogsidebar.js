import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import authorimg from '../../assets/img/author.png';
// Ad Widget
import advimg from '../../assets/img/banner-widget.jpg';
// Insta
import insta1 from '../../assets/img/instagram/01.jpg';
import insta2 from '../../assets/img/instagram/02.jpg';
import insta3 from '../../assets/img/instagram/03.jpg';
import insta4 from '../../assets/img/instagram/04.jpg';
import insta5 from '../../assets/img/instagram/05.jpg';
import insta6 from '../../assets/img/instagram/06.jpg';
import insta7 from '../../assets/img/instagram/07.jpg';
import insta8 from '../../assets/img/instagram/08.jpg';
import insta9 from '../../assets/img/instagram/09.jpg';
// Popular Feeds
import recent1 from '../../assets/img/recent-post-wid/04.png';
import recent2 from '../../assets/img/recent-post-wid/05.png';
import recent3 from '../../assets/img/recent-post-wid/06.png';
// Popular Feeds
const popularfeeds = [
    { img: recent1, title: 'Lorem ipsum dolor sit cing elit, sed do.', date: '24th March 2020' },
    { img: recent2, title: 'Lorem ipsum dolor sit cing elit, sed do.', date: '24th March 2020' },
    { img: recent3, title: 'Lorem ipsum dolor sit cing elit, sed do.', date: '24th March 2020' },
];
// Categories
const categories = [
    { title: 'Business', count: 26 },
    { title: 'Damage', count: 26 },
    { title: 'Maintenance', count: 26 },
    { title: 'Roof', count: 26 },
    { title: 'Technology', count: 26 },
];
// socail-widget
const socailwidget = [
    { icon: 'fa-facebook-f', url: '/' },
    { icon: 'fa-twitter', url: '/' },
    { icon: 'fa-behance', url: '/' },
    { icon: 'fa-linkedin', url: '/' },
    { icon: 'fa-pinterest', url: '/' },
];
// Twitter Feeds
const twitterfeeds = [
    { tweet: 'Rescue - #Gutenberg ready @ SINGLE PLY SOLAR Theme for Creative Bloggers available on @ Kayak https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1', tweetdate: 'November 25, 2020' },
    { tweet: 'Rescue - #Gutenberg ready @ SINGLE PLY SOLAR Theme for Creative Bloggers available on @ Kayak https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1', tweetdate: 'November 25, 2020' },
    { tweet: 'Rescue - #Gutenberg ready @ SINGLE PLY SOLAR Theme for Creative Bloggers available on @ Kayak https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1', tweetdate: 'November 25z, 2020' },
];
// Instagram Feeds
const instafeeds = [
    { img: insta1 },
    { img: insta2 },
    { img: insta3 },
    { img: insta4 },
    { img: insta5 },
    { img: insta6 },
    { img: insta7 },
    { img: insta8 },
    { img: insta9 },
];
// Popular Tags
const tags = [
    { tag: 'Popular' },
    { tag: 'design' },
    { tag: 'Damage' },
    { tag: 'usability' },
    { tag: 'develop' },
    { tag: 'icon' },
    { tag: 'business' },
    { tag: 'consult' },
    { tag: 'kit' },
    { tag: 'Roof' },
    { tag: 'mouse' },
    { tag: 'tech' },
];

class Blogsidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* About Author Widget */}
                <div className="widget about-author-widget mb-40">
                    <h5 className="widget-title">About Me</h5>
                    <div className="author-box">
                        <img src={authorimg} alt="" />
                        <h6>Rosalina D. Willaimson</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore.</p>
                        <ul className="social-icon">
                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                            <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                            <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </div>
                {/* Search Widget */}
                <div className="widget search-widget mb-40">
                    <h5 className="widget-title">Search Objects</h5>
                    <form action="#">
                        <input type="text" placeholder="Search your keyword..." />
                        <button type="submit"><i className="far fa-search" /></button>
                    </form>
                </div>
                {/* Popular Post Widget */}
                <div className="widget popular-feeds mb-40">
                    <h5 className="widget-title">Popular Feeds</h5>
                    <div className="popular-feed-loop">
                        {popularfeeds.map((item, i) => (
                            <div className="single-popular-feed" key={i}>
                                <div className="feed-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="feed-desc">
                                    <h6><Link to="/blog-details">{item.title}</Link></h6>
                                    <span className="time"><i className="far fa-calendar-alt" /> {item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Categories Widget */}
                <div className="widget categories-widget mb-40">
                    <h5 className="widget-title">Categories</h5>
                    <ul>
                        {categories.map((item, i) => (
                            <li key={i}>
                                <Link to="/blog-details">{item.title}<span>{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Social Icon Widget */}
                <div className="widget socail-widget mb-40">
                    <h5 className="widget-title">Never Miss News</h5>
                    <ul>
                        {socailwidget.map((item, i) => (
                            <li key={i}>
                                <Link to={item.url}><i className={"fab " + item.icon + ""} /></Link>
                            </li>
                        ))}
                    </ul>
                </div >
                {/* Twitter Feeds Widget */}
                < div className="widget twitter-feed-widget mb-40" >
                    <h5 className="widget-title">Twitter Feeds</h5>
                    <ul>
                        {twitterfeeds.map((item, i) => (
                            <li key={i}>
                                <Link to="/">
                                    {item.tweet}
                                </Link>
                                <span className="date">{item.tweetdate}</span>
                            </li>
                        ))}
                    </ul >
                </div >
                {/* Instagram Feeds Widget */}
                < div className="widget instagram-feed-widget mb-40" >
                    <h5 className="widget-title">Instagram Feeds</h5>
                    <ul>
                        {instafeeds.map((item, i) => (
                            <li key={i}>
                                <img src={item.img} alt="" />
                            </li>
                        ))}
                    </ul >
                </div >
                {/* Popular Tags Widget */}
                < div className="widget popular-tag-widget mb-40" >
                    <h5 className="widget-title">Popular Tags</h5>
                    <ul>
                        {tags.map((item, i) => (
                            <li key={i}>
                                <Link to="/blog-details">{item.tag}</Link>
                            </li>
                        ))}
                    </ul >
                </div >
                {/* Banner Ad Widget */}
                < div className="widget banner-ad-widget" >
                    <img src={advimg} alt="" />
                </div >
            </div >
        );
    }
}

export default Blogsidebar;