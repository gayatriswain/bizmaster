import React from "react";
import { Link } from "react-router-dom";

const PricingOne = () => {
  return (
    <div className="pricing-area-2 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area text-center me-xl-4 ms-xl-4">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Our Pricing
              </span>
              <h2 className="sec-title style2">
                Achieve Your Goal of Business
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-5 justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="pricing-card">
              <div className="pricing-card-price-wrap">
                <h3 className="pricing-card_price">
                  <span className="currency">$</span>32
                  <span className="duration">/month</span>
                </h3>
              </div>
              <div className="pricing-card-icon-wrap">
                <h4 className="pricing-card_title">Consult</h4>
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-1.svg" alt="img" />
                </div>
              </div>
              <div className="pricing-card-details">
                <div className="checklist">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Mistakes To Avoid
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Your Startup
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Knew About Fonts
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Winning Metric for Your Startup
                    </li>
                  </ul>
                </div>
                <Link className="global-btn" to="/contact">
                  Get Now <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="pricing-card">
              <div className="pricing-card-price-wrap">
                <h3 className="pricing-card_price">
                  <span className="currency">$</span>25
                  <span className="duration">/month</span>
                </h3>
              </div>
              <div className="pricing-card-icon-wrap">
                <h4 className="pricing-card_title">Basic</h4>
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-2.svg" alt="img" />
                </div>
              </div>
              <div className="pricing-card-details">
                <div className="checklist">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Mistakes To Avoid
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Your Startup
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Knew About Fonts
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Winning Metric for Your Startup
                    </li>
                  </ul>
                </div>
                <Link className="global-btn" to="/contact">
                  Get Now <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="pricing-card">
              <div className="pricing-card-price-wrap">
                <h3 className="pricing-card_price">
                  <span className="currency">$</span>25
                  <span className="duration">/month</span>
                </h3>
              </div>
              <div className="pricing-card-icon-wrap">
                <h4 className="pricing-card_title">Pro</h4>
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-3.svg" alt="img" />
                </div>
              </div>
              <div className="pricing-card-details">
                <div className="checklist">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Mistakes To Avoid
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Your Startup
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Knew About Fonts
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Winning Metric for Your Startup
                    </li>
                  </ul>
                </div>
                <Link className="global-btn" to="/contact">
                  Get Now <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingOne;
