import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const TeamTwo = () => {
  let settings = {
    dots: false,
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
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="team-area-2 space">
      <div className="container">
        <div className="row gx-30 justify-content-center">
          <div className="col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Our Team Member
              </span>
              <h2 className="sec-title style2">
                Strategic Solutions for Business Growth
              </h2>
            </div>
          </div>
          <div className="row gx-30 global-carousel team-slider2">
            <Slider {...settings}>
              <div className="p-3">
                <div className="team-box">
                  <div className="team-box_img">
                    <img src="assets/img/team/team-2-1.png" alt="img" />
                  </div>
                  <div className="team-box_content">
                    <h4 className="team-box_title">
                      <Link to="/team-details">Darlene Robertson</Link>
                    </h4>
                    <span className="team-box_desig">UI UX Designer</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="team-box">
                  <div className="team-box_img">
                    <img src="assets/img/team/team-2-2.png" alt="img" />
                  </div>
                  <div className="team-box_content">
                    <h4 className="team-box_title">
                      <Link to="/team-details">Cody Fisher</Link>
                    </h4>
                    <span className="team-box_desig">PHP Developer</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="team-box">
                  <div className="team-box_img">
                    <img src="assets/img/team/team-2-3.png" alt="img" />
                  </div>
                  <div className="team-box_content">
                    <h4 className="team-box_title">
                      <Link to="/team-details">Darlene Robertson</Link>
                    </h4>
                    <span className="team-box_desig">UI UX Designer</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="team-box">
                  <div className="team-box_img">
                    <img src="assets/img/team/team-2-2.png" alt="img" />
                  </div>
                  <div className="team-box_content">
                    <h4 className="team-box_title">
                      <Link to="/team-details">Wade Warren</Link>
                    </h4>
                    <span className="team-box_desig">Ux Architect</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter" />
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
  );
};

export default TeamTwo;
