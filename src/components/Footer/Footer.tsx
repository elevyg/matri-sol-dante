import React from "react";
import { SvgIcon, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as FlamingoIcon } from "../../assets/icons/flamingo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <div style={{}}>
        <Typography>{` Todos los derechos reservados ${year}`}</Typography>
        <div>
          <Typography>
            Iconos hechos por{" "}
            <a
              href="https://www.flaticon.com/authors/good-ware"
              title="Good Ware"
              className={classes.a}
            >
              Good Ware
            </a>{" "}
            de{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              className={classes.a}
            >
              www.flaticon.com
            </a>
          </Typography>
        </div>
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
  },
  a: { color: "#Bdbdbdbd" },
  flamingoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
