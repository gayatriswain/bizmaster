import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import HeroTwo from "../components/HeroTwo";
import AboutTwo from "../components/AboutTwo";
import ServiceThree from "../components/ServiceThree";
import WhyChoose from "../components/WhyChoose";
import PortfolioTwo from "../components/PortfolioTwo";
import TestimonialTwo from "../components/TestimonialTwo";
import CounterOne from "../components/CounterOne";
import TeamTwo from "../components/TeamTwo";
import ClientOne from "../components/ClientOne";
import EventOne from "../components/EventOne";
import PricingOne from "../components/PricingOne";
import AppointmentOne from "../components/AppointmentOne";
import CTATwo from "../components/CTATwo";
import BlogTwo from "../components/BlogTwo";
import FooterTwo from "../components/FooterTwo";

const HomeTwo = () => {
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

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* HeroTwo */}
      <HeroTwo />

      {/* AboutTwo */}
      <AboutTwo />

      {/* ServiceThree */}
      <ServiceThree />

      {/* WhyChoose */}
      <div className="space-bottom">
        <WhyChoose />
      </div>


      {/* PortfolioTwo */}
      <PortfolioTwo />

      {/* TestimonialTwo */}
      <TestimonialTwo />

      {/* CounterOne */}
      <CounterOne />

      {/* TeamTwo */}
      <TeamTwo />

      {/* ClientOne */}
      <ClientOne />

      {/* EventOne */}
      <EventOne />

      {/* PricingOne */}
      <PricingOne />

      {/* AppointmentOne */}
      <AppointmentOne />

      {/* CTA_Two */}
      <CTATwo />

      {/* BlogTwo */}
      <BlogTwo />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
