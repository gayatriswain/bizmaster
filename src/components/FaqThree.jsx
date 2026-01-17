import React from 'react'
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqThree = () => {
    return (
        <section className='bg-dark2'>
            <section className="faq-area-5 space-top">
                <div className="container">
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xxl-6 text-xxl-start text-center">
                            <div className="title-area mb-60">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Ask Question
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Transforming Vision into Reality Together
                                </h2>
                            </div>
                            <div className="faq-thumb5">
                                <img src="assets/img/normal/faq-thumb-5-1.png" alt="img" />
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
                        <div className="col-xxl-6 align-self-end">
                            <div className="accordion-area accordion" id="faqAccordion">
                                <div className="accordion-card style5 active">
                                    <div className="accordion-header" id="collapse-item-1">
                                        <button
                                            className="accordion-button "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1"
                                            aria-expanded="true"
                                            aria-controls="collapse-1"
                                        >
                                            What services do you offer?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-1"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="collapse-item-1"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                                At the heart of our consulting approach lies a dedication to
                                                understanding your unique needs, fostering collaboration At
                                                the heart of our consulting approach lies a dedication{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style5">
                                    <div className="accordion-header" id="collapse-item-2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-2"
                                            aria-expanded="false"
                                            aria-controls="collapse-2"
                                        >
                                            How long does complete a project?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-2"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-2"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                                At the heart of our consulting approach lies a dedication to
                                                understanding your unique needs, fostering collaboration At
                                                the heart of our consulting approach lies a dedication{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style5">
                                    <div className="accordion-header" id="collapse-item-3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-3"
                                            aria-expanded="false"
                                            aria-controls="collapse-3"
                                        >
                                            How much does with your agency?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-3"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-3"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                                At the heart of our consulting approach lies a dedication to
                                                understanding your unique needs, fostering collaboration At
                                                the heart of our consulting approach lies a dedication{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style5">
                                    <div className="accordion-header" id="collapse-item-4">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-4"
                                            aria-expanded="false"
                                            aria-controls="collapse-4"
                                        >
                                            Where a Branding Consultants?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-4"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-4"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                                At the heart of our consulting approach lies a dedication to
                                                understanding your unique needs, fostering collaboration At
                                                the heart of our consulting approach lies a dedication{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default FaqThree