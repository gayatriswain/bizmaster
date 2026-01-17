import React from "react";
import { Link } from "react-router-dom";

const HeroThree = () => {
  return (
    <div
      className="hero-wrapper bg-smoke hero-3"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_3_1.png)" }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-image-wrapp">
              <div className="hero-thumb text-center">
                <img src="assets/img/hero/hero_thumb_3_1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-style3">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Growth Accel erato
              </span>
              <h1 className="hero-title">
                Your <span className="fw-normal">Growth</span> Catalyst{" "}
                <span className="fw-normal">Our Expertise</span>
              </h1>
              <p className="hero-text">
                A business consultant is a professional who provides expert
                advice and guidance to businesses
              </p>
              <div className="btn-wrap">
                <div className="hero-card_wrapper">
                  <div className="hero-card">
                    <div className="hero-card_icon">
                      <img src="assets/img/icon/1.svg" alt="img" />
                    </div>
                    <div className="hero-card_content">
                      <h4 className="box-title">Growth Acceler</h4>
                      <p className="hero-card_text">A business consultant</p>
                    </div>
                  </div>
                </div>
                <div className="feature-wrapper">
                  <div className="feature-icon">
                    <Link to="#">
                      <img src="assets/img/icon/call.svg" alt="Bizmaster" />
                    </Link>
                  </div>
                  <div className="media-body">
                    <span className="header-info_label">Need help?</span>
                    <p className="header-info_link">
                      <Link to="#">(319) 555-0115</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
