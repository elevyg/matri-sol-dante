import React from "react";
import { Container, SvgIcon, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { ReactComponent as MateIcon } from "../../assets/icons/mate.svg";
import Section from "../atoms/Section";
import { images } from "./carouselImages";

const AboutChileChico = () => {
  const classes = useStyles();
  return (
    <Section ContainerProps={{ disableGutters: true }}>
      <div className={classes.headerContainer}>
        <SvgIcon sx={{ fontSize: 60 }}>
          <MateIcon />
        </SvgIcon>
        <Typography variant="h3" className={classes.title}>
          Que hacer en ChCh
        </Typography>
      </div>
      <Container>
        <Typography variant="h6" fontWeight="700" mt={2} textAlign="center">
          Les compartimos algunas fotos de nuestros panoramas favoritos en Chile
          Chico.
        </Typography>
        <Typography variant="body1" mt={3} textAlign="center">
          Sería genial hacer varias de estas cosas en grupo. Más adelante les
          iremos contando más detalles, precios y cómo inscribirse para pensar
          la logística. Vamos de a poco!.
        </Typography>
      </Container>
      <Container disableGutters>
        <div className={classes.carouselContainer}>
          <Carousel
            infiniteLoop
            autoPlay={false}
            dynamicHeight
            showStatus={false}
          >
            {images.map((i) => (
              <div key={i.id}>
                <img src={i.src} alt={i.id.toString()} />
                <p className="legend">{i.legend}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

export default AboutChileChico;

const useStyles = makeStyles<Theme>((theme) => ({
  headerContainer: {
    backgroundImage: `url("https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/chile-chico.jpeg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    height: "40vh",
    marginTop: theme.spacing(3),
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      height: "70vh",
    },
  },
  title: {
    textAlign: "center",
  },
  carouselContainer: { marginTop: theme.spacing(3) },
}));
