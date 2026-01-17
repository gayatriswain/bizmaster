import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFour from "../components/HeaderFour";
import HeroFour from "../components/HeroFour";
import AboutFour from "../components/AboutFour";
import ServiceFour from "../components/ServiceFour";
import PortfolioFour from "../components/PortfolioFour";
import FeatureOne from "../components/FeatureOne";
import ClientTwo from "../components/ClientTwo";
import VideoAreaOne from "../components/VideoAreaOne";
import TeamThree from "../components/TeamThree";
import TestimonialThree from "../components/TestimonialThree";
import MarqueeThree from "../components/MarqueeThree";
import BlogFour from "../components/BlogFour";
import FooterFour from "../components/FooterFour";


const HomeFour = () => {
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

      {/* HeaderFour */}
      <HeaderFour />

      {/* HeroFour */}
      <HeroFour />

      {/* AboutFour */}
      <AboutFour />

      {/* ServiceFour */}
      <ServiceFour />

      {/* PortfolioFour */}
      <PortfolioFour />

      {/* FeatureOne */}
      <FeatureOne />

      {/* ClientTwo */}
      <ClientTwo />

      {/* VideoAreaOne */}
      <VideoAreaOne />

      {/* TeamThree */}
      <TeamThree />

      {/* TestimonialThree */}
      <TestimonialThree />

      {/* MarqueeThree */}
      <MarqueeThree />

      {/* BlogFour */}
      <BlogFour />

      {/* FooterFour */}
      <FooterFour />


    </>
  );
};

export default HomeFour;
