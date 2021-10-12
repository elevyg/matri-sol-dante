import React from "react";

import Invitation from "../../components/Invitation";
import Hero from "../../components/Hero";

import Footer from "../../components/Footer";
import RSVP from "../../components/RSVP";

const Home = () => {
  console.log("hola");
  return (
    <div>
      <Hero />
      <RSVP />
      <Invitation />
      <Footer />
    </div>
  );
};

export default Home;
