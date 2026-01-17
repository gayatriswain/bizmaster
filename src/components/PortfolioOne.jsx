import React from "react";
import { Link } from "react-router-dom";

const PortfolioOne = () => {
  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest Portfolio
              </span>
              <h2 className="sec-title style2">
                Transform Business with Guidance
              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-30">
          <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-1.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Development Coaches
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Digital Transformation Advisors
                    </Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-2.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Success Accelerators
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Transformational Strategy Advisors
                    </Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-3.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Efficiency Experts
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Marketing and Branding Consultants
                    </Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-4.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Profitability Maximizers
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Market Analysis and Strategy
                    </Link>
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

export default PortfolioOne;
