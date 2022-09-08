import React from "react";
import { Box } from "@mui/material";

import HowToGetThere from "../../components/HowToGetThere";
import Hero from "../../components/Hero";

import Footer from "../../components/Footer";

import Gifts from "../../components/Gifts";
import { Image } from "../../components/atoms";
import AboutTheWedding from "../../components/AboutTheWedding";
import WhereToStay from "../../components/WhereToStay";

const Home = () => (
  <>
    <Hero />
    <AboutTheWedding />
    <Image
      src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/loa-salto.jpg"
      alt="loa"
    />
    <Gifts />
    <Box sx={{ marginBottom: 3, backgroundColor: "#eeeeee", paddingY: 4 }}>
      <HowToGetThere />
    </Box>
    <Box sx={{ marginBottom: 3, paddingY: 4 }}>
      <WhereToStay />
    </Box>
    <Footer />
  </>
);

export default Home;
