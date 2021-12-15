import React, { useState } from "react";
import { Button, Link, Typography } from "@mui/material";

import { TitleWithIcon } from "../atoms";
import { ReactComponent as DiscoBallIcon } from "../../assets/icons/disco-ball.svg";
import { ReactComponent as TentIcon } from "../../assets/icons/tent.svg";
import { ReactComponent as LoveLetterIcon } from "../../assets/icons/love-letter.svg";
import { ReactComponent as GrassIcon } from "../../assets/icons/grass.svg";
import { ReactComponent as JacketIcon } from "../../assets/icons/jacket.svg";
import { ReactComponent as DressIcon } from "../../assets/icons/dress.svg";
import { ReactComponent as DancingIcon } from "../../assets/icons/dancing.svg";
import { ReactComponent as DishIcon } from "../../assets/icons/breakfast.svg";
import { ListWithIcons } from "../atoms/ListWithIcons";
import Section from "../atoms/Section";
import JewishDanceModal from "./JewishDanceModal";
import FoodRestrictionDialog from "./FoodRestrictionDialog";

const AboutTheWedding = () => {
  const [openFoodRestrictionModal, setOpenFoodRestrictionModal] =
    useState(false);
  const [openJewishDanceModal, setOpenJewishDanceModal] = useState(false);

  return (
    <Section>
      <JewishDanceModal
        open={openJewishDanceModal}
        onClose={() => setOpenJewishDanceModal(false)}
      />
      <FoodRestrictionDialog
        open={openFoodRestrictionModal}
        onClose={() => setOpenFoodRestrictionModal(false)}
      />
      <Section.Title>
        <TitleWithIcon title="¡Queda muy poco!">
          <DiscoBallIcon />
        </TitleWithIcon>
      </Section.Title>
      <Section.Content>
        <Typography variant="body1" mt={2}>
          <strong>
            El evento es el día sábado 8 de enero a partir de las 12 hrs.
          </strong>{" "}
        </Typography>
        <Typography variant="body1" mt={2}>
          Acá algunos detalles:
        </Typography>
        <ListWithIcons justifyContent="center" display="flex">
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
              ¡Compartiremos una ceremonia, luego un almuerzo para terminar
              bailando!.
            </ListWithIcons.Text>
          </ListWithIcons.Item>
          <ListWithIcons.Item sx={{ marginLeft: 5 }}>
            <ListWithIcons.Icon>
              <DishIcon />
            </ListWithIcons.Icon>

            <ListWithIcons.Text
              sx={{ marginLeft: 5, display: "flex", flexDirection: "column" }}
            >
              El menú es 100% vegetariano, cualquier restricción alimentaria por
              favor avisarnos por acá.
              <Button
                variant="contained"
                onClick={() => setOpenFoodRestrictionModal(true)}
                sx={{ marginTop: 1 }}
              >
                Avisar restricción alimentaria
              </Button>
            </ListWithIcons.Text>
          </ListWithIcons.Item>
          <ListWithIcons.Item sx={{ marginLeft: 5 }}>
            <ListWithIcons.Icon>
              <DancingIcon />
            </ListWithIcons.Icon>

            <ListWithIcons.Text
              sx={{ marginLeft: 5, display: "flex", flexDirection: "column" }}
            >
              Sin ser una ceremonia religiosa, para el momento de los bailes
              tendremos algunos{" "}
              <strong> bailes clásicos de la tradición judía.</strong> Nos
              encantaría que todos participaran, por lo que les dejamos algunos
              link para que se los conozcan.
              <Button
                variant="contained"
                onClick={() => setOpenJewishDanceModal(true)}
                sx={{ marginTop: 1 }}
                fullWidth={false}
              >
                Bailes judíos
              </Button>
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
              La pista de baile es de pasto, para que elijas un calzado con el
              que puedas dar la vida bailando.
            </ListWithIcons.Text>
          </ListWithIcons.Item>
          <ListWithIcons.Item sx={{ marginLeft: 5 }}>
            <ListWithIcons.Icon>
              <JacketIcon />
            </ListWithIcons.Icon>
            <ListWithIcons.Text sx={{ marginLeft: 5 }}>
              Puede haber viento, hacer frío o llover ese día. Te recomendamos
              ver el pronóstico{" "}
              <Link
                href="https://www.windy.com/-46.540/-71.720?-46.969,-71.720,8"
                target="_blank"
              >
                (ver aquí)
              </Link>
              . Somos optimistas de que será un hermoso día de sol, pero esto va
              contra viento y marea.
            </ListWithIcons.Text>
          </ListWithIcons.Item>
        </ListWithIcons>
      </Section.Content>
    </Section>
  );
};

export default AboutTheWedding;
