import React from "react";
import { ButtonBase, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";
import { ReactComponent as GiftBox } from "../../assets/icons/gift-box.svg";

const Index = () => {
  const classes = useStyles();
  return (
    <Section>
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
            Si aun insisten con regalarnos algo, preferimos que nos hagan un
            deposito en la siguiente <strong>cuenta bancaria</strong>:
          </Typography>
        </div>
        <div className={classes.code}>
          <ButtonBase
            href="https://num.cl/sole"
            classes={{ root: classes.button }}
          >
            <Typography fontSize={30} marginY={2}>
              Ver cuenta
            </Typography>
          </ButtonBase>
        </div>
        <div className={classes.text}>
          <Typography mb={2}>
            ¡Recuerda escribir en la descripción a quien corresponde para poder
            agradecer!
          </Typography>
        </div>
      </Section.Content>
    </Section>
  );
};

export default Index;

const useStyles = makeStyles<Theme>((theme) => ({
  text: { margin: theme.spacing(3, 4) },
  code: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[850],
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  button: { width: "100%", height: "100%" },
}));
