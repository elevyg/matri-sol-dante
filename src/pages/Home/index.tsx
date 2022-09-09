import React from "react";
import { Box } from "@mui/material";

import HowToGetThere from "../../components/HowToGetThere";
import Hero from "../../components/Hero";

import Footer from "../../components/Footer";

import Gifts from "../../components/Gifts";
import { Image } from "../../components/atoms";
import AboutTheWedding from "../../components/AboutTheWedding";
import WhereToStay from "../../components/WhereToStay";
import RSVP from "../../components/RSVP";

const Home = () => (
  <Box display="flex" flex={1} flexDirection="column">
    <Hero />
    <RSVP />
    <AboutTheWedding />
    <Image
      src="https://i.postimg.cc/jjmDSsKt/hosteria-de-la-patagonia.jpg"
      alt="hosteria-de-la-patagonia"
      mdRotation="left"
    />
    <Gifts />
    <Box sx={{ marginBottom: 3, backgroundColor: "#eeeeee", paddingY: 4 }}>
      <HowToGetThere />
    </Box>
    <Box sx={{ marginBottom: 3, paddingY: 4 }}>
      <WhereToStay />
    </Box>
    <Footer />
  </Box>
);

export default Home;
