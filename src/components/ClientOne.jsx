import React from "react";
import Slider from "react-slick";
const ClientOne = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="client-bg-area-2 space-bottom">
      <div className="container">
        <div className="row gx-90 d-flex justify-content-between global-carousel">
          <Slider {...settings}>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-1.png" alt="img" />

              </div>
            </div>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-2.png" alt="img" />

              </div>
            </div>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-3.png" alt="img" />

              </div>
            </div>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-4.png" alt="img" />

              </div>
            </div>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-1.png" alt="img" />

              </div>
            </div>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-2.png" alt="img" />

              </div>
            </div>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-3.png" alt="img" />

              </div>
            </div>
            <div className="p-2">
              <div className="client-logo">

                <img src="assets/img/client/2-4.png" alt="img" />

              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientOne;
