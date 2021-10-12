import {
  Dialog,
  IconButton,
  SvgIcon,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { ReactComponent as Bar } from "../../assets/icons/bar.svg";

const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  if (isDesktop) {
    return (
      <div className={classes.desktopContainer}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h5" color="#fff">
            Inicio
          </Typography>
        </Link>

        <Link to="/info-basica" style={{ textDecoration: "none" }}>
          <Typography variant="h5" color="#fff">
            Info básica
          </Typography>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <IconButton
        size="large"
        component="span"
        onClick={() => setOpenMenu(true)}
      >
        <SvgIcon
          viewBox="0 0 128 128"
          component={Bar}
          className={classes.bar}
          sx={{ fontSize: 60 }}
        />
      </IconButton>
      <Dialog
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{ sx: { backgroundColor: "transparent" } }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h2" color="#fff">
            Inicio
          </Typography>
        </Link>

        <Link to="/info-basica" style={{ textDecoration: "none" }}>
          <Typography variant="h2" color="#fff" mt={2}>
            Info básica
          </Typography>
        </Link>
      </Dialog>
    </div>
  );
};

export default NavigationBar;

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  bar: { color: "#fff", fontSize: 100, transform: "scale(-1,1)" },
  desktopContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    width: 300,
    flex: 1,
    justifyContent: "space-evenly",
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },
}));
