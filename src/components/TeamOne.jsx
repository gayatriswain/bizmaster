import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const TeamOne = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="TeamOne-icon-box-next">
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
      <div className="TeamOne-icon-box-prev">
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
    slidesToShow: 4,
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
        settings: { slidesToShow: 3 },
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
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="team-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Our Team
              </span>
              <h2 className="sec-title">
                Your Business with the Professional{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-30 global-carousel team-slider2">
        <Slider {...settings}>
          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-1.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="Bizmaster" />
                  </div>
                  <div className="global-social">
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="Bizmaster" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Darrell Steward</Link>
                </h4>
                <span className="team-card_desig">Human Resource</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-2.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="Bizmaster" />
                  </div>
                  <div className="global-social">
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="Bizmaster" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Fahad Hossain</Link>
                </h4>
                <span className="team-card_desig">Efficiency Experts</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-3.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="Bizmaster" />
                  </div>
                  <div className="global-social">
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="Bizmaster" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Javed Tanvir</Link>
                </h4>
                <span className="team-card_desig">Strategic Solutions Pro</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-4.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="Bizmaster" />
                  </div>
                  <div className="global-social">
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="Bizmaster" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Nafiz Islam</Link>
                </h4>
                <span className="team-card_desig">Growth Catalyst</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-1.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="Bizmaster" />
                  </div>
                  <div className="global-social">
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="#" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="Bizmaster" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Darrell Steward</Link>
                </h4>
                <span className="team-card_desig">Human Resource</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TeamOne;
