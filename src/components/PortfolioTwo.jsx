import React from "react";
import { Link } from "react-router-dom";

const PortfolioTwo = () => {
  return (
    <div className="portfolio-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest Portfolio
              </span>
              <h2 className="sec-title style2">
                Transform Your Business with Professional{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30 gx-30 masonary-active">
          <div className="col-md-auto filter-item">
            <div className="portfolio-box">
              <div className="portfolio-box-thumb">
                <img src="assets/img/portfolio/2-1.png" alt="img" />
              </div>
              <div className="portfolio-box-details">
                <div className="media-left">
                  <span className="portfolio-box-details_subtitle">
                    Nemo enim ipsam
                  </span>
                  <h4 className="portfolio-box-details_title">
                    <Link to="/project-details">Bank Management</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-auto filter-item">
            <div className="portfolio-box">
              <div className="portfolio-box-thumb">
                <img src="assets/img/portfolio/2-2.png" alt="img" />
              </div>
              <div className="portfolio-box-details">
                <div className="media-left">
                  <span className="portfolio-box-details_subtitle">
                    Nemo enim ipsam
                  </span>
                  <h4 className="portfolio-box-details_title">
                    <Link to="/project-details">Bank Management</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-auto filter-item">
            <div className="portfolio-box">
              <div className="portfolio-box-thumb">
                <img src="assets/img/portfolio/2-3.png" alt="img" />
              </div>
              <div className="portfolio-box-details">
                <div className="media-left">
                  <span className="portfolio-box-details_subtitle">
                    Nemo enim ipsam
                  </span>
                  <h4 className="portfolio-box-details_title">
                    <Link to="/project-details">Bank Management</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-auto filter-item">
            <div className="portfolio-box">
              <div className="portfolio-box-thumb">
                <img src="assets/img/portfolio/2-4.png" alt="img" />
              </div>
              <div className="portfolio-box-details">
                <div className="media-left">
                  <span className="portfolio-box-details_subtitle">
                    Nemo enim ipsam
                  </span>
                  <h4 className="portfolio-box-details_title">
                    <Link to="/project-details">Bank Management</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-auto filter-item">
            <div className="portfolio-box">
              <div className="portfolio-box-thumb">
                <img src="assets/img/portfolio/2-5.png" alt="img" />
              </div>
              <div className="portfolio-box-details">
                <div className="media-left">
                  <span className="portfolio-box-details_subtitle">
                    Nemo enim ipsam
                  </span>
                  <h4 className="portfolio-box-details_title">
                    <Link to="/project-details">Bank Management</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTwo;
