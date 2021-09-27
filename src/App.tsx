import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import { Invitation } from "./components/Invitation";
import { Hero } from "./components/Hero";
import { HowToGetThere } from "./components/HowToGetThere";
import { WhereToStay } from "./components/WhereToStay";
import { AboutTheWedding } from "./components/AboutTheWedding";
import { AboutChileChico } from "./components/AboutChileChico";
import { Footer } from "./components/Footer";

function App() {
  const classes = useStyles();
  return (
    <div>
      <Hero />
      <Invitation />
      <HowToGetThere />
      <div className={classes.imageContainer}>
        <img
          src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/wedding-loops.jpeg"
          alt="wedding-loops"
          className={classes.image1}
        />
      </div>
      <WhereToStay />
      <div className={classes.imageContainer}>
        <img
          src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/cami-eyal-apidame-low.jpg"
          alt="apidame"
          className={classes.image2}
        />
      </div>
      <AboutTheWedding />
      <AboutChileChico />
      <Footer />
    </div>
  );
}

export default App;

const useStyles = makeStyles<Theme>((theme) => ({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image1: {
    width: "100vw",
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      width: "50vw",
      transform: "rotate(2.5deg)",
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(4),
    },
  },
  image2: {
    width: "100vw",
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      width: "50vw",
      transform: "rotate(-2.5deg)",
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(4),
    },
  },
}));
