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
        <TitleWithIcon title="¿Dónde alojar?">
          <HotelIcon />
        </TitleWithIcon>
      </Section.Title>
      <Section.Content>
        <Typography variant="body1" fontWeight="700" mt={2}>
          ¡Es importante que comiencen a buscar alojamiento ya!, no hay mucho.
        </Typography>
        <Typography variant="body1" mt={2}>
          Algunos datos:
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
          <li>
            Casona Belga
            <ul>
              <li>Tel: +569 3430 1971</li>
            </ul>
          </li>
          <li>
            Hostería Posada del río (a 2 KM de distancia)
            <ul>
              <li>Tel: +569 7985 7512</li>
            </ul>
          </li>
          <li>
            Camping Hostería de la Patagonia
            <ul>
              <li>Tel: +569 8159 2146</li>
            </ul>
          </li>
          <li>
            Cabañas Frau Schuster
            <ul>
              <li>Tel: +569 8222 9315</li>
            </ul>
          </li>
          <li>
            Cabañas Brisas del Lago
            <ul>
              <li>Tel: +569 8462 6289</li>
            </ul>
          </li>
        </ul>
        <div className={classes.taxi}>
          <SvgIcon sx={{ fontSize: 40 }} className={classes.taxiIcon}>
            <TaxiIcon />
          </SvgIcon>
          <Typography variant="body1">
            En Chile Chico, todo queda relativamente cerca y lo más común es
            moverse caminando o en taxi.
          </Typography>
        </div>
      </Section.Content>
    </Section>
  );
};

export default WhereToStay;

const useStyles = makeStyles<Theme>((theme) => ({
  list: {
    fontFamily: "Vollkorn",
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
