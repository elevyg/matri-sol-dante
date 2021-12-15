import React from "react";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavigationBar from "./NavigationBar";

interface Props {
  backgroundImage: string;
  // eslint-disable-next-line react/require-default-props
  color?: string;
}

const Hero = ({ backgroundImage, color = "#fff" }: Props) => {
  const classes = useStyles({ backgroundImage, color });
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography fontWeight={700} className={classes.title} fontSize={30}>
          La Cami y Eyal se casan
        </Typography>
      </div>
      <NavigationBar color={color} />
    </div>
  );
};

export default Hero;

const useStyles = makeStyles<Theme, { backgroundImage: string; color: string }>(
  (theme) => ({
    container: {
      backgroundImage: (props) => `url("${props.backgroundImage}")`,
      width: "100vw",
      height: "60vh",
      backgroundSize: "cover",
      backgroundPosition: "35% 50%",
      [theme.breakpoints.up("md")]: {
        height: "80vh",
        backgroundPosition: "50% 50%",
      },
    },
    titleContainer: {
      border: (props) => `2px solid ${props.color}`,
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
      color: (props) => props.color,
      width: "70%",
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
  })
);
