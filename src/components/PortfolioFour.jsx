import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioFour = () => {
    return (
        <section className='bg-dark'>
            <div className="portfolio-area-3 space-bottom">
                <div className="container">
                    <div className="row justify-content-between align-items-end">
                        <div className="col-lg-6">
                            <div className="title-area text-lg-start text-center">
                                <span className="sub-title text-white">
                                    <img src="assets/img/icon/title_left.svg" alt="shape" />
                                    Latest Portfolio
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Unleash Business's Hid Potential
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="btn-wrap mb-60 justify-content-center">
                                <Link to="/project" className="global-btn style-border5">
                                    View More <i className="fas fa-arrow-right ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-30 gy-30">
                        <div className="col-lg-7">
                            <div className="portfolio-card-4">
                                <div className="portfolio-card-thumb">
                                    <img src="assets/img/portfolio/4-1.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <h4 className="portfolio-card-details_title">
                                            <Link to="/project-details">Transformational Strategy</Link>
                                        </h4>
                                        <span className="portfolio-card-details_subtitle">
                                            purus duis
                                        </span>
                                    </div>
                                    <Link to="/project-details" className="icon-btn">
                                        <img src="assets/img/icon/arrow-long-right.svg" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="portfolio-card-4">
                                <div className="portfolio-card-thumb">
                                    <img src="assets/img/portfolio/4-2.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <h4 className="portfolio-card-details_title">
                                            <Link to="/project-details">Technology solutions </Link>
                                        </h4>
                                        <span className="portfolio-card-details_subtitle">
                                            purus duis
                                        </span>
                                    </div>
                                    <Link to="/project-details" className="icon-btn">
                                        <img src="assets/img/icon/arrow-long-right.svg" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="portfolio-card-4">
                                <div className="portfolio-card-thumb">
                                    <img src="assets/img/portfolio/4-3.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <h4 className="portfolio-card-details_title">
                                            <Link to="/project-details">Analysis Strategy </Link>
                                        </h4>
                                        <span className="portfolio-card-details_subtitle">
                                            purus duis
                                        </span>
                                    </div>
                                    <Link to="/project-details" className="icon-btn">
                                        <img src="assets/img/icon/arrow-long-right.svg" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="portfolio-card-4">
                                <div className="portfolio-card-thumb">
                                    <img src="assets/img/portfolio/4-4.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <h4 className="portfolio-card-details_title">
                                            <Link to="/project-details">
                                                Digital Transformation Advisors
                                            </Link>
                                        </h4>
                                        <span className="portfolio-card-details_subtitle">
                                            purus duis
                                        </span>
                                    </div>
                                    <Link to="/project-details" className="icon-btn">
                                        <img src="assets/img/icon/arrow-long-right.svg" alt="img" />
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

export default PortfolioFour