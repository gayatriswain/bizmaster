import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BlogOne = () => {
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
    <>
      <section className="blog-area-1 space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Latest Blog
                </span>
                <h2 className="sec-title">
                  Strategic Solutions for Business Growth
                </h2>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider slider-shadow">
            <Slider {...settings}>
              <div className="blog-card p-3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_1.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      By admin
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      Comments
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Transformation Strategy Advisors Operat
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="blog-card p-3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_2.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      By admin
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      Comments
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Hard Work Always Brings You Success
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="blog-card p-3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_3.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      By admin
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      Comments
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Growth and Innovation the Consultants
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="blog-card p-3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_1.png" alt="Bizmaster" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      By admin
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      Comments
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Transformation Strategy Advisors Operat
                    </Link>
                  </h3>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="footer-top-1 bg-theme">
          <div className="footer-top-content">
            <h3 className="footer-top-title text-white">Newsletter</h3>
            <p className="footer-top-text">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
                required=""
              />
              <button type="submit" className="global-btn">
                Subscribe
                <span className="icon">
                  <i className="fa-sharp fas fa-paper-plane ms-2" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogOne;
