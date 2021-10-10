import React from "react";
import { Grid, SvgIcon, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as AirplaneIcon } from "../../assets/icons/airplane.svg";
import { ReactComponent as BusIcon } from "../../assets/icons/bus.svg";
import { ReactComponent as ShipIcon } from "../../assets/icons/ship.svg";
import { ReactComponent as DottedArrowIcon } from "../../assets/icons/dotted-arrow.svg";

import ItineraryItem from "./ItineraryItem";

const RecommendedItinerary = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" fontWeight="700">
        Itinerario recomendado
      </Typography>
      <Grid container direction="row" mt={2} justifyContent="space-evenly">
        <ItineraryItem eta="12:00" duration="2-3 horas">
          <AirplaneIcon />
        </ItineraryItem>
        <SvgIcon sx={{ fontSize: 50 }}>
          <DottedArrowIcon />
        </SvgIcon>

        <ItineraryItem
          eta="16:00"
          duration="2 horas"
          iconProps={{ sx: { transform: "scale(-1,1)" } }}
        >
          <BusIcon />
        </ItineraryItem>
        <SvgIcon sx={{ fontSize: 50 }}>
          <DottedArrowIcon />
        </SvgIcon>
        <ItineraryItem eta="20:00" duration="2 horas">
          <ShipIcon />
        </ItineraryItem>
      </Grid>
    </div>
  );
};

export default RecommendedItinerary;

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    margin: theme.spacing(5, 0),
  },
}));
