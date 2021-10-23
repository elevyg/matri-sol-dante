import React from "react";

import Invitation from "../../components/Invitation";
import Hero from "../../components/Hero";

import Footer from "../../components/Footer";
import RSVP from "../../components/RSVP";
import Gifts from "../../components/Gifts";
import { Image } from "../../components/atoms";

const Home = () => (
  <div>
    <Hero backgroundImage="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/loa-circulo.jpg" />
    <RSVP />
    <Image
      src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/loa-pampa.jpg"
      alt="loa"
      mdRotation="right"
    />
    <Gifts />
    <Invitation />
    <Footer />
  </div>
);

export default Home;
