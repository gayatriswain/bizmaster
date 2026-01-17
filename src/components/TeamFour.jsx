import React from 'react'
import { Link } from 'react-router-dom'

const TeamFour = () => {
    return (
        <section className='bg-dark2'>
            <div className="team-area-1 space-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="title-area text-center">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Our Team Member
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Strategic Solutions for Business Growth{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card style4">
                                <div className="team-card_img">
                                    <img src="assets/img/team/team-1-1.png" alt="img" />
                                </div>
                                <div className="team-card_wrapp">
                                    <div className="team-card_content">
                                        <h4 className="team-card_title">
                                            <Link to="/team-details">Darlene Robertson</Link>
                                        </h4>
                                        <span className="team-card_desig">UI UX Designer</span>
                                    </div>
                                    <div className="global-social">
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card style4">
                                <div className="team-card_img">
                                    <img src="assets/img/team/team-1-2.png" alt="img" />
                                </div>
                                <div className="team-card_wrapp">
                                    <div className="team-card_content">
                                        <h4 className="team-card_title">
                                            <Link to="/team-details">Dianne Russell</Link>
                                        </h4>
                                        <span className="team-card_desig">Marketing Coordinator</span>
                                    </div>
                                    <div className="global-social">
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card style4">
                                <div className="team-card_img">
                                    <img src="assets/img/team/team-1-3.png" alt="img" />
                                </div>
                                <div className="team-card_wrapp">
                                    <div className="team-card_content">
                                        <h4 className="team-card_title">
                                            <Link to="/team-details">Theresa Webb</Link>
                                        </h4>
                                        <span className="team-card_desig">President of Sales</span>
                                    </div>
                                    <div className="global-social">
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link to="#" tabIndex={0}>
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TeamFour