import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const PortfolioThree = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="portfolio-area-3 space">
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Latest Portfolio
                </span>
                <h2 className="sec-title style2">
                  Guiding Businesses Toward Success
                </h2>
              </div>
            </div>
            <div className="col-lg-auto">
              <div className="btn-wrap mb-60">
                <Link to="/project" className="global-btn mt-xl-0 mt-20">
                  View More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row gx-30 gy-30">
            <div className="col-lg-6">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="assets/img/portfolio/3-1.png" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Your Business Goals with the Confidence
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="assets/img/portfolio/3-2.png" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Your Business Goals with the Confidence
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="assets/img/portfolio/3-3.png" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Your Business Goals with the Confidence
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="assets/img/portfolio/3-4.png" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Your Business Goals with the Confidence
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="bg-max-container bg-theme radius-50">
          <div className="team-area-1 space">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="title-area text-center">
                    <span className="sub-title text-white">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      Our Team
                    </span>
                    <h2 className="sec-title style2 text-white">
                      Empowering Your Business Success{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row gx-30 global-carousel team-slider3">
                <Slider {...settings}>
                  <div className="team-padding">
                    <div className="team-card style2">
                      <div className="team-card_img">
                        <img src="assets/img/team/team-1-1.png" alt="img" />
                      </div>
                      <div className="team-card_wrapp">
                        <div className="team-card_content">
                          <h4 className="team-card_title">
                            <Link to="/team-details">Savannah Nguyen</Link>
                          </h4>
                          <span className="team-card_desig">
                            Medical Assistant
                          </span>
                        </div>
                        <div className="team-social">
                          <div className="plus-btn">
                            <img src="assets/img/icon/share.svg" alt="icon" />
                          </div>
                          <div className="global-social">
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-instagram" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-padding">
                    <div className="team-card style2">
                      <div className="team-card_img">
                        <img src="assets/img/team/team-1-2.png" alt="img" />
                      </div>
                      <div className="team-card_wrapp">
                        <div className="team-card_content">
                          <h4 className="team-card_title">
                            <Link to="/team-details">Darrell Steward</Link>
                          </h4>
                          <span className="team-card_desig">
                            Human Resource
                          </span>
                        </div>
                        <div className="team-social">
                          <div className="plus-btn">
                            <img src="assets/img/icon/share.svg" alt="icon" />
                          </div>
                          <div className="global-social">
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-instagram" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-padding">
                    <div className="team-card style2">
                      <div className="team-card_img">
                        <img src="assets/img/team/team-1-3.png" alt="img" />
                      </div>
                      <div className="team-card_wrapp">
                        <div className="team-card_content">
                          <h4 className="team-card_title">
                            <Link to="/team-details">Javed Tanvir</Link>
                          </h4>
                          <span className="team-card_desig">
                            Medical Assistant
                          </span>
                        </div>
                        <div className="team-social">
                          <div className="plus-btn">
                            <img src="assets/img/icon/share.svg" alt="icon" />
                          </div>
                          <div className="global-social">
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-instagram" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-padding">
                    <div className="team-card style2">
                      <div className="team-card_img">
                        <img src="assets/img/team/team-1-1.png" alt="img" />
                      </div>
                      <div className="team-card_wrapp">
                        <div className="team-card_content">
                          <h4 className="team-card_title">
                            <Link to="/team-details">Savannah Nguyen</Link>
                          </h4>
                          <span className="team-card_desig">
                            Medical Assistant
                          </span>
                        </div>
                        <div className="team-social">
                          <div className="plus-btn">
                            <img src="assets/img/icon/share.svg" alt="icon" />
                          </div>
                          <div className="global-social">
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-instagram" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-padding">
                    <div className="team-card style2">
                      <div className="team-card_img">
                        <img src="assets/img/team/team-1-2.png" alt="img" />
                      </div>
                      <div className="team-card_wrapp">
                        <div className="team-card_content">
                          <h4 className="team-card_title">
                            <Link to="/team-details">Darrell Steward</Link>
                          </h4>
                          <span className="team-card_desig">
                            Human Resource
                          </span>
                        </div>
                        <div className="team-social">
                          <div className="plus-btn">
                            <img src="assets/img/icon/share.svg" alt="icon" />
                          </div>
                          <div className="global-social">
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-twitter" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-instagram" />
                            </Link>
                            <Link to="#" tabIndex={0}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioThree;
