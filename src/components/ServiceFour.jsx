import React from 'react'
import { Link } from 'react-router-dom'

const ServiceFour = () => {
    return (
        <section className='bg-dark'>
            <div className="service-area-3 space-bottom overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="title-area text-center">
                                <span className="sub-title text-white">
                                    <img src="assets/img/icon/title_left.svg" alt="shape" />
                                    Latest Service
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Maximizing Through the Strategic{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-3">
                                <div className="service-card-icon">
                                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Efficiency Experts</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        Et purus duis sollicitudin sed dignis sim habi tant. Egestas nulla
                                        quis its venenatis Et purus duis
                                    </p>
                                    <Link to="/service-details" className="link-btn">
                                        Learn More <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-3">
                                <div className="service-card-icon">
                                    <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Networ Tructure </Link>
                                    </h4>
                                    <p className="service-card_text">
                                        Et purus duis sollicitudin sed dignis sim habi tant. Egestas nulla
                                        quis its venenatis Et purus duis
                                    </p>
                                    <Link to="/service-details" className="link-btn">
                                        Learn More <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-3">
                                <div className="service-card-icon">
                                    <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">IT Training most </Link>
                                    </h4>
                                    <p className="service-card_text">
                                        Et purus duis sollicitudin sed dignis sim habi tant. Egestas nulla
                                        quis its venenatis Et purus duis
                                    </p>
                                    <Link to="/service-details" className="link-btn">
                                        Learn More <i className="fas fa-arrow-right" />
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

export default ServiceFour