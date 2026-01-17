import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const FaqOne = () => {
  return (
    <section className=" ">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6">
            <div className="title-area me-xl-5 mb-20">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Ask Question
              </span>
              <h2 className="sec-title style2">Innovation Moves You Forward</h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
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
                      We offer a wide range of digital services, including
                      website design and development, e-commerce solutions,
                      search engine optimization, social media management,
                      pay-per-click advertising, brand identity
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    How long does it take for you to complete a project?
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
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. Many desktop publis packages and web page
                      editors now use Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    How much does it cost to work with your agency?
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
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. Many desktop publis packages and web page
                      editors now use Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ms-xl-5">
              <p className="counter-text">
                Dictum ultrices porttitor amet nec sollicitudin mi molestie
                adipiscing netus. Lorem at ac ut morbi ullamcorper molestie
                lacus loren ipsum dummy text provide happy
              </p>
              <div className="counter-box_wrapper">
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-1.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={200} />
                              k+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">Team member</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-2.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={10} />
                              k+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">Complete project</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={20} />
                              k+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">Winning award</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-4.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={900} />
                              k+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">Client Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
