import React from 'react'
import Slider from "react-slick";
const TestimonialFour = () => {
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {},
            },
            {
                breakpoint: 992,
                settings: {

                },
            },
            {
                breakpoint: 768,
                settings: {

                },
            },
        ],
    };
    return (
        <section className='bg-dark2'>
            <div className="testimonial-area-5 space-bottom overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="title-area text-center">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Clients Testimonial
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Your Business Goals a Confidence
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="testi-area-slider4">
                                <div
                                    className="row global-carousel testi-slider-4"

                                >
                                    <Slider {...settings}>
                                        <div className="px-3">
                                            <div className="testi-card style3">
                                                <div className="quote-icon">
                                                    <img src="assets/img/icon/quote3-1.svg" alt="img" />
                                                </div>
                                                <div className="testi-card_content">
                                                    <p className="testi-card_text">
                                                        Roofing is the proces of installin repai and amaintaining
                                                        roofs on buildings. It involves a to various materials such
                                                        shil tiles met and membranes. Roofing services may include
                                                        is inspect
                                                    </p>
                                                    <div className="testi-card-profile">
                                                        <div className="testi-profile_thumb">
                                                            <img
                                                                src="assets/img/testimonial/testi-thumb_3.png"
                                                                alt="img"
                                                            />
                                                        </div>
                                                        <div className="testi-card-profile-details">
                                                            <h4 className="testi-profile-title">Michael Ramirez</h4>
                                                            <span className="testi-profile-desig">
                                                                Marketing Manager
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3">
                                            <div className="testi-card style3">
                                                <div className="quote-icon">
                                                    <img src="assets/img/icon/quote3-1.svg" alt="img" />
                                                </div>
                                                <div className="testi-card_content">
                                                    <p className="testi-card_text">
                                                        Roofing is the proces of installin repai and amaintaining
                                                        roofs on buildings. It involves a to various materials such
                                                        shil tiles met and membranes. Roofing services may include
                                                        is inspect
                                                    </p>
                                                    <div className="testi-card-profile">
                                                        <div className="testi-profile_thumb">
                                                            <img
                                                                src="assets/img/testimonial/testi-thumb_2.png"
                                                                alt="img"
                                                            />
                                                        </div>
                                                        <div className="testi-card-profile-details">
                                                            <h4 className="testi-profile-title">Starli shaine</h4>
                                                            <span className="testi-profile-desig">
                                                                Marketing Manager
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-thumb1">
                                <img src="assets/img/testimonial/testimonial-5-1.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TestimonialFour