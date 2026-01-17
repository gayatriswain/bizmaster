import React from 'react'
import { Link } from 'react-router-dom'

const ServiceInnerDetails = () => {
    return (
        <section className="space">
            <div className="container">
                <div className="row gx-30">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="page-thumb">
                            <img src="assets/img/service/service-details1-1.png" alt="img" />
                        </div>
                        <ul className="service-details-list">
                            <li className="single-service-list">
                                <span className="title">Catagory </span>
                                <h6 className="content">Business's Consulting </h6>
                            </li>
                            <li className="single-service-list">
                                <span className="title">Clients </span>
                                <h6 className="content">Fahad Hossain </h6>
                            </li>
                            <li className="single-service-list">
                                <span className="title">Timeframe </span>
                                <h6 className="content">February-10-2024 </h6>
                            </li>
                        </ul>
                        <h3 className="page-title mt-40 mb-20">Maximizing Profita Through</h3>
                        <p>
                            Web designing in a powerful way of just not an only professions,
                            however, in a passion Company. have a to a tendency to believe the
                            idea that smart looking of any website
                        </p>
                        <div className="checklist style6 mt-40 mb-60">
                            <ul>
                                <li>
                                    <i className="fas fa-check-circle" />
                                    Navigate the Path to Success Achieve Your Business Goals with
                                    Confidenc
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" />A business consultant is a
                                    professional who provides expert
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" />
                                    Guidance to businesses on various aspects such as management
                                </li>
                            </ul>
                        </div>
                        <h3 className="page-title mb-20">Navigate the Path to Success</h3>
                        <p className="mb-30">
                            Web designing in a powerful way of just not an only professions,
                            however, in a passion Company. have a to a tendency to believe the
                            idea that smart looking of any website is the impression on
                            visitors.Web designing in a powerful way only professions Web
                            designing in a powerf
                        </p>
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <div className="page-thumb style2">
                                    <img src="assets/img/service/service-details1-2.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="page-thumb style2">
                                    <img src="assets/img/service/service-details1-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <p className="mt-30 mb-n1">
                            Web designing in a powerful way of just not an only professions,
                            however, in a passion Company. have a to a tendency to believe the
                            idea that smart looking of an is the impression on visitors.Web
                            designing in a powerful way only professions Web designing in a
                            powerful way
                        </p>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_categories widget_service-categories">
                                <ul>
                                    <li>
                                        <Link to="/service">Personal service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Education service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Student service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Wedding service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Car service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Business service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Others service</Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ServiceInnerDetails