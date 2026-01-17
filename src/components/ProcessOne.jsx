import React from "react";
import Marquee from "react-fast-marquee";

const ProcessOne = () => {
  return (
    <>
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
      <div className="goal-area space-top">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Our Goal
                </span>
                <h2 className="sec-title style2">
                  Partnering Business for Success
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="goal-title-area">
                <p className="">
                  There are many variati of passages of engineer's available.
                  have suffered alteration in engineer's available
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="goal-tabs-wrapper">
              <div
                className="nav nav-tabs goal-tabs-tabs"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link"
                  id="nav-step1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step1"
                  type="button"
                >
                  Biography
                </button>
                <button
                  className="nav-link"
                  id="nav-step2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step2"
                  type="button"
                >
                  Education
                </button>
                <button
                  className="nav-link active"
                  id="nav-step3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step3"
                  type="button"
                >
                  Experience
                </button>
                <button
                  className="nav-link"
                  id="nav-step4-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step1"
                  type="button"
                >
                  Biography
                </button>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-step1" role="tabpanel">
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Performance Enhancement Partners
                        </h4>
                        <p>Strategic Solutions Pro</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Management Mastery Consultan
                        </h4>
                        <p>Profitability Maximizers</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Operational Excellence Solutions
                        </h4>
                        <p>Framer Designer &amp; Developer</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">Transformational Strategy</h4>
                        <p>Efficiency Experts</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-step2" role="tabpanel">
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Performance Enhancement Partners
                        </h4>
                        <p>Strategic Solutions Pro</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Management Mastery Consultan
                        </h4>
                        <p>Profitability Maximizers</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Operational Excellence Solutions
                        </h4>
                        <p>Framer Designer &amp; Developer</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">Transformational Strategy</h4>
                        <p>Efficiency Experts</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="nav-step3"
                  role="tabpanel"
                >
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Performance Enhancement Partners
                        </h4>
                        <p>Strategic Solutions Pro</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Management Mastery Consultan
                        </h4>
                        <p>Profitability Maximizers</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Operational Excellence Solutions
                        </h4>
                        <p>Framer Designer &amp; Developer</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">Transformational Strategy</h4>
                        <p>Efficiency Experts</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-step4" role="tabpanel">
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Performance Enhancement Partners
                        </h4>
                        <p>Strategic Solutions Pro</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Management Mastery Consultan
                        </h4>
                        <p>Profitability Maximizers</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          Operational Excellence Solutions
                        </h4>
                        <p>Framer Designer &amp; Developer</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="Bizmaster" />
                      <div className="goal-content">
                        <h4 className="box-title">Transformational Strategy</h4>
                        <p>Efficiency Experts</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Success Accelerators
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Started politician Club
                            </li>
                          </ul>
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

export default ProcessOne;
