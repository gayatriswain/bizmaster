import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const TestimonialTwo = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialTwo-icon-box-next">
        <button
          onClick={onClick}
          className="slick-arrow style2 default team-slider2-next"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialTwo-icon-box-prev">
        <button
          onClick={onClick}
          className="team-slider2 slick-arrow style2 default team-slider2-prev"
        >
          <i className="fas fa-arrow-left" />
        </button>
      </div>
    );
  }

  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="testimonial-area-2 space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Clients Testimonial
              </span>
              <h2 className="sec-title style2">
                Provide quality a the Services
              </h2>
              <p className="sec-text">
                Lorem Ipsum is simply dummy a of the printing and type setting
                industry Loreaim Ipsum has been
              </p>
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
          <div className="col-lg-7">
            <div className="testiomonial-wrap-2">
              <div className="row global-carousel slider-shadow testi-slider-2">
                <Slider {...settings}>
                  <div>
                    <div className="testi-box">
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote2-1.svg" alt="img" />
                      </div>
                      <div className="testi-box_content">
                        <p className="testi-box_text">
                          There are many variations of passage of Lorem Ipsum
                          available, but the major have suffered There are many
                          variations of passages of Lorem Ipsum available, but
                          the majority have suffered alteration
                        </p>
                        <div className="testi-box-profile">
                          <div className="testi-box-profile-details">
                            <h4 className="testi-profile-title">
                              Starli shaine
                            </h4>
                          </div>
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testimonial-2-1.png"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-box">
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote2-1.svg" alt="img" />
                      </div>
                      <div className="testi-box_content">
                        <p className="testi-box_text">
                          There are many variations of passage of Lorem Ipsum
                          available, but the major have suffered There are many
                          variations of passages of Lorem Ipsum available, but
                          the majority have suffered alteration
                        </p>
                        <div className="testi-box-profile">
                          <div className="testi-box-profile-details">
                            <h4 className="testi-profile-title">
                              Starli shaine
                            </h4>
                          </div>
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testimonial-2-1.png"
                              alt="img"
                            />
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
    </div>
  );
};

export default TestimonialTwo;
