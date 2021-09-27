import React from "react";
import { SvgIcon, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ReactComponent as HotelIcon } from "../../assets/icons/hotel.svg";
import { ReactComponent as TaxiIcon } from "../../assets/icons/taxi.svg";
import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";

const WhereToStay = () => {
  const classes = useStyles();
  return (
    <Section>
      <Section.Title>
        <TitleWithIcon title="¿Donde alojar?">
          <HotelIcon />
        </TitleWithIcon>
      </Section.Title>
      <Section.Content>
        <Typography variant="body1" fontWeight="700" mt={2}>
          ¡Es importante que comiencen a buscar alojamiento ya!, no hay mucho.
        </Typography>
        <Typography variant="body1" mt={2}>
          En la hosteria de la Patagonia (donde celebraremos el matrio) hay un
          camping excelente.
        </Typography>
        <Typography variant="body1" mt={2}>
          De los lugares que más nos han recomendado son:
        </Typography>
        <ul className={classes.list}>
          <li>
            Cabañas el Engaño
            <ul>
              <li>Tel: +569 9134 8162</li>
            </ul>
          </li>
          <li>
            Cabañas el Refugio
            <ul>
              <li>Tel: +569 8209 1990</li>
            </ul>
          </li>
          <li>
            Hotel Costanera
            <ul>
              <li>Tel: +569 4095 7890</li>
            </ul>
          </li>
        </ul>
        <Typography variant="body1" mt={2}>
          Muchas personas particulares arrriendan cabañas. Podemos ayudarlos a
          buscar si nos dan sus fechas y cuantos serán.
        </Typography>
        <div className={classes.taxi}>
          <SvgIcon sx={{ fontSize: 40 }} className={classes.taxiIcon}>
            <TaxiIcon />
          </SvgIcon>
          <Typography variant="body1">
            Existe una opción VIP, de avionetas Aerocord que viajan de Coyhaique
            a Chile Chico. Revisar www.aerocord.cl
          </Typography>
        </div>
      </Section.Content>
    </Section>
  );
};

export default WhereToStay;

const useStyles = makeStyles<Theme>((theme) => ({
  list: {
    fontFamily: " Neutra Text Alt,Neutra Text Light,Neutra Text TF,Neutra Text",
    lineHeight: 1.25,
    fontSize: "1rem",
  },
  taxi: {
    border: "1.5px dashed",
    borderRadius: 50,
    borderColor: theme.palette.grey[400],
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  taxiIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.grey[400],
  },
}));
