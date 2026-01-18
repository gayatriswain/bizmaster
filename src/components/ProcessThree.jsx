import React from 'react'
import Marquee from "react-fast-marquee";
const ProcessThree = () => {
    return (

        <section
            className="process-area-1 bg-smoke space-bottom"
            style={{ backgroundImage: "url(assets/img/bg/shape_1.png)" }}
        >

            {/* Client Area   */}

            <div className="client-bg-area-2 space-bottom">
                <div className="client-area-2">
                    <div className=" global-carousel">
                        <Marquee speed={30}>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-1.png" alt="img" />

                                </div>
                            </div>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-2.png" alt="img" />

                                </div>
                            </div>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-3.png" alt="img" />

                                </div>
                            </div>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-4.png" alt="img" />

                                </div>
                            </div>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-1.png" alt="img" />

                                </div>
                            </div>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-2.png" alt="img" />

                                </div>
                            </div>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-3.png" alt="img" />

                                </div>
                            </div>
                            <div>
                                <div className="client-logo">

                                    <img src="assets/img/client/1-4.png" alt="img" />

                                </div>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="title-area text-center">
                            <span className="sub-title">
                                <img src="assets/img/icon/title_left.svg" alt="shape" />
                                Work Process
                            </span>
                            <h2 className="sec-title style2">
                                Unleash Business's Hid Potential
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-30">
                    <div className="col-lg-6 col-xl-3 process-card-wrap">
                        <div className="process-card">
                            <div className="process-card_wrapp">
                                <div className="process-card-icon">
                                    <img src="assets/img/icon/process-icon-1-1.svg" alt="img" />
                                </div>
                                <h3 className="process-card_number">01</h3>
                            </div>
                            <div className="process-card_content">
                                <span className="process-card-text">Technical Operation</span>
                                <h4 className="process-card-title"> Growth Acceler</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 process-card-wrap">
                        <div className="process-card">
                            <div className="process-card_wrapp">
                                <div className="process-card-icon">
                                    <img src="assets/img/icon/process-icon-1-2.svg" alt="img" />
                                </div>
                                <h3 className="process-card_number">02</h3>
                            </div>
                            <div className="process-card_content">
                                <span className="process-card-text">Technical Operation</span>
                                <h4 className="process-card-title"> Growth Acceler</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 process-card-wrap">
                        <div className="process-card">
                            <div className="process-card_wrapp">
                                <div className="process-card-icon">
                                    <img src="assets/img/icon/process-icon-1-3.svg" alt="img" />
                                </div>
                                <h3 className="process-card_number">03</h3>
                            </div>
                            <div className="process-card_content">
                                <span className="process-card-text">Technical Operation</span>
                                <h4 className="process-card-title"> Growth Acceler</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 process-card-wrap">
                        <div className="process-card">
                            <div className="process-card_wrapp">
                                <div className="process-card-icon">
                                    <img src="assets/img/icon/process-icon-1-4.svg" alt="img" />
                                </div>
                                <h3 className="process-card_number">04</h3>
                            </div>
                            <div className="process-card_content">
                                <span className="process-card-text">Technical Operation</span>
                                <h4 className="process-card-title"> Growth Acceler</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessThree