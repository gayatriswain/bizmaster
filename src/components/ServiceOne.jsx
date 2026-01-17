import React from "react";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest service
              </span>
              <h2 className="sec-title style2">
                Empowering Business The Excellence
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gx-30 gy-30 justify-content-center">
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Efficiency Experts</Link>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Management Mastery</Link>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Success Accelerators</Link>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Growth and Innovation</Link>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
