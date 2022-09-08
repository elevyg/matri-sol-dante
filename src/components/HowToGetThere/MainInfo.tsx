import React from "react";
import { Typography, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const MainInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container mt={2}>
        <Grid item>
          <Typography fontWeight={700} variant="body1">
            La mejor manera de llegar a Chile Chico es:
          </Typography>

          <ol className={classes.list}>
            <li>Viajar en avión de Santiago a Balmaceda.</li>
            <li>Tomar transfer de Balmaceda a Puerto Ibañez.</li>
            <li>Tomar barcaza de Puerto Ibañez a Chile Chico.</li>
            <li>
              La barcaza llega a la plaza de Chile Chico y ya estarán cerca de
              todo.
            </li>
          </ol>

          <Typography variant="body1">
            Lo mejor es planificar un itinerario holgado porque en la patagonia
            todo puede pasar.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MainInfo;

const useStyles = makeStyles<Theme>((theme) => ({
  list: {
    fontFamily: "Vollkorn",
    lineHeight: 1.25,
    fontSize: "1rem",
  },
}));
