import React from "react";
import { Box, Link } from "@mui/material";

import { ReactComponent as AirplaneIcon } from "../../assets/icons/airplane.svg";
import { ReactComponent as BusIcon } from "../../assets/icons/bus.svg";
import { ReactComponent as ShipIcon } from "../../assets/icons/ship.svg";
import vehicle from "../../assets/icons/vehicle.png";
import border from "../../assets/icons/border.png";
import { ListWithIcons } from "../atoms/ListWithIcons";

const TravelingTips = () => (
  <ListWithIcons>
    <ListWithIcons.Item>
      <ListWithIcons.Icon>
        <AirplaneIcon />
      </ListWithIcons.Icon>

      <ListWithIcons.Text>
        Te recomendamos elegir un vuelo que llegue antes de las 14.00 hrs a
        Balmaceda.
      </ListWithIcons.Text>
    </ListWithIcons.Item>
    <ListWithIcons.Item>
      <ListWithIcons.Icon sx={{ transform: "scale(-1,1)" }}>
        <BusIcon />
      </ListWithIcons.Icon>

      <ListWithIcons.Text>
        Se puede contratar un transfer llamando a Freddy Morales al +569 9506
        2906 (coordinar con anticipación).
      </ListWithIcons.Text>
    </ListWithIcons.Item>
    <ListWithIcons.Item>
      <ListWithIcons.Icon>
        <ShipIcon />
      </ListWithIcons.Icon>
      <ListWithIcons.Text>
        Los boletos de barcaza se compran en{" "}
        <Link href="https://www.somarco.cl">www.somarco.cl</Link> buscando las
        barcazas del Lago General Carrera. Los cupos se abren a fin del mes
        anterior.
      </ListWithIcons.Text>
    </ListWithIcons.Item>
    <ListWithIcons.Item>
      <Box sx={{ marginRight: 2 }}>
        <img src={vehicle} alt="vehicle" height={50} width={50} />
      </Box>
      <ListWithIcons.Text>
        Si van a arrendar un auto, les recomendamos hacerlo con anticipación ya
        que estaremos en temporada alta. Los Rent-a-Car más conocidos son:
        <strong> Varona, Mitta, Hertz, Traeger y Europcar.</strong>
      </ListWithIcons.Text>
    </ListWithIcons.Item>
    <ListWithIcons.Item>
      <Box sx={{ marginRight: 2 }}>
        <img src={border} alt="border" height={50} width={50} />
      </Box>
      <ListWithIcons.Text>
        Por tierra existen 3 formas más de venir:
        <ul>
          <li>
            Dando la vuelta al lago
            <ul>
              <li>Ruta 7 hasta el cruce</li>
              <li>Ruta 265 hasta Chile Chico</li>
              <li>Tiempo aproximado: 7 horas</li>
            </ul>
          </li>
          <li>
            Argentina Paso Huemules
            <ul>
              <li>
                Requiere padrón o permiso del auto, seguro obligatorio del auto,
                pases de movilidad al día y carnet al día
              </li>
              <li>Tiempo aproximado: 4 horas</li>
            </ul>
          </li>
          <li>
            Argentina Paso Palavicinia
            <ul>
              <li>Tiempo aproximado: 4:30 horas</li>
              <li>Requiere hacer un trámite aparte en Coyhaique</li>
            </ul>
          </li>
        </ul>
        Pueden encontrar todas las rutas por Google Maps.
      </ListWithIcons.Text>
    </ListWithIcons.Item>
  </ListWithIcons>
);

export default TravelingTips;
