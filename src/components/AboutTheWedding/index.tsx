import React from "react";
import { Typography } from "@mui/material";

import { TitleWithIcon } from "../atoms";
import { ReactComponent as DiscoBallIcon } from "../../assets/icons/disco-ball.svg";
import { ReactComponent as TentIcon } from "../../assets/icons/tent.svg";
import { ReactComponent as LoveLetterIcon } from "../../assets/icons/love-letter.svg";
import { ReactComponent as BootsIcon } from "../../assets/icons/boots.svg";
import { ReactComponent as JacketIcon } from "../../assets/icons/jacket.svg";
import { ListWithIcons } from "../atoms/ListWithIcons";
import Section from "../atoms/Section";

const AboutTheWedding = () => (
  <Section>
    <Section.Title>
      <TitleWithIcon title="Sobre el matri">
        <DiscoBallIcon />
      </TitleWithIcon>
    </Section.Title>
    <Section.Content>
      <Typography variant="body1" mt={2}>
        <strong>
          El evento será el día sábado 8 de enero a partir de las 12 hrs.
        </strong>{" "}
        Todavía no podemos compartirles mucho más detalles que estos:
      </Typography>
      <ListWithIcons justifyContent="center" display="flex">
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <TentIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            Es al aire libre
          </ListWithIcons.Text>
        </ListWithIcons.Item>
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <LoveLetterIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            Ceremonia + <br /> Almuerzo + <br />
            Fiesta
          </ListWithIcons.Text>
        </ListWithIcons.Item>
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <BootsIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            Vestirse cómodo y con estilo. (¡No formal!)
          </ListWithIcons.Text>
        </ListWithIcons.Item>
        <ListWithIcons.Item sx={{ marginLeft: 5 }}>
          <ListWithIcons.Icon>
            <JacketIcon />
          </ListWithIcons.Icon>
          <ListWithIcons.Text sx={{ marginLeft: 5 }}>
            Venir preparado para que las 4 estaciones sucedan el mismo día
          </ListWithIcons.Text>
        </ListWithIcons.Item>
      </ListWithIcons>
    </Section.Content>
  </Section>
);

export default AboutTheWedding;
