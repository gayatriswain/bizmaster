import React from "react";

const FaqTwo = () => {
  return (
    <>
      <section className="faq-area-3 space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center mb-60">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Ask Question
                </span>
                <h2 className="sec-title style2">
                  Transforming Vision into Reality Together
                </h2>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style3 active">
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
                <div className="accordion-card style3">
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
                        distracted by the readable content of a page when
                        looking at its layout. Many desktop publis packages and
                        web page editors now use Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3">
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
                        distracted by the readable content of a page when
                        looking at its layout. Many desktop publis packages and
                        web page editors now use Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden">
        <div className="bg-max-container bg-smoke radius-50">

          {/* Event Area 2   */}

          <div className="event-area-1 space overflow-hidden">
            <div className="container">
              <div className="row gy-50 align-items-center flex-row-reverse">
                <div className="col-lg-6">
                  <div className="event-thumb-2 text-lg-end">
                    <img
                      src="assets/img/normal/event-thumb-2-1.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="title-area">
                    <span className="sub-title">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      Upcoming Events
                    </span>
                    <h2 className="sec-title style2">
                      Unlocking Potential Maximiz Growth
                    </h2>
                  </div>
                  <div className="accordion-area accordion" id="eventAccordion">
                    <div className="accordion-card style4 active">
                      <div
                        className="accordion-header"
                        id="event-collapse-item-1"
                      >
                        <button
                          className="accordion-button "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#event-collapse-1"
                          aria-expanded="true"
                          aria-controls="event-collapse-1"
                        >
                          Innovate Xpo
                          <span className="event-date">October 19, 2022</span>
                        </button>
                      </div>
                      <div
                        id="event-collapse-1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="event-collapse-item-1"
                        data-bs-parent="#eventAccordion"
                      >
                        <div className="accordion-body">
                          <p className="event-text">
                            Et purus duis sollicitudin sed dignis sim habi tant.
                            Egestas nulla quis venenatis Et purus duis Et purus
                            duis sollicitudin sed dignis{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card style4">
                      <div
                        className="accordion-header"
                        id="event-collapse-item-2"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#event-collapse-2"
                          aria-expanded="false"
                          aria-controls="event-collapse-2"
                        >
                          Future Forward Forum
                          <span className="event-date">October 19, 2022</span>
                        </button>
                      </div>
                      <div
                        id="event-collapse-2"
                        className="accordion-collapse collapse "
                        aria-labelledby="event-collapse-item-2"
                        data-bs-parent="#eventAccordion"
                      >
                        <div className="accordion-body">
                          <p className="event-text">
                            Et purus duis sollicitudin sed dignis sim habi tant.
                            Egestas nulla quis venenatis Et purus duis Et purus
                            duis sollicitudin sed dignis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card style4">
                      <div
                        className="accordion-header"
                        id="event-collapse-item-3"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#event-collapse-3"
                          aria-expanded="false"
                          aria-controls="event-collapse-3"
                        >
                          Trade Trends Summit
                          <span className="event-date">October 19, 2022</span>
                        </button>
                      </div>
                      <div
                        id="event-collapse-3"
                        className="accordion-collapse collapse "
                        aria-labelledby="event-collapse-item-3"
                        data-bs-parent="#eventAccordion"
                      >
                        <div className="accordion-body">
                          <p className="event-text">
                            Et purus duis sollicitudin sed dignis sim habi tant.
                            Egestas nulla quis venenatis Et purus duis Et purus
                            duis sollicitudin sed dignis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqTwo;
