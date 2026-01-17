import React from 'react'
import { Link } from 'react-router-dom'

const ServiceFive = () => {
    return (
        <section className='bg-dark2'>
            <div className="service-area-4 space-top position-relative">
                <div className="shadow-shape-right" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="title-area text-center">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Our Services
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Your Business Goals with the Confidence{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/service-5-1.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Business Growth Catalyst</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        Use receiving acco growin number of currencies and get paid lik
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/service-5-2.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Profitability Maximizers</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        Use receiving acco growin number of currencies and get paid lik
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/service-5-3.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Efficiency Experts</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        Use receiving acco growin number of currencies and get paid lik
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ServiceFive