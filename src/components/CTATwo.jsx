import React from "react";

const CTATwo = () => {
  return (
    <div
      className="cta-area-2 bg-theme"
      style={{ backgroundImage: "url(assets/img/bg/cta_bg_1.png)" }}
    >
      <div className="container">
        <div className="row justify-content-md-between align-items-center flex-row-reverse">
          <div className="col-lg-7">
            <div className="cta-wrap2">
              <div className="title-area">
                <h2 className="sec-title text-white style2">
                  Successful Expert
                </h2>
                <p className="sec-text text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout{" "}
                </p>
              </div>
              <form className="newsletter-form style2">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                  <button type="submit" className="global-btn">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cta2-bg-thumb">
              <img src="assets/img/normal/cta-thumb-2-1.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTATwo;
