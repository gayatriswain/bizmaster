import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import PortfolioAll from "../components/PortfolioAll";



const Project = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Project"} />

      {/* HeaderFive */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title="Project" />

      {/* PortfolioAll */}
      <PortfolioAll />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Project;
