import React from "react";

import Invitation from "../../components/Invitation";
import Hero from "../../components/Hero";

import Footer from "../../components/Footer";

const Home = () => {
  console.log("hola");
  return (
    <div>
      <Hero />
      <Invitation />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Home;
