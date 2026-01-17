import React from 'react'
import { Link } from 'react-router-dom'

const PricingTwo = () => {
    return (
        <section className='bg-dark2'>
            <div
                className="pricing-area-3 space-top"
                style={{
                    backgroundImage: "url(assets/img/bg/pricing-bg2-1.png)",
                    backgroundSize: "cover"
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="title-area text-center">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Our Pricing
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Achieve Your Goal of Business{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center align-items-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-card style2">
                                <h4 className="pricing-card_title">Consult</h4>
                                <div className="pricing-card-price-wrap">
                                    <h3 className="pricing-card_price">
                                        <span className="currency">$</span>32
                                        <span className="duration">/month</span>
                                    </h3>
                                </div>
                                <div className="pricing-card-details">
                                    <div className="checklist">
                                        <ul>
                                            <li>
                                                <i className="fas fa-check" />
                                                Mistakes To Avoid
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Your Startup
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Knew About Fonts
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Winning Metric for Your Startup
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className="global-btn" to="/contact">
                                        Get Now <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-card style2 active">
                                <h4 className="pricing-card_title">Basic</h4>
                                <div className="pricing-card-price-wrap">
                                    <h3 className="pricing-card_price">
                                        <span className="currency">$</span>25
                                        <span className="duration">/month</span>
                                    </h3>
                                </div>
                                <div className="pricing-card-details">
                                    <div className="checklist">
                                        <ul>
                                            <li>
                                                <i className="fas fa-check" />
                                                Mistakes To Avoid
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Your Startup
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Knew About Fonts
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Winning Metric for Your Startup
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className="global-btn" to="/contact">
                                        Get Now <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-card style2">
                                <h4 className="pricing-card_title">Pro</h4>
                                <div className="pricing-card-price-wrap">
                                    <h3 className="pricing-card_price">
                                        <span className="currency">$</span>36
                                        <span className="duration">/month</span>
                                    </h3>
                                </div>
                                <div className="pricing-card-details">
                                    <div className="checklist">
                                        <ul>
                                            <li>
                                                <i className="fas fa-check" />
                                                Mistakes To Avoid
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Your Startup
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Knew About Fonts
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Winning Metric for Your Startup
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className="global-btn" to="/contact">
                                        Get Now <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PricingTwo