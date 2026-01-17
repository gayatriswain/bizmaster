import React from "react";

const AppointmentOne = () => {
  return (
    <div className="appointment-area-2 space-bottom overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="appointment-thumb-2">
              <img
                src="assets/img/normal/appointment-thumb-2-1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="appointment-form-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Talk to Us
                </span>
                <h2 className="sec-title style2">Strategic Solutions</h2>
              </div>
              <form
                className="appointment-form ajax-contact"
              >
                <div className="row">
                  <div className=" col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Full name"
                      />
                      <i className="fas fa-user" />
                    </div>
                  </div>
                  <div className=" col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Your mail"
                      />
                      <i className="fas fa-envelope" />
                    </div>
                  </div>
                  <div className=" col-12">
                    <div className="form-group">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select style-border"
                      >
                        <option defaultValue={1} >
                          Subject
                        </option>
                        <option value={1}>01</option>
                        <option value={2}>02</option>
                        <option value={3}>03</option>
                      </select>
                      <i className="fas fa-angle-down" />
                    </div>
                  </div>
                </div>
                <div className="form-group col-12">
                  <textarea
                    placeholder="Write your message"
                    id="contactForm"
                    className="form-control style-border"
                    defaultValue={""}
                  />
                </div>
                <div className="form-btn col-12">
                  <button className="global-btn style-border">
                    Send Now
                    <i className="fas fa-arrow-right ms-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOne;
