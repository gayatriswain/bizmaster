import React from 'react'
import { Link } from 'react-router-dom'

const FooterFour = () => {
    return (
        <section className='bg-dark'>
            <footer
                className="footer-wrapper footer-layout4"
                style={{ backgroundImage: "url(assets/img/bg/footer-bg4-1.png)" }}
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
                                    <div className="social-btn">
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
                                    <h3 className="widget_title">About Company</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li>
                                                <Link to="/service">Service</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Service</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                        </ul>
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
                                            <i className="fas fa-phone-alt text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <Link to="#">+880 123 45 67 89</Link>
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-envelope text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <Link to="#">yourmail@gmail.com</Link>
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-map-marker-alt text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    1212, Lav Vegas, The Veg <br /> Street, USA
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
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

        </section>
    )
}

export default FooterFour