import React from "react";

import Invitation from "../../components/Invitation";
import Hero from "../../components/Hero";

import Footer from "../../components/Footer";

import Gifts from "../../components/Gifts";
import { Image } from "../../components/atoms";
import AboutTheWedding from "../../components/AboutTheWedding";

const Home = () => (
  <div>
    <Hero
      backgroundImage="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/cami+y+eyal+coyhaique+circulo.jpg"
      color="#243140"
    />
    <AboutTheWedding />
    <Image
      src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/loa-salto.jpg"
      alt="loa"
      mdRotation="right"
    />
    <Gifts />
    <Invitation />
    <Footer />
  </div>
);

export default Home;
