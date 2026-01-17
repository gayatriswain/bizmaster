import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioDetailsArea = () => {
    return (
        <div className="portfolio-deatils-area space">
            <div className="container">
                <div className="row gx-30">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="page-thumb mb-40">
                            <img src="assets/img/portfolio/project-details1-1.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-12 order-lg-3">
                        <p className="mb-30">
                            Web designing in a powerful way of just not an only professions,
                            however, in a passion Company. have a to a tendency to believe the
                            idea that smart looking of any website is the impression on
                            visitors.Web designing in a powerful way only professions Web
                            designing in a powerful way of just not an only professions, however,
                            in a passion Company. have a to a tendency to believe
                        </p>
                        <div className="row gy-3">
                            <div className="col-lg-6">
                                <div className="checklist style2">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Navigate the Path to Success Achieve
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />A business consultant is
                                            a professional{" "}
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Guidance to businesses on various aspects
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Strategy, and growth They help businesses
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="checklist style2">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Confidence Maximizing Profitability Through
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Advice and guidance to businesses on various
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Management, operations, strategy, and growth businesses
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Develop solutions, and improve overall performance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h3 className="page-title mt-70 mb-30">Navigate the Path to Success</h3>
                        <p className="mb-40">
                            Web designing in a powerful way of just not an only professions,
                            howeve, in a passion Company. have a to a tendency to believe the idea
                            that smart looking of any website is the impression on visitors.Web
                            designing in a powerful way only professions Web designing in a
                            powerful way of just not an only professions, however, in a passion
                            Company. have a to a tendency to believe
                        </p>
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="assets/img/portfolio/project-details1-2.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="assets/img/portfolio/project-details1-3.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="assets/img/portfolio/project-details1-4.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="mt-40 mb-20">
                            Web designing in a powerful way of just not an only professions,
                            however, in a passin Company. have a to a tendency to believe the idea
                            that smart looking of any website is the impression on visitors.Web
                            designing in a powerful way only professions Web designing
                        </p>
                        <p className="mb-n1">
                            Web designing in a powerful way of just not an only professions,
                            however, in a passin Company. have a to a tendency to believe the idea
                            that smart looking of any website is the impression on visitors.Web
                            designing in a powerful way only professions Web designing in a
                            powerful way of just not an only professions, however, in a passion
                            Company. have a to a tendency to believe
                        </p>
                    </div>
                    <div className="col-xxl-4 col-lg-5 order-lg-2">
                        <aside className="sidebar-area">
                            <div className="widget widget_project-info">
                                <h3 className="widget_title">Project Information</h3>
                                <p className="widget-text">
                                    Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                                </p>
                                <ul>
                                    <li>
                                        <strong>Category: </strong>
                                        <span>Corporate, business</span>
                                    </li>
                                    <li>
                                        <strong>Customer: </strong>
                                        <span>Starline shimlasi</span>
                                    </li>
                                    <li>
                                        <strong>Start date:</strong>
                                        <span>21 January 2021</span>
                                    </li>
                                    <li>
                                        <strong> End date: </strong>
                                        <span>28 September 2023</span>
                                    </li>
                                    <li>
                                        <strong>Rating: </strong>
                                        <span>
                                            <span className="star-ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-btn style5 justify-content-center">
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-instagram" />
                                </Link>
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-twitter" />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PortfolioDetailsArea