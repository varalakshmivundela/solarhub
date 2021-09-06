import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/team/01.jpg';
import img2 from '../../../assets/img/team/02.jpg';
import img3 from '../../../assets/img/team/03.jpg';
import img4 from '../../../assets/img/team/04.jpg';
import img5 from '../../../assets/img/team/05.jpg';

const teamblock = [
    { img: img1, name: 'Rosa D.William', post: 'Founder & CEO' },
    { img: img2, name: 'hilixer b. browni', post: 'co-founder' },
    { img: img3, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img4, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img5, name: 'pokoloko k. kilix', post: 'consultant' },
];

class Teamsection extends Component {
    render() {
        return (
            <section className="team-section pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center team-loop">
                        {teamblock.map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="member-box">
                                    <div className="member-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="member-info">
                                        <h3>{item.name}</h3>
                                        <span>{item.post}</span>
                                    </div>
                                    <Link to="#" className="socail-trigger">+</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Teamsection;