import React, { Component } from 'react';
import offgrid from '../../../assets/img/solutions/OFF GRID.png';
import offgridsystem from '../../../assets/img/solutions/off grid system.png';
import hybridinverter from '../../../assets/img/solutions/hybrid inverter.jpg';

class Content extends Component {
    render() {
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-title left-border mb-40">
                            <span className="title-tag">Off Grid System:</span>
                        </div><br/>
                        <p>An off-grid system is not connected to the electricity grid and therefore requires battery storage. Off-grid solar systems must be designed appropriately so that they will generate enough power throughout the year and have enough battery capacity to meet the home’s requirements, even in the depths of winter when there is generally much less sunlight. </p><br/>
                        <p>The high cost of batteries and off-grid inverters means off-grid systems are much more expensive than on-grid systems and so are usually only needed in more remote areas that are far from the electricity grid. However battery costs are reducing rapidly, so there is now a growing market for off-grid solar battery systems even in cities and towns.</p><br/>
                        <div className="col-lg-8 col-md-10">
                            <div className="framework-img">
                            <img src={offgrid} alt="" />
                            </div>
                        </div>
                        <br/>
                        <p>There are different types of off-grid systems which we will go into more detail later, but for now I will keep it simple. The above diagram is for a larger AC coupled system. In smaller scale DC coupled systems, a solar charge controller is used to manage the battery charging, then the DC power is converted to AC using an off-grid inverter and sent to your home appliances.</p><br/>
                        <li> The battery bank:In an off-grid system there is no public electricity grid. Once solar power is used by the appliances in your property, any excess power will be sent to your battery bank. Once the battery is full it will stop receiving power from the solar system. When your solar system is not working (night time or cloudy days), your appliances will draw power from the batteries.</li><br/>
                        <li>Backup Generator: For times of the year when the batteries are low on charge and the weather is very cloudy you will generally need a backup power source, such as a backup generator or gen-set. The size of the gen-set (measured in kVA) should to be adequate to supply your house and charge the batteries at the same time.</li><br/>
                        <div className="col-lg-10 col-md-10">
                            <div className="framework-img">
                            <img src={offgridsystem} alt="" />
                            </div>
                        </div>
                        <br/><br/>
                        <div className="col-lg-12">
                            <p>An off-grid solar system will include:</p><br/>
                            <li>Solar panels and mounting kits for roof or ground mounting.</li><br/>
                            <li>Solar power inverter to turn DC Solar current into AC ‘mains’ current.</li><br/>
                            <li>DC (battery) to AC inverter for creating the power grid.</li><br/>
                            <li>Maintenance free batteries for efficient energy storage.</li><br/>
                            <li>CCGX (remote) monitoring panel so you can always see what’s going on</li><br/>
                            <li>Autostart generator for emergency backup.</li><br/>
                            <li>4G router to keep everything talking and online.</li><br/>
                            <li>Cables, fittings and fixings to put it all together.</li><br/>
                            <h6>Fully Off-grid:</h6><br/>
                            <p>Fully off-grid solar systems are not connected to the grid and are ideal for those who want to generate green energy or who require power where there is no connection or where cost prohibits a grid connection.
                                Complete off-grid solar systems include solar panels, panel mounts, batteries, power inverter and everything required to generate, store and deliver off-grid energy.</p><br/>
                            <h6>Partially Off-grid:</h6><br/>
                            <p>Partially off-grid solar systems are connected to the grid and can either supplement grid electricity or provide a green alternative with the grid as a backup. These systems are also useful where grid power is intermittent so your property always has the energy it needs.</p><br/>
                            <p>Partially off-grid solar systems include the same equipment as fully off-grid systems but also include the equipment necessary to integrate with mains electricity.</p><br/>
                            <p>Each off-grid system includes everything required to install, generate, store and deliver energy from renewable sources. </p><br/>            
                        </div>
                        <div className="section-title left-border mb-40">
                            <span className="title-tag">Hybrid System:</span>
                        </div><br/>
                        <div>
                            <p>Modern hybrid systems combine solar and battery storage in one and are now available in many different forms and configurations. Due to the decreasing cost of battery storage, systems that are already connected to the electricity grid can start taking advantage of battery storage as well. This means being able to store solar energy that is generated during the day and using it at night. When the stored energy is depleted, the grid is there as a back up, allowing consumers to have the best of both worlds. Hybrid systems are also able to charge the batteries using cheap off-peak electricity (usually after midnight to 6am).</p><br/>
                            <p>There are also different ways to design hybrid systems but we will keep it simple for now. To learn more about the different hybrid and off-grid power systems refer to our detailed guide to home solar battery systems.</p><br/>
                            <li>The battery bank: In a hybrid system once the solar power is used by the appliances in your property, any excess power will be sent to the battery bank. Once the battery bank is fully charged, it will stop receiving power from the solar system. The energy from the battery can then be discharged and used to power your home, usually during the peak evening period when the cost of electricity is typically at it’s highest.</li><br/>
                            <li>The meter and electricity grid: Depending on how your hybrid system is set up and whether your utility allows it, once your batteries are fully charged excess solar power not required by your appliances can be exported to the grid via your meter. When your solar system is not in use, and if you have drained the usable power in your batteries your appliances will then start drawing power from the grid.</li><br/>                        </div>
                            <div className="col-lg-10 col-md-10">
                            <div className="framework-img">
                            <img src={hybridinverter} alt="" />
                            </div>
                        </div>
                            <p>Simplified layout of a hybrid solar system</p>
                    </div>
                </div>

            </section>
        );
        }
}
export default Content;