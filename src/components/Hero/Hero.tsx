import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {}

const Hero = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <img
        alt="eyal-cami-colbun"
        src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/cami-eyal-lake.jpeg"
        className={classes.image}
      />
      <div className={classes.titleContainer}>
        <Typography fontWeight={700} className={classes.title} fontSize={30}>
          La Cami y Eyal se casan
        </Typography>
      </div>
    </div>
  );
};

export default Hero;

const useStyles = makeStyles<Theme>((theme) => ({
  image: {
    width: "100vw",
    height: "60vh",
    objectFit: "cover",
    objectPosition: "35% 50%",
    [theme.breakpoints.up("md")]: {
      height: "auto",
      objectPosition: "50% 50%",
    },
  },
  titleContainer: {
    border: "2px solid #FFF",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "100%",
    width: "200px",
    height: "200px",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: theme.spacing(1, 0, 0, 2),
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
      margin: theme.spacing(3, 0, 0, 40),
    },
  },
  title: {
    color: "#fff",
    width: "70%",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
}));
