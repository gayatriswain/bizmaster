import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderThree from "../components/HeaderThree";
import HeroThree from "../components/HeroThree";
import AboutThree from "../components/AboutThree";
import PortfolioThree from "../components/PortfolioThree";
import FaqTwo from "../components/FaqTwo";
import BlogThree from "../components/BlogThree";
import MarqueeTwo from "../components/MarqueeTwo";
import FooterThree from "../components/FooterThree";

const HomeThree = () => {
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
      <HelmetReact title={"Home"} />

      {/* HeaderThree */}
      <HeaderThree />

      {/* HeroThree */}
      <HeroThree />

      {/* AboutThree */}
      <AboutThree />

      {/* PortfolioThree */}
      <PortfolioThree />

      {/* FaqTwo */}
      <FaqTwo />

      {/* BlogThree */}
      <BlogThree />

      {/* MarqueeTwo */}
      <MarqueeTwo />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default HomeThree;
