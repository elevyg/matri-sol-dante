import React from "react";

import HowToGetThere from "../../components/HowToGetThere";
import WhereToStay from "../../components/WhereToStay";
import AboutChileChico from "../../components/AboutChileChico";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { Image } from "../../components/atoms";

const BasicInfo = () => (
  <div>
    <Hero backgroundImage="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/cami-eyal-lake.jpeg" />
    <HowToGetThere />
    <Image
      src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/wedding-loops.jpeg"
      alt="wedding-loops"
      mdRotation="right"
    />
    <WhereToStay />
    <Image
      src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/cami-eyal-apidame-low.jpg"
      alt="apidame"
      mdRotation="left"
    />
    <AboutChileChico />
    <Footer />
  </div>
);

export default BasicInfo;
