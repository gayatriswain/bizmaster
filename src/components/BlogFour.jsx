import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
const BlogFour = () => {
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
        <section className='bg-dark'>
            <div className="blog-area-4 space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="title-area text-center">
                                <span className="sub-title text-white">
                                    <img src="assets/img/icon/title_left.svg" alt="shape" />
                                    Latest Blog
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Achieve Your a of Business{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row global-carousel blog-slider3 slider-shadow"

                    >
                        <Slider {...settings}>
                            <div className="px-2">
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s4_1.png" alt="Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                By admin
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                Strategic Solutions for Business Growth
                                            </Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s4_2.png" alt="Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                By admin
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                Hard Work Always Brings You Success
                                            </Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s4_3.png" alt="Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                By admin
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                Growth and Innovation the Consultants
                                            </Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s4_2.png" alt="Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                By admin
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                Hard Work Always Brings You Success
                                            </Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogFour