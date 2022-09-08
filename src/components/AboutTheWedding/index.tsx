import React from "react";
import { Link, Typography, Box } from "@mui/material";

import { ReactComponent as TentIcon } from "../../assets/icons/tent.svg";
import { ReactComponent as LoveLetterIcon } from "../../assets/icons/love-letter.svg";
import { ReactComponent as GrassIcon } from "../../assets/icons/grass.svg";
import { ReactComponent as JacketIcon } from "../../assets/icons/jacket.svg";
import { ReactComponent as DressIcon } from "../../assets/icons/dress.svg";
import { ReactComponent as DiscoBallIcon } from "../../assets/icons/disco-ball.svg";
import church from "../../assets/icons/church.png";
import { ListWithIcons } from "../atoms/ListWithIcons";
import Section from "../atoms/Section";
import { TitleWithIcon } from "../atoms";

const AboutTheWedding = () => (
  <Section>
    <Section.Title>
      <TitleWithIcon title="Sobre el matrimonio">
        <DiscoBallIcon />
      </TitleWithIcon>
    </Section.Title>
    <Section.Content>
      <Typography variant="h5" mt={2}>
        <strong>El evento es el día sábado 4 de febrero.</strong>{" "}
      </Typography>
      <Typography variant="body1" mt={2}>
        Acá algunos detalles:
      </Typography>
      <ListWithIcons justifyContent="center" display="flex">
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <Box sx={{ height: 50, width: 50 }}>
            <img src={church} alt="Church" width={50} height={50} />
          </Box>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            La misa es a las 11.00 hrs en la parroquia Nuestra Señora Del
            Carmen.
            <strong> Diego Portales 352, Chile Chico </strong>
          </ListWithIcons.Text>
        </ListWithIcons.Item>
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <TentIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            El evento es en la Hostería de la Patagonia.{" "}
            <Link
              href="https://www.google.com/maps?ll=-46.542092,-71.714083&z=13&t=m&hl=es-ES&gl=CL&mapclient=embed&cid=9785364336757744050"
              target="_blank"
            >
              {" "}
              (ver ubicación)
            </Link>
          </ListWithIcons.Text>
        </ListWithIcons.Item>
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <LoveLetterIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            ¡Compartiremos un almuerzo para terminar bailando!
          </ListWithIcons.Text>
        </ListWithIcons.Item>

        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <DressIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            Vestimenta semi formal: Vestido de verano, pantalón, camisa ...
          </ListWithIcons.Text>
        </ListWithIcons.Item>
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <GrassIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            La pista de baile es de pasto, para que elijas un calzado con el que
            puedas dar la vida bailando.
          </ListWithIcons.Text>
        </ListWithIcons.Item>
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <JacketIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            Puede haber viento, hacer frío o llover ese día. Te recomendamos ver
            el pronóstico{" "}
            <Link
              href="https://www.windy.com/-46.540/-71.720?-46.969,-71.720,8"
              target="_blank"
            >
              (ver aquí)
            </Link>
            . Somos optimistas con el tiempo pero en la Patagonia y en Chile
            Chico todo puede pasar!
          </ListWithIcons.Text>
        </ListWithIcons.Item>
      </ListWithIcons>
    </Section.Content>
  </Section>
);

export default AboutTheWedding;
