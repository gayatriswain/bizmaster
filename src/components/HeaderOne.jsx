import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let offCanvasNav = document.getElementById("offcanvas-navigation");
    let offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    let menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    let numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 250) {
        setScroll(false);
      } else if (window.pageYOffset > 250) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  const searchControl = (active) => {
    setSearch(active);
  };

  const sidebarControl = (active) => {
    setSidebar(active);
  };

  return (
    <>
      <div
        className={`sidemenu-wrapper sidemenu-info ${sidebar ? "show" : ""} `}
      >
        <div className="sidemenu-content">
          <button
            className="closeButton sideMenuCls"
            onClick={() => sidebarControl(false)}
          >
            <i className="fas fa-times" />
          </button>
          <div className="widget  ">
            <div className="th-widget-about">
              <div className="about-logo">
                <Link to="/">
                  <img src="assets/img/logo.svg" alt="Laun" />
                </Link>
              </div>
              <p className="about-text">
                We provide specialized winterization services to safeguard your
                pool during the off-season, and when spring arrives, we handle
                the thorough opening process.
              </p>
              <div className="social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link to="#">
                  <i className="fab fa-whatsapp" />
                </Link>
              </div>
            </div>
          </div>
          <div className="side-info mb-30">
            <div className="contact-list mb-20">
              <h4>Office Address</h4>
              <p>1212, Lav Vegas, The Veg Street, USA</p>
            </div>
            <div className="contact-list mb-20">
              <h4>Phone Number</h4>
              <p className="mb-0">+880 123 45 67 89</p>
              <p>+880 765 86 43 85</p>
            </div>
            <div className="contact-list mb-20">
              <h4>Email Address</h4>
              <p className="mb-0">yourmail@gmail.com</p>
              <p>example.mail@hum.com</p>
            </div>
          </div>
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
      <div className={`popup-search-box ${search === true ? "show" : ""} `}>
        <button className="searchClose" onClick={() => searchControl(false)}>
          <i className="fas fa-times" />
        </button>
        <form>
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
      {/*==============================
    Mobile Menu
    ============================== */}
      <div className={`mobile-menu-wrapper ${active ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <div className="mobile-logo">
            <Link to="/">
              <img src="assets/img/logo.svg" alt="Bizmaster" />
            </Link>
            <button className="menu-toggle" onClick={mobileMenu}>
              <i className="fa fa-times" />
            </button>
          </div>
          <div className="mobile-menu">
            <ul id="offcanvas-navigation">
              <li >
                <Link to="/">Home</Link>
               
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li className="menu-item-has-children">
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/pricing">Pricing Page</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/team-details">Team Details</Link>
                  </li>
                </ul>
              </li> */}
              <li className="menu-item-has-children">
                <Link to="#">Project</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/project">Projects</Link>
                  </li>
                  <li>
                    <Link to="/project-details">Project Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Service</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Area */}

      <header className="nav-header header-layout1">
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          {/* Main Menu Area */}
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img src="assets/img/logo.svg" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-auto ms-xl-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                  
                    </li>

                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Services</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/service">Service</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Service Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Projects</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/project">Projects</Link>
                        </li>
                        <li>
                          <Link to="/project-details">Projects Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/pricing">Pricing Page</Link>
                        </li>
                        <li>
                          <Link to="/team">Team</Link>
                        </li>
                        <li>
                          <Link to="/team-details">Team Details</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Page</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto ms-xxl-4 d-xl-block d-none">
                <div className="header-wrapper">
                  <div className="header-button">
                    <button
                      type="button"
                      onClick={() => searchControl(true)}
                      className="simple-icon searchBoxToggler"
                    >
                      <i className="fas fa-search" />
                    </button>
                    <button
                      onClick={() => sidebarControl(true)}

                      className="simple-icon sideMenuToggler d-none d-lg-block"
                    >
                      <img src="assets/img/icon/bars.svg" alt="Bizmaster" />
                    </button>
                  </div>
                  <div className="social-links">
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
