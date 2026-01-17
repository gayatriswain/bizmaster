import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
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


  return (
    <>
      {/* Mobile Menu */}
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
              <li className="menu-item-has-children submenu-item-has-children">
                <Link to="/">Home</Link>
            
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
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
              </li>
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

      <header className="nav-header header-layout2">
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="assets/img/logo.svg" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <Link to="#">Home</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/">Home 01</Link>
                          </li>
                          <li>
                            <Link to="/home-2">Home 02</Link>
                          </li>
                          <li>
                            <Link to="/home-3">Home 03</Link>
                          </li>
                          <li>
                            <Link to="/home-4">Home 04</Link>
                          </li>
                          <li>
                            <Link to="/home-5">Home 05</Link>
                          </li>
                        </ul>
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
                      <li className="menu-item-has-children">
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
                      </li>
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
                <div className="col-auto d-xl-block d-none">
                  <div className="header-button">
                    <Link to="/contact" className="global-btn">
                      Get A Quote
                      <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
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

export default HeaderTwo;
