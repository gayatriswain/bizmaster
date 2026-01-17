import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const AboutThree = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <div className="about-area-3 space">
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center">
            <div className="col-xl-6">
              <div className="about-thumb3">
                <div className="img1">
                  <img src="assets/img/normal/about_3-1.jpg" alt="img" />
                </div>
                <div className="about-counter-wrap jump-reverse">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={20} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <p className="sec-desc">Years Experience</p>
                </div>
                <div className="social-links jump">
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style2">
                  Maximizing Through the Strategic
                </h2>
                <p className="sec-text mb-35">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus Urna fusce Et
                  purus duis sollicitudin dignissim habitant.{" "}
                </p>
              </div>
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Last mile delivery</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">90</span>%
                  </div>
                </div>
              </div>
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Last mile delivery</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">80</span>%
                  </div>
                </div>
              </div>
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Finished Work</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">95</span>%
                  </div>
                </div>
              </div>
              <div className="btn-wrap mt-50">
                <Link to="/about" className="global-btn mt-xl-0 mt-20">
                  Learn More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="bg-max-container bg-smoke radius-50">

          {/* Feature Area 4  */}

          <div className="feature-area-4 space">
            <div className="container">
              <div className="row align-items-end justify-content-between">
                <div className="col-lg-6">
                  <div className="title-area">
                    <span className="sub-title">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      Our Features
                    </span>
                    <h2 className="sec-title style2">
                      Partnering Business for Success
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa eu faucibus Urna fusce Et
                    purus duis sollicitudin dignissim habitant.{" "}
                  </p>
                </div>
              </div>
              <div className="row gy-40 justify-content-center">
                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      <Link to="/service-details">
                        Business Growth Catalyst
                      </Link>
                    </h4>
                    <p className="feature-card-text">
                      Et purus duis sollicitudin sed dignis sim habi tant.
                      Egestas nulla quis venenatis Et purus duis
                    </p>
                    <div className="btn-wrap">
                      <Link
                        to="/service-details"
                        className="global-btn style-border"
                      >
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      <Link to="/service-details">Strategic Solutions Pro</Link>
                    </h4>
                    <p className="feature-card-text">
                      Et purus duis sollicitudin sed dignis sim habi tant.
                      Egestas nulla quis venenatis Et purus duis
                    </p>
                    <div className="btn-wrap">
                      <Link
                        to="/service-details"
                        className="global-btn style-border"
                      >
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      <Link to="/service-details">
                        Profitability Maximizers
                      </Link>
                    </h4>
                    <p className="feature-card-text">
                      Et purus duis sollicitudin sed dignis sim habi tant.
                      Egestas nulla quis venenatis Et purus duis
                    </p>
                    <div className="btn-wrap">
                      <Link
                        to="/service-details"
                        className="global-btn style-border"
                      >
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-area-3 space-bottom overflow-hidden">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5">
                  <div className="title-area text-center">
                    <span className="sub-title">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      Latest service
                    </span>
                    <h2 className="sec-title style2">
                      Provide quality a the Services
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row gx-30 gy-30 justify-content-center">
                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card-icon">
                      <img
                        src="assets/img/icon/process-icon-1-1.svg"
                        alt="img"
                      />
                    </div>
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        <Link to="/service-details">Growth Acceler</Link>
                      </h4>
                      <p className="service-card_text">
                        Et purus duis sollicitudin se dign issim habi tant. Ege
                        st as nulla quis venenatis
                      </p>
                      <Link to="/service-details" className="link-btn">
                        Read More <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card-icon">
                      <img
                        src="assets/img/icon/process-icon-1-2.svg"
                        alt="img"
                      />
                    </div>
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        <Link to="/service-details">Networ Tructure </Link>
                      </h4>
                      <p className="service-card_text">
                        Et purus duis sollicitudin se dign issim habi tant. Ege
                        st as nulla quis venenatis
                      </p>
                      <Link to="/service-details" className="link-btn">
                        Read More <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card-icon">
                      <img
                        src="assets/img/icon/process-icon-1-3.svg"
                        alt="img"
                      />
                    </div>
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        <Link to="/service-details">IT Training most </Link>
                      </h4>
                      <p className="service-card_text">
                        Et purus duis sollicitudin se dign issim habi tant. Ege
                        st as nulla quis venenatis
                      </p>
                      <Link to="/service-details" className="link-btn">
                        Read More <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card-icon">
                      <img
                        src="assets/img/icon/process-icon-1-4.svg"
                        alt="img"
                      />
                    </div>
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        <Link to="/service-details">Technology solutions </Link>
                      </h4>
                      <p className="service-card_text">
                        Et purus duis sollicitudin se dign issim habi tant. Ege
                        st as nulla quis venenatis
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

          <div className="container">
            <div className="client-area-3 bg-theme2">
              <div className=" global-carousel">
                <Slider {...settings}>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-1.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-2.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-3.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-4.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-5.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-1.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-2.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-3.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-4.png" alt="img" />

                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="client-logo">

                      <img src="assets/img/client/3-5.png" alt="img" />

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

export default AboutThree;
