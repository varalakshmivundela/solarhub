import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Canvas from './Canvas';
import Menu from './Menu';
import classNames from 'classnames';

import logo from '../../assets/img/hub-logo.png';
class Headertwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasmethod: false,
            togglemethod: false,
        };
        this.openCanvas = this.openCanvas.bind(this);
        this.closeCanvas = this.closeCanvas.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }
    // Off Canvas
    openCanvas() {
        this.setState({
            canvasmethod: true
        });
    }
    closeCanvas() {
        this.setState({
            canvasmethod: false
        });
    }
    toggleClass() {
        this.setState({
            togglemethod: !this.state.togglemethod
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 110
            });
        }, false);
    }
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <header className={`header-absolute sticky-header ${stickyheader}`}>
                <div className="container-fluid custom-container-one">
                    <div className="header-top-area">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-sm-7">
                                <ul className="contact-list">
                                    <li><Link to="#">suresh@solarhind.com</Link></li>
                                    <li><Link to="#">+91-8686363068</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-5">
                                <ul className="social-link">
                                    <li><Link to="#">fb</Link></li>
                                    <li><Link to="#">tw</Link></li>
                                    <li><Link to="#">be</Link></li>
                                    <li><Link to="#">yu</Link></li>
                                    <li><Link to="#">li</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mainmenu-area">
                        <div className="d-flex align-items-center justify-content-between">
                            <nav className="main-menu">
                                <div className="logo">
                                    <Link to="/"><img src={logo} alt="" /></Link>
                                </div>
                                <div className={classNames("menu-items", { "menu-on": this.state.togglemethod })}>
                                    <Menu />
                                </div>
                            </nav>
                            <div className="main-right">
                                <Link to="/contact" className="main-btn btn-borderd">
                                    Get A Quote
          </Link>
                                <Link to="#" className="offcanvas-trigger" onClick={this.openCanvas}>
                                    <i className="far fa-ellipsis-v" />
                                </Link>
                                {/* OFF CANVAS WRAP START */}
                                <div className={classNames("off-canvas-wrap", { "show-off-canvas": this.state.canvasmethod })}>
                                    <div className={classNames("overly", { "show-overly": this.state.canvasmethod })} onClick={this.closeCanvas}>
                                    </div>
                                    <div className="off-canvas-widget">
                                        <Link to="#" className="off-canvas-close" onClick={this.closeCanvas}><i className="fal fa-times" /></Link>
                                        <Canvas />
                                    </div>
                                </div>
                                {/* OFF CANVAS WRAP END */}
                            </div>
                            {/* Mobile Trigger */}
                            <Link to="#" className={classNames("mobile-trigger", { "active": this.state.togglemethod })}  onClick={this.toggleClass}>
                                <span />
                                <span />
                                <span />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Headertwo;