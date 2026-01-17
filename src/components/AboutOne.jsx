import React from "react";
import { Link } from "react-router-dom";

const AboutOne = () => {
  return (
    <div className="about-area-1 position-relative space-top">
      <div className="about1-shape-img1">
        <img
          className="about1-shape-img-1"
          src="assets/img/normal/about_shape1-1.jpg"
          alt="img"
        />
      </div>
      <div className="about1-shape-img2">
        <img
          className="about1-shape-img-2"
          src="assets/img/normal/about_shape1-2.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title">Achieve Your a of Business </h2>
                <p className="sec-text mb-35">
                  Use receiving aco growin number of currencies and get paid
                  like design receiving aco grow
                </p>
              </div>
              <div className="achive-about">
                <div className="achive-about_content">
                  <div className="achive-about_icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Strategic Solutions Pro</h3>
                    <p className="achive-about_text">
                      There are many variati of passages of engineer's
                      available. The majority have suffered alteration in
                      engineer's available.
                    </p>
                  </div>
                </div>
              </div>
              <div className="achive-about">
                <div className="achive-about_content">
                  <div className="achive-about_icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">
                      Performance Enhancement Partners
                    </h3>
                    <p className="achive-about_text">
                      There are many variati of passages of engineer's
                      available. The majority have suffered alteration in
                      engineer's available.
                    </p>
                  </div>
                </div>
              </div>
              <div className="btn-wrap mt-20">
                <Link to="/about" className="global-btn mt-xl-0 mt-20">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
