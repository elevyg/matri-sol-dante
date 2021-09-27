import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ReactComponent as AirplaneIcon } from "../../assets/icons/airplane.svg";
import { ReactComponent as BusIcon } from "../../assets/icons/bus.svg";
import { ReactComponent as ShipIcon } from "../../assets/icons/ship.svg";
import { ReactComponent as SmallPlaneIcon } from "../../assets/icons/small-plane.svg";
import { ListWithIcons } from "../atoms/ListWithIcons";

const TravelingTips = () => {
  const classes = useStyles();
  return (
    <ListWithIcons>
      <ListWithIcons.Item>
        <ListWithIcons.Icon>
          <AirplaneIcon />
        </ListWithIcons.Icon>

        <ListWithIcons.Text>
          Te recomendamos elegir un vuelo que salga antes del medio día (12pm)
          de Santiago a Balmaceda.
        </ListWithIcons.Text>
      </ListWithIcons.Item>
      <ListWithIcons.Item>
        <ListWithIcons.Icon>
          <BusIcon />
        </ListWithIcons.Icon>

        <ListWithIcons.Text>
          Se puede contratar un transfer llamando a Freddy Morales al +569 9506
          2906.
        </ListWithIcons.Text>
      </ListWithIcons.Item>
      <ListWithIcons.Item>
        <ListWithIcons.Icon>
          <ShipIcon />
        </ListWithIcons.Icon>
        <ListWithIcons.Text>
          Los boletos de barcaza se compran en www.barcazas.cl buscando las
          barcazas del Lago General Carrera. Los cupos se abren a comienzo de
          mes, estamos averiguando si podemos reservarles con más anticipación.
        </ListWithIcons.Text>
      </ListWithIcons.Item>
      <ListWithIcons.Item className={classes.plane}>
        <ListWithIcons.Icon className={classes.smallPlaneIcon}>
          <SmallPlaneIcon />
        </ListWithIcons.Icon>
        <ListWithIcons.Text>
          Existe una opción VIP, de avionetas Aerocord que viajan de Coyhaique a
          Chile Chico. Revisar www.aerocord.cl
        </ListWithIcons.Text>
      </ListWithIcons.Item>
    </ListWithIcons>
  );
};

export default TravelingTips;

const useStyles = makeStyles<Theme>((theme) => ({
  plane: {
    border: "1.5px dashed",
    borderRadius: 50,
    borderColor: theme.palette.grey[400],
    padding: theme.spacing(1, 2),
  },
  smallPlaneIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.grey[400],
  },
}));
