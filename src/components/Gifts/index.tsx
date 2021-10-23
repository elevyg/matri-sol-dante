import React from "react";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";
import { ReactComponent as GiftBox } from "../../assets/icons/gift-box.svg";

const Index = () => {
  const classes = useStyles();
  return (
    <Section ContainerProps={{ sx: { marginY: 20 } }}>
      <Section.Title>
        <TitleWithIcon title="Regalos">
          <GiftBox />
        </TitleWithIcon>
      </Section.Title>
      <Section.Content>
        <div className={classes.text}>
          <Typography my={2}>
            Sabemos cuanto cuesta venir, el regalo es compartir.
          </Typography>
          <Typography mb={2}>
            Si aun insisten con regalarnos algo, tenemos el siguiente código de
            novios <strong>Falabella</strong>:
          </Typography>
        </div>
        <div className={classes.code}>
          <Typography fontSize={30}>937107-09</Typography>
        </div>
      </Section.Content>
    </Section>
  );
};

export default Index;

const useStyles = makeStyles<Theme>((theme) => ({
  text: { margin: theme.spacing(0, 4) },
  code: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[850],
    borderRadius: 20,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
