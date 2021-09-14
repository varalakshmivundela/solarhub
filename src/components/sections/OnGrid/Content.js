import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';
import ongrid from '../../../assets/img/solutions/on grid.jpg';
import ongridsystem from '../../../assets/img/solutions/on grid system.png';

class Content extends Component {
    render() {
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="section-title left-border mb-40">
                         <span className="title-tag">On-Grid System:</span>
                    </div>
                        <p>On-grid or grid-tie solar systems are by far the most common and widely used by homes and businesses. These systems do not need batteries and use either solar inverters or micro-inverters and are connected to the public electricity grid. Any excess solar power that you generate is exported to the electricity grid and you usually get paid a feed-in-tariff (FiT) or credits for the energy you export.</p><br></br>
                        <p>Unlike hybrid systems, on-grid solar systems are not able to function or generate electricity during a blackout due to safety reasons. Since blackouts usually occur when the electricity grid is damaged; If the solar inverter was still feeding electricity into a damaged grid it would risk the safety of the people repairing the fault/s in the network. Most hybrid solar systems with battery storage are able to automatically isolate from the grid (known as islanding) and continue to supply some power during a blackout.</p><br></br> 
                        <p>Batteries are able to be added to on-grid systems at a later stage if required. The Tesla Powerwall 2 is a popular AC battery system which can be added to an existing solar system.</p><br></br>
                        <div className="col-lg-8 col-md-10">
                            <div className="framework-img">
                            <img src={ongrid} alt="" />
                            </div>
                        </div>
    <h4>how on-grid or grid tie solar power system work:</h4><br/><br/>
 <p>In an on-grid system, this is what happens after electricity reaches the switchboard:</p><br></br>
 
 <p>The meter:Excess solar energy runs through the meter, which calculates how much power you are either exporting or importing (purchasing).</p><br></br>
 <p>Metering systems:work differently in many states and countries around the world. In this description I am assuming that the meter is only measuring the electricity being exported to the grid, as is the case in most of Australia. In some states, meters measure all solar electricity produced by your system, and therefore your electricity will run through your meter before reaching the switchboard and not after it. In some areas (currently in California), the meter measures both production and export, and the consumer is charged (or credited) for net electricity used over a month or year period. I will explain more about metering in a later blog.</p><br></br>
 <p>The electricity grid:Electricity that is sent to the grid from your solar system can then be used by other consumers on the grid (your neighbours). When your solar system is not operating, or you are using more electricity than your system is producing, you will start importing or consuming electricity from the grid.
 </p>

 <div className="col-lg-8 col-md-10">
                            <div className="framework-img">
                            <img src={ongridsystem} alt="" />
                            </div>
                        </div>
                    </div>
                    </div>

                </section>
        );
        }
}
export default Content;