import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../elements/Preloader";

const IndexPage = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  const cssCode = `
  
  /*
Theme Name: Bizmaster
Theme URI: https://wowtheme7.com/bizmaster
Author: wowtheme7
Author URI: https://wowtheme7.com 
Description: Bizmaster - Business Consulting React Js Template
Version: 2.0.1
*/

:root {
  --main-color: rgb(25, 97, 100);
  --main-color-opacity: 13, 110, 253;
  --main-gradient: linear-gradient(to right, #2878eb, #f129c9);
  --heading-color: #111;
  --heading-font: "Yantramanav", sans-serif;
  --body-font: "Roboto", sans-serif;
}
body {
  font-family: var(--body-font);
  font-size: 16px;
  background-color: #fafafa;
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1170px;
  }
}
h1,h2,h3,h4,h5,h6 {
  font-family: var(--heading-font);
}
/***default-btn-area***/
.btn {
  height: 50px;
  line-height: 50px;
  padding: 0 32px;
  overflow: hidden;
  position: relative;
  border: 0;
  transition: all 0.5s ease 0s;
  font-weight: 700;
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 14px;
}
.bg-white{
  background: #fff;
}
.btn:focus,
.btn:active {
  outline: 0;
  box-shadow: none;
}
.btn:after {
  content: "";
  background: var(--main-color);
  position: absolute;
  transition: all 0.9s ease 0s;
  z-index: -1;
  height: 100%;
  left: -35%;
  top: 0;
  transform: skew(30deg);
  transform-origin: top left;
  width: 0;
}
.btn:hover {
  color: #fff;
}
.btn:hover:after {
  height: 100%;
  width: 135%;
}
.btn-base {
  color: #fff;
  border: 0;
  background: var(--main-color);
}
.btn-base:after {
  background: #fff;
}
.btn-base:hover::after {
  background: var(--main-color);
}
.btn-border {
  color: var(--main-color);
  border: 1px solid var(--main-color);
  background: transparent;
}
.btn-border:hover {
  color: #fff;
}
.btn-border-white {
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
}
.btn-border-white:hover {
  background: #fff;
  opacity: 1;
  color: var(--main-color);
}
.btn-border-white:hover::after {
  background: #fff;
}
.btn-white {
  color: var(--main-color);
  border: 0;
  background: #fff;
  font-size: 14px;
  transition: all 0.3s ease 0s;
}
.btn-white:hover {
  color: var(--main-color);
}
.btn-white:hover:after {
  background: #fff;
}
.btn-area {
  animation: 1.5s 0.8s fadeInUp both;
}
.btn-area .btn {
  margin-right: 15px;
}
/*------------------------------------------------
    ## Back Top
------------------------------------------------*/
#back-to-top {
  display: inline-block;
  background-color: var(--main-color);
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 0px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  animation: backto-top-bounce 4s infinite ease-in-out;
  visibility: hidden;
  z-index: 1000;
}
#back-to-top::after {
  content: "";
  position: absolute;
  background: #fff;
  top: 50%;
  margin-top: -2.5px;
  height: 3px;
  width: 14px;
  line-height: 50px;
  transform: rotate(
-43deg
);
  left: 8.5px;
}
#back-to-top::before {
  content: "";
  position: absolute;
  background: #fff;
  top: 50%;
  margin-top: -2.5px;
  height: 2px;
  width: 12px;
  line-height: 50px;
  transform: rotate(
50deg
);
  right: 10.5px;
}
#back-to-top:hover {
  cursor: pointer;
  background-color: #19352D;
}
#back-to-top:active {
  background-color: #19352D;
}
#back-to-top.show {
  opacity: 1;
  visibility: visible;
}
/* .back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 44px;
  height: 44px;
  color: #fff;
  background-color: var(--main-color);
  text-align: center;
  line-height: 44px;
  z-index: 99;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: none;
  animation: backto-top-bounce 4s infinite ease-in-out;
  border-radius: 4px;
} */
@keyframes backto-top-bounce {
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-5px);
  }
}
/***navbar-area***/
.navbar-area {
  background: #fff;
  padding: 0;
  top: 0;
  position: fixed;
  z-index: 98;
  width: 100% !important;
  transition: all 0.4s;
  background: #fff;
}
.navbar {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: all 0.3s linear;
}
.top-nav-collapse {
  box-shadow: 0px 4px 6px 0px rgb(12 0 46 / 5%);
  top: 0;
  padding: 0;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.88);
}
.navbar-area .nav-container {
  transition: all 0.4s;
  padding: 16px 12px;
}
.top-nav-collapse .nav-container {
  background-color: transparent;
  padding: 16px 12px;
  transition: all 0.4s;
}
.navbar-area .nav-container .navbar-collapse .navbar-nav li {
  margin-top: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 50px;
  text-transform: capitalize;
}
.navbar-area .nav-container .navbar-collapse .navbar-nav li a {
  color: var(--heading-color);
  font-size: 18px;
  font-weight: 700;
  font-family: var(--heading-font);
  text-decoration: none;
}
.navbar-area .nav-container .navbar-collapse .navbar-nav li + li {
  margin-left: 30px;
}
.nav-right-part-desktop {
  margin-left: 30px;
}
.nav-right-part ul {
  padding: 0;
  margin: 0;
  display: inline-flex;
}
.nav-right-part ul li {
  list-style: none;
  align-self: center;
}
.nav-right-part-mobile {
  display: none;
}
.nav-right-part-mobile ul li a {
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
}
.nav-right-part-mobile ul li .cart {
  display: none;
}
.nav-right-part-mobile ul li .cart img {
  height: 20px;
  width: 20px;
  filter: invert(1);
}
/***banner-area***/
.banner-area {
  padding: 250px 0px 250px;
  background-size: cover !important;
  position: relative;
  background-position: center !important;
  overflow: hidden;
  background: fixed;
  background-color: #fff;
}
.banner-area:after {
  content: "";
  position: absolute;
  /* background: #080C24; */
  opacity: 0.98;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.banner-area .sidebar-links {
  position: fixed;
  right: 0;
  top: 50%;
  display: inline-block;
  margin-right: -105px;
  transition: 0.4s;
  transform: translateY(-50%);
  margin-top: -70px;
  z-index: 9;
}
.banner-area .sidebar-links:hover {
  margin-right: 0;
}
.banner-area .sidebar-links .btn {
  border-radius: 0;
  margin-bottom: 5px;
  width: 100%;
  padding: 0 18px;
  display: block;
  margin-right: 0;
  border: 1px solid #eae5e5;
}
.banner-area .sidebar-links .btn i {
  margin-right: 13px;
  font-size: 22px;
  float: left;
  margin-top: 14px;
}
.banner-inner {
  position: relative;
  z-index: 9;
}
.banner-logo {
  animation: 1.5s 0.4s fadeInUp both;
}
.banner-inner h1 {
  line-height: 1;
  font-weight: 700;
  font-size: 64px;
  margin-bottom: 25px;
  animation: 1.5s 0.4s fadeInUp both;
}
.banner-inner h1 span {
  color: #ffd934;
  display: block;
}
.banner-inner p {
  margin-bottom: 25px;
  font-size: 24px;
  line-height: 36px;
}
.banner-inner .me-5 {
  animation: 1.5s 0.6s fadeInUp both;
}
.banner-inner .banner-counter-wrap {
  animation: 1.5s 0.7s fadeInUp both;
}
.banner-inner .single-counter-inner .details h2 {
  /* color: #fff; */
}
.hero-thumb-wrap {
  text-align: center;
  position: relative;
  padding-top: 72px;
  padding-bottom: 120px;
  margin: 0 100px;
  z-index: 1;
}
.hero-thumb-wrap .hero-thumb6,
.hero-thumb-wrap .hero-thumb5,
.hero-thumb-wrap .hero-thumb4,
.hero-thumb-wrap .hero-thumb3,
.hero-thumb-wrap .hero-thumb2,
.hero-thumb-wrap .hero-thumb1 {
  box-shadow: 7px -7px 20px 0px rgba(40, 40, 40, 0.25);
  border-radius: 10px;
  display: inline-block;
  overflow: hidden;  
}
.hero-thumb-wrap .hero-thumb2 {
  bottom: 15px;
  left: 0;
  position: absolute;
}
.hero-thumb-wrap .hero-thumb3 {
  bottom: 0;
  right: 112px;
  position: absolute;
}
.hero-thumb-wrap .hero-thumb4 {
  top: 0;
  right: 0;
  z-index: -1;
  position: absolute;
}
.hero-thumb-wrap .hero-thumb5 {
  top: 0;
  left: 106px;
  z-index: -1;
  position: absolute;
}
.hero-thumb-wrap .hero-thumb6 {
  bottom: -50px;
  left: 50%;
  margin-left: -225px;
  position: absolute;
}

.hero-thumb-wrap .hero-thumb1 img {
  max-width: 722px;
}
.hero-thumb-wrap .hero-thumb2 img {
  max-width: 500px;
}
.hero-thumb-wrap .hero-thumb3 img {
  max-width: 350px;
}
.hero-thumb-wrap .hero-thumb4 img {
  max-width: 450px;
}
.hero-thumb-wrap .hero-thumb5 img {
  max-width: 360px;
}
.hero-thumb-wrap .hero-thumb6 img {
  max-width: 450px;
}
.jump-reverse {
  animation: jumpReverseAni 7s linear infinite;
}
@keyframes jumpReverseAni {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}
.jump {
  animation: jumpAni 7s linear infinite;
}
.jump1 {
  animation: jumpAni 6s linear infinite;
}
.jump2 {
  animation: jumpAni 5s linear infinite;
}
.jump3 {
  animation: jumpAni 4s linear infinite;
}
@keyframes jumpAni {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
/********* single-counter-inner *********/

.counter-area-inner {
  background: var(--main-color);
  padding: 50px 0 0 0;
  border-radius: 10px;
}
.single-counter-inner {
  margin-bottom: 50px;
}
.single-counter-inner h2 {
  font-size: 54px;
  font-weight: 700;
  color: #fff;
}
.single-counter-inner p {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0;
  color: #ffffff;
}

/***inner-item***/
.inner-item {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}
.inner-item .al-batch {
  height: 50px;
  width: 50px;
  font-size: 14px;
  background: #ff8400;
  border-radius: 50%;
  position: absolute;
  right: -12px;
  top: -20px;
  line-height: 50px;
  color: #fff;
  font-weight: 600;
}
/* .inner-item .thumb img {
  transition: transform 5000ms cubic-bezier(.455, .030, .515, .955);
} */
/* .inner-item:hover .thumb img {
  transform: translateY(calc(-100% + 430px));
} */
.inner-item .link {
  display: block;
  font-size: 22px;
  font-weight: 500;
  color: #1d1d1d;
  text-decoration: none;
  position: relative;
}
.inner-item .link .thumb {
  overflow: hidden;
  display: block;
  position: relative;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 5px 50px 0px rgb(0 0 0 / 20%);
  min-height: 430px;
  transition: 0.6s;
}
.inner-item .link .thumb:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
}
.inner-item .link img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scale(1) translateY(1);
  transition: transform 12s;
  display: block;
  width: 100%;
  height: initial;
}
.inner-item:hover .link .thumb:after {
  visibility: visible;
  opacity: 1;
}
.header-item {
  display: block;
}
.header-item .thumb {
  position: relative;
  display: block;
}
.header-item .thumb:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
  border-radius: 5px;
}
.header-item .thumb img {
  transition: 0.4s;
  border-radius: 5px;
}
.header-item:hover .thumb img {
  transform: scale(1.05);
}
.header-item:hover .thumb:after {
  visibility: visible;
  opacity: 1;
  transform: scale(1.05);
}

.inner-item.coming-soon a .thumb img {
  filter: blur(12px);
}
.cm-soon-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.inner-item:hover .cm-soon-title {
  color: #fff;
}
.inner-item .btn-group {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #fff;
  margin-top: -22px;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
  gap: 20px;
  flex-wrap: wrap;
}
.inner-item .btn-group .btn {
  font-size: 14px;
  width: 100%;
  border-radius: 3px !important;
  font-weight: 700;
  color: #ffffff;

}
.inner-item .item-title {
  font-size: 18px;
}
.inner-item:hover .btn-group {
  visibility: visible;
  opacity: 1;
}

/***section-title***/
.section-title {
  margin-bottom: 60px;
}
.section-title h5 {
  font-weight: 600;
  color: var(--main-color);
  margin-bottom: 6px;
}
.section-title h2 {
  font-size: 42px;
  font-weight: 700;
  color: var(--heading-color);
}
.section-title p {
  font-size: 22px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
}
/***default-padding***/
.pd-top-100 {
  padding-top: 100px;
}
.pd-top-47 {
  padding-top: 47px;
}
.pd-top-70 {
  padding-top: 70px;
}
.pd-top-87 {
  padding-top: 87px;
}
.pd-top-110 {
  padding-top: 110px;
}
.pd-top-120 {
  padding-top: 120px;
}
.pd-top-135 {
  padding-top: 135px;
}
.pd-top-130 {
  padding-top: 130px;
}
.pd-top-140 {
  padding-top: 140px;
}
.pd-top-150 {
  padding-top: 150px;
}

.pd-bottom-100 {
  padding-bottom: 100px;
}
.pd-bottom-97 {
  padding-bottom: 97px;
}
.pd-bottom-65 {
  padding-bottom: 65px;
}
.pd-bottom-105 {
  padding-bottom: 105px;
}
.pd-bottom-110 {
  padding-bottom: 110px;
}
.pd-bottom-120 {
  padding-bottom: 120px;
}
.pd-bottom-130 {
  padding-bottom: 130px;
}
.pd-bottom-140 {
  padding-bottom: 140px;
}
.pd-bottom-150 {
  padding-bottom: 150px;
}

.typed::after {
  content: "|";
  display: inline;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
}

/*Removes cursor that comes with typed.js*/
.typed-cursor {
  opacity: 0;
  display: none !important;
}
/*Custom cursor animation*/
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media all and (max-width: 1599px) {
  .banner-area {
    padding: 220px 0px 200px;
  }
  .hero-thumb-wrap .hero-thumb5 {
    left: 0;
  }
  .hero-thumb-wrap .hero-thumb4 img {
    max-width: 400px;
  }
  .hero-thumb-wrap .hero-thumb2 img {
    max-width: 360px;
  }
  .hero-thumb-wrap .hero-thumb3 {
    right: 20px;
  }
  .hero-thumb-wrap .hero-thumb6 img {
    max-width: 300px;
  }
  .hero-thumb-wrap .hero-thumb6 {
    bottom: -20px;
    margin-left: -150px;
  }
}
@media all and (max-width: 1199px) {
  .hero-thumb-wrap {
    display: none;
  }
  .banner-area .bg-image {
    opacity: 0.2;
    z-index: 0;
  }
  .banner-inner p {
    margin: 0 20px !important;
  }
  .btn {
    height: 50px;
    line-height: 50px;
  }
  .pd-top-140 {
    padding-top: 100px;
  }
  .pd-bottom-97 {
    padding-bottom: 57px;
  }
  .pd-top-87 {
    padding-top: 47px;
  }
  .pd-bottom-90 {
    padding-top: 90px;
  }
  .banner-area {
    padding: 228px 0px 218px;
  }
}
@media all and (max-width: 991px) {
  .nav-right-part-mobile {
    display: block;
  }
  .banner-inner h1 {
    font-size: 70px;
  }
}
@media all and (max-width: 575px) {
  .nav-right-part-desktop {
    margin-left: 10px;
  }
  .section-title h5 {
    font-size: 18px;
  }
  .counter-area {
    transform: translateY(0);
    margin-top: 0;
  }
  .single-counter-inner h2 {
    font-size: 30px;
  }
}
@media all and (max-width: 767px) {
  .nav-right-part ul li .btn {
    display: none;
  }
  .nav-right-part-mobile ul li .cart {
    display: block;
  }
  .nav-right-part-desktop {
    margin-left: 0px;
  }
  .banner-inner h1 {
    line-height: 46px;
    font-size: 33px;
    margin-bottom: 15px;
  }
  .banner-inner p {
    font-size: 18px;
    line-height: inherit;
    letter-spacing: 0;
  }
  .banner-inner p span {
    font-size: 20px;
  }
  .banner-area {
    padding: 180px 0px 100px;
  }
  .section-title h2 {
    font-size: 30px;
  }
  .btn {
    padding: 0 21px;
  }
  .footer-widget.pd-bottom-100 {
    padding-bottom: 70px;
  }
  .footer-widget h5 {
    font-size: 16px;
  }
  .main-logo img {
    width: 160px;
  }
}
@media all and (max-width: 320px) {
  .main-logo img {
    width: 110px;
  }
  .nav-right-part ul li {
    font-size: 15px;
  }
  .nav-right-part ul li a {
    padding: 0 7px;
  }
}
.featured-item {
  box-shadow: 0 0 40px rgb(82 85 90 / 10%);
  text-align: center;
  margin-bottom: 30px;
  padding: 40px 20px 35px 20px;
  background: #fff;
  border-radius: 5px;
  color: #1d1d1d;
  font-size: 22px;
}
.featured-item img {
  display: block;
  margin: 0 auto 20px;
  box-shadow: 0 0 40px rgb(82 85 90 / 20%);
  border-radius: 5px;
}
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 25px 0;
  position: relative;
  z-index: 2;
}
.footer-bottom p {
  margin-bottom: 0;
  color: #fff;
}
.footer-bottom p a {
  color: #ff8400;
  text-decoration: none;
  font-weight: 600;
}
.footer-area {
  position: relative;
}
.footer-widget {
  position: relative;
  z-index: 9;
}
/* .footer-area:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.75);
} */

.single-pricing-wrap {
  border: 2px solid #e9e9e9;
  padding: 60px;
  margin-bottom: 30px;
  background: #fff;
}
.single-pricing-wrap .price {
  border-bottom: 1px solid #eaeaea;
  margin-top: -7px;
  padding-bottom: 10px;
  margin-bottom: 31px;
}
.single-pricing-wrap .price span {
  display: inline-block;
}
.single-pricing-wrap span.title {
  font-size: 24px;
  margin-bottom: 15px;
  display: inline-block;
}
.single-pricing-wrap .price h2 {
  display: inline-block;
  font-size: 45px;
}
.single-pricing-wrap .pricing-list {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 33px;
}
.single-pricing-wrap .pricing-list li {
  font-size: 16px;
  margin-bottom: 10px;
}
.single-pricing-wrap .pricing-list li:last-child {
  margin-bottom: 0;
}
.single-pricing-wrap .pricing-list li.unable {
  color: #cdcdcd;
}
.single-pricing-wrap .pricing-list li i {
  margin-right: 20px;
}
.single-pricing-wrap .more-work-btn {
  width: 100%;
}
.single-pricing-wrap .primary-btn {
  background: var(--heading-color);
}
.video-play-btn {
  border-radius: 50%;
  background: #f7f7f7;
  width: 90px;
  height: 90px;
  display: inline-block;
  line-height: 100px;
  position: relative;
  z-index: 0;
  text-align: center;
  animation: ripple-white3 2.5s linear infinite;
  z-index: 9;
}
.video-play-btn:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(247, 247, 247, 0.4);
  top: -10px;
  left: -10px;
}
.video-play-btn i {
  color: #585858;
  margin-left: 6px;
  font-size: 28px;
}
@keyframes ripple-white3 {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 10px rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 100px rgba(255, 255, 255, 0);
  }
}


  `
  return <>
    <style dangerouslySetInnerHTML={{ __html: cssCode }} />
    {/* Navigation */}
    {active === true && <Preloader />}
    <header className="navbar-area bg-white">
      <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
        <div className="container nav-container">
          <div className="logo">
            <Link className="main-logo" to="/">
              <img src="assets/demo-img/logo.svg" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile ms-auto">
            <ul className="text-end">
              <li>
                <a className="page-scroll" href="#demo">
                  Demos
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#inner">
                  Inners
                </a>
              </li>
              <li>
                <a className="cart" href="log-in">
                  <img src="assets/demo-img/add-to-cart.svg" alt="img" />
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="al_main_menu">
            <ul className="navbar-nav menu-open text-center m-auto">
              <li>
                <a className="page-scroll" href="#demo">
                  Demos
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#inner">
                  Inner Pages
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#header">
                  Header
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#footer">
                  Footer
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#featured">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop">
            <ul>
              <li>
                <a
                  href="https://themeforest.net/user/wowtheme7"
                  className="btn btn-base"
                >
                  Purchase Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    {/* Banner Area Start*/}
    <section id="banner" className="banner-area">
      <div className="sidebar-links">
        <a
          className="btn btn-white"
          href="https://themeforest.net/user/wowtheme7"
        >
          <i className="fa fa-cart-arrow-down" />
          Add To Cart
        </a>
        <a className="btn btn-white" href="https://bizmaster-react.wowtheme7.com/home-1">
          <i className="fa fa-cog" />
          Demo Link
        </a>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 align-self-center">
            <div className="banner-inner text-center">
              <img
                className="banner-logo"
                src="assets/demo-img/logo-big.png"
                alt="logo"
              />
              <h1 className="mt-4">
                Bizmaster - Business Consulting React Js Template
              </h1>
              <p className="me-5 mb-5">
                Bizmaster is Business Consulting React Js Template built for an array
                of services with a number of auto service and car repair
                institutions in mind.
              </p>
              <div className="btn-area">
                <a className="btn btn-border page-scroll" href="#demo">
                  Try Demos
                </a>
                <a
                  className="btn btn-base me-0"
                  href="https://themeforest.net/user/wowtheme7"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="hero-thumb-wrap">
          <div className="hero-thumb1">
            <img src="assets/demo-img/01.png" alt="img" />
          </div>
          <div className="hero-thumb2 jump">
            <img src="assets/demo-img/06.png" alt="img" />
          </div>
          <div className="hero-thumb3 jump">
            <img src="assets/demo-img/03.png" alt="img" />
          </div>
          <div className="hero-thumb4 jump-reverse">
            <img src="assets/demo-img/04.png" alt="img" />
          </div>
          <div className="hero-thumb5 jump-reverse">
            <img src="assets/demo-img/05.png" alt="img" />
          </div>
          <div className="hero-thumb6 jump-reverse">
            <img src="assets/demo-img/02.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
    {/* Banner Area End */}
    {/* counter start */}
    <div className="counter-area pd-top-135 pd-bottom-90">
      <div className="container">
        <div
          className="counter-area-inner wow fadeInUp animated"
          data-wow-duration="1.5s"
          data-wow-delay="0.2s"
        >
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="single-counter-inner text-center">
                <div className="details">
                  <h2>
                    <span className="counter">17</span>+
                  </h2>
                  <p>Total Pages</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-counter-inner text-center">
                <div className="details">
                  <h2>
                    <span className="counter">05</span>
                  </h2>
                  <p>Total Homes</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-counter-inner text-center">
                <div className="details">
                  <h2>
                    <span className="counter">12</span>+
                  </h2>
                  <p>Inner Pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
    {/* counter end */}
    {/* demo Section */}
    <section id="demo" className="demo-section pd-top-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              className="section-title wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <h5 className="subtitle">AWESOME DEMOS</h5>
              <h2 className="title">Great Home Pages</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/1.png" alt="img" />
                </span>
                Home V.1
                <div className="item-title">Home Business </div>
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/home-1">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/home-1">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/2.png" alt="img" />
                </span>
                Home V.2
                <div className="item-title">Home Consulting</div>
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/home-2">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/home-2">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/3.png" alt="img" />
                </span>
                Home V.3
                <div className="item-title">Home Corporate</div>
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/home-3">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/home-3">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/4.png" alt="img" />
                </span>
                Home V.4
                <div className="item-title">Home Startup Business </div>
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/home-4">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/home-4">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/5.png" alt="img" />
                </span>
                Home V.5
                <div className="item-title">Home Business Agency </div>
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/home-5">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/home-5">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* inner Section */}
    <section id="inner" className="inner-section pd-top-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              className="section-title wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <h2 className="title">Great Inner Pages</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/about.png" alt="img" />
                </span>
                About Page
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/about">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/about">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/service.png" alt="img" />
                </span>
                Service Page
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/service">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/service">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/service-details.png" alt="img" />
                </span>
                Service Details
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/service-details">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/service-details">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/project.png" alt="img" />
                </span>
                Project Page
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/project">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/project">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/project-details.png" alt="img" />
                </span>
                Project Details
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/project-details">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/project-details">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/team.png" alt="img" />
                </span>
                Team Page
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/team">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/team">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/team-details.png" alt="img" />
                </span>
                Team Details
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/team-details">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/team-details">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/blog.png" alt="img" />
                </span>
                Blog Page
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/blog">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/blog">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/blog-details.png" alt="img" />
                </span>
                Blog Details
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/blog-details">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/blog-details">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/pricing.png" alt="img" />
                </span>
                Pricing Page
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/pricing">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/pricing">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="inner-item style-large wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="link">
                <span className="thumb">
                  <img src="assets/demo-img/contact.png" alt="img" />
                </span>
                Contact Page
              </div>
              <div className="btn-group">
                <Link className="btn btn-base" to="https://bizmaster-react.wowtheme7.com/contact">
                  Live Demo
                </Link>
                <Link className="btn btn-base" to="https://bizmaster-react-rtl.wowtheme7.com/contact">
                  RTL Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* demo Section */}
    <section id="header" className="widget-section pd-top-87">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              className="section-title wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <h2 className="title">Header Style</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="header-item mb-4">
              <span className="thumb">
                <img className="w-100" src="assets/demo-img/header.png" alt="img" />
              </span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="header-item mb-4">
              <span className="thumb">
                <img className="w-100" src="assets/demo-img/header2.png" alt="img" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* demo Section */}
    <section id="footer" className="widget-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center pd-top-130">
            <div className="section-title">
              <h2 className="title">Footer Style</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="header-item mb-4">
              <span className="thumb">
                <img className="w-100" src="assets/demo-img/footer.png" alt="img" />
              </span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="header-item mb-4">
              <span className="thumb">
                <img className="w-100" src="assets/demo-img/footer2.png" alt="img" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* inner Section */}
    <section id="featured" className="featured-section pd-top-87 pd-bottom-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              className="section-title wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <h2 className="title">Core Features</h2>
              {/* <p>We have created a new product that will help designers, developers and com-panies create websites for their startups quickly and easily.</p> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <img src="assets/demo-img/featured/3.png" alt="img" />
              Bootstrap 5+
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <img src="assets/demo-img/featured/1.png" alt="img" />
              Sass
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <img src="assets/demo-img/featured/4.png" alt="img" />
              Font-Awesome
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <img src="assets/demo-img/featured/2.png" alt="img" />
              NPM
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <img src="assets/demo-img/featured/5.png" alt="img" />
              HTML5
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <img src="assets/demo-img/featured/6.png" alt="img" />
              CSS3
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <img src="assets/demo-img/featured/8.png" alt="img" />
              W3C Validation
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <img src="assets/demo-img/featured/9.png" alt="img" />
              Clean Code
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <img src="assets/demo-img/featured/12.png" alt="img" />
              100% Responsive
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <img src="assets/demo-img/featured/11.png" alt="img" />
              Google Fonts
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <img src="assets/demo-img/featured/14.png" alt="img" />
              Well Documented
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <img src="assets/demo-img/featured/15.png" alt="img" />
              Counter Up
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="featured-item wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <img src="assets/demo-img/featured/13.png" alt="img" />
              React router dom
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* footer area start */}
    <footer
      className="footer-area pd-top-100"
      style={{ backgroundImage: 'url("assets/demo-img/footer-bg.png")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="footer-widget widget text-center pd-bottom-100">
              <Link className="logo" to="/">
                <img src="assets/demo-img/logo-white.svg" alt="#" />
              </Link>
              <h5 className="text-white mb-5 mt-5 lh-base">
                It is a modern &amp; beautiful Business Consulting HTML Template.
                It's Specially Business &amp; Business Consulting Company website.
              </h5>
              <a
                className="btn btn-white"
                href="https://themeforest.net/user/wowtheme7"
              >
                Purchase Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center align-self-center">
              <p>Copyright by wowtheme7</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* footer area end */}

  </>;
};

export default IndexPage;
