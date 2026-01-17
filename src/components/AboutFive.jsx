import React from 'react'
import { Link } from 'react-router-dom'
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutFive = () => {
    return (
        <section className='bg-dark2'>
            <div className="about-area-5 space-bottom">
                <div className="shadow-shape-left" />
                <div className="container">
                    <div className="row gy-40 gx-60 align-items-center justify-content-between">
                        <div className="col-xl-5">
                            <div className="about-thumb5">
                                <div className="img1">
                                    <img src="assets/img/normal/about_5-1.png" alt="img" />
                                </div>
                                <div className="about-counter-wrap jump-reverse">
                                    <h3 className="about-counter">
                                        <TrackVisibility once>
                                            {({ isVisible }) =>
                                                isVisible && (
                                                    <span className="counter-number">
                                                        <CountUp delay={0} start={0} end={10} />K+
                                                    </span>
                                                )
                                            }
                                        </TrackVisibility>
                                    </h3>
                                    <p className="sec-desc">Client Review</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-40">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    About Us
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Maximizing Through the Strategic
                                </h2>
                                <p className="sec-text text-white mb-30">
                                    Lorem Ipsum is simply dummy a of the printing and type setting
                                    industry Loreaim Ipsum has been the industry's standard dummy Lorem
                                    Ipsum is simply dummy a of the printing and type setting industry
                                    Loreaim Ipsum has been the industry's standard dummy
                                </p>
                                <p className="sec-text text-white">
                                    Lorem Ipsum is simply dummy a of the printing and type setting
                                    industry Loreaim Ipsum has been the industry's standard dummy
                                </p>
                            </div>
                            <div className="btn-wrap">
                                <Link to="/about" className="global-btn style3">
                                    Explore More <i className="fas fa-arrow-right ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutFive