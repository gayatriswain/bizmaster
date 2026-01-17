import React from 'react'
import { Link } from 'react-router-dom'

const FooterThree = () => {
    return (
        <footer
            className="footer-wrapper footer-layout3"
            style={{ backgroundImage: "url(assets/img/bg/footer-bg3-1.png)" }}
        >
            <div className="container">
                <div className="widget-area">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget widget-about">
                                <div className="about-logo">
                                    <Link to="/">
                                        <img src="assets/img/logo-white.svg" alt="Bizmaster" />
                                    </Link>
                                </div>
                                <p className="footer-text mb-30 mt-30">
                                    It is a long established fact that a reader will be distracted
                                </p>
                                <div className="social-btn style2">
                                    <Link to="#" tabIndex={-1}>
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link to="#" tabIndex={-1}>
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link to="#" tabIndex={-1}>
                                        <i className="fab fa-instagram" />
                                    </Link>
                                    <Link to="#" tabIndex={-1}>
                                        <i className="fab fa-linkedin-in" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Services</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <Link to="/service">Reliable Rentals</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Golden Key Properties</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Swift Home Sales</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Elite Realty Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Our Office</h3>
                                <div className="widget-contact2">
                                    <div className="widget-contact-grid">
                                        <i className="fas fa-envelope" />
                                        <div className="contact-grid-details">
                                            <h6>
                                                <Link to="#">yourmail@gmail.com</Link>
                                                <p />
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="widget-contact-grid">
                                        <i className="fas fa-map-marker-alt" />
                                        <div className="contact-grid-details">
                                            <h6>
                                                3891 Ranchview Dr. Richardson, California
                                                <p />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Our newsletter</h3>
                                <p className="footer-text">
                                    Custom Software Development Tailored Solutions for Your{" "}
                                </p>
                                <form className="newsletter-form style3 mt-20">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email Address"
                                            required=""
                                        />
                                        <button type="submit" className="global-btn">
                                            <span className="icon">
                                                <i className="fa-sharp fas fa-paper-plane" />
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row gy-3 justify-content-lg-between justify-content-center">
                        <div className="col-auto align-self-center">
                            <p className="copyright-text text-center">
                                © <Link to="#">Bizmaster </Link> 2024 | All Rights Reserved
                            </p>
                        </div>
                        <div className="col-auto">
                            <div className="footer-links">
                                <Link to="/contact">Trams &amp; Condition</Link>
                                <Link to="/contact">Privacy Policy</Link>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterThree