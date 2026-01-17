import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <div className="about-logo">
                  <Link to="/">
                    <img src="assets/img/logo.svg" alt="Bizmaster" />
                  </Link>
                </div>
                <p className="footer-text mb-30">
                  Lorem ips dolor amet, consectetur sell adipis elit phase
                  ellentes{" "}
                </p>
                <div className="social-btn style3">
                  <span className="social-title">Follow Us</span>
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="#">
                          debra.holt@example.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <h6>
                        3891 Ranchview Dr. Richardson, California 62639
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="working-time">
                      <span className="title">Open Hour</span>
                      <p className="desc">
                        We are open from Monday to Friday 09.00 AM - 17.00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/service">Software Corner</Link>
                    </li>
                    <li>
                      <Link to="/service">Application Center</Link>
                    </li>
                    <li>
                      <Link to="/service">Research Section</Link>
                    </li>
                    <li>
                      <Link to="/service">Developing Corner</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Latest Gallery</h3>
                <ul className="side-instagram list-wrap">
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/1.jpg" alt="Bizmaster" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/2.jpg" alt="Bizmaster" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/3.jpg" alt="Bizmaster" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/4.jpg" alt="Bizmaster" />
                    </Link>
                  </li>
                </ul>
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
                © <Link to="#">Bizmaster</Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Tarms &amp; Condition</Link>
                <Link to="/contact">Privacy Policy</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
