import React from "react";
import { SvgIcon, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as FlamingoIcon } from "../../assets/icons/flamingo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <div>
        <Typography>{` Todos los derechos reservados ${year}`}</Typography>
      </div>
      <div className={classes.flamingoContainer}>
        <SvgIcon sx={{ fontSize: 80 }}>
          <FlamingoIcon />
        </SvgIcon>
        <Typography variant="caption" mt={3}>
          Chile Chico, Aysén
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;

const useStyles = makeStyles<Theme>((theme) => ({
  footerContainer: {
    backgroundColor: "#2f3d59",
    height: "30vh",
    color: "#fff",
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column-reverse",
    padding: "3rem 0rem",
    [theme.breakpoints.up("md")]: { flexDirection: "row" },
  },
  a: { color: "#Bdbdbdbd" },
  flamingoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
