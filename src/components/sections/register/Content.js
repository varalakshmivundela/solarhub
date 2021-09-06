import React, { Component } from 'react';


class Content extends Component {
    render() {
        return (
           
            <section className="contact-section with-map-bg pt-120 pb-120">
           <div classname="container">
                 <div className="col-lg-5 col-md-5">
                                <div className="contact-form">
                                    <form action="#">
                                        <div className="row padding-custom">
                                            <div className="col-12  ">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-user" />
                                                    </div>
                                                    <input type="text" placeholder="Your name" />
                                                </div>
                                            </div>
                                            {/* <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <input type="text" placeholder="Your email" />
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <input type="text" placeholder="Your email" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group textarea mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-edit" />
                                                    </div>
                                                    <textarea placeholder="Enter message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="main-btn btn-filled">Register</button>
                                            </div>
                                        </div>
                                    </form>
                         </div>
                 </div>
            </div>
            </section>
        );
    }

}
    
    export default Content;
