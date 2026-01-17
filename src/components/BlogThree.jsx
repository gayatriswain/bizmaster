import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const BlogThree = () => {

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="BlogThree-icon-box-next">
        <button onClick={onClick}
          className="slick-arrow default"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="BlogThree-icon-box-prev">
        <button onClick={onClick}
          className="slick-arrow default"
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
    slidesToShow: 3,
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
    <section className="blog-area-1 space">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest Blog
              </span>
              <h2 className="sec-title style2">
                Strategies Tailored to Elevate
              </h2>
            </div>
          </div>

        </div>
        <div
          className="row global-carousel blog-slider3 slider-shadow">
          <Slider {...settings}>
            <div className="px-3">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_1.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-calendar-alt" />
                      October 19, 2022
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      Admin
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Transformation Strategy Advisors Operat
                    </Link>
                  </h3>
                  <Link
                    className="global-btn style-border4"
                    to="/blog-details"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_2.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-calendar-alt" />
                      October 19, 2022
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      Admin
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Hard Work Always Brings You Success
                    </Link>
                  </h3>
                  <Link
                    className="global-btn style-border4"
                    to="/blog-details"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_3.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-calendar-alt" />
                      October 19, 2022
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      Admin
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Growth and Innovation the Consultants
                    </Link>
                  </h3>
                  <Link
                    className="global-btn style-border4"
                    to="/blog-details"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_1.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-calendar-alt" />
                      October 19, 2022
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      Admin
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Hard Work Always Brings You Success
                    </Link>
                  </h3>
                  <Link
                    className="global-btn style-border4"
                    to="/blog-details"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogThree;
