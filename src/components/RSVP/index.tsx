import React from "react";
import { Typography, Grid } from "@mui/material";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { addRSVP } from "../../actions/rsvp";
import { RsvpValidation } from "../../utils/rsvpValidation";
import Form from "./Form";
import Alerts from "./Alerts";
import { Rsvp } from "../../models/Forms";

const RSVP = () => {
  const { width, height } = useWindowSize();
  const { mutate, isLoading, isSuccess, isError } = useMutation(addRSVP);
  const methods = useForm<Rsvp>({
    resolver: yupResolver(RsvpValidation),
    mode: "all",
    reValidateMode: "onBlur",
  });

  const onSubmit = methods.handleSubmit((data) => {
    mutate(data);
  });

  const rsvp = useWatch({ name: "rsvp", control: methods.control });

  return (
    <FormProvider {...methods}>
      <Section>
        {rsvp === "yes" && (
          <Confetti
            width={width}
            height={height * 2}
            numberOfPieces={500}
            tweenDuration={2000}
            recycle={false}
            initialVelocityY={40}
            confettiSource={{ x: 0, y: height, w: width, h: 0 }}
          />
        )}
        <Section.Title>
          <TitleWithIcon title="RSVP">
            <Calendar />
          </TitleWithIcon>
        </Section.Title>
        <Section.Content>
          <Grid container px={2} pt={2}>
            <Typography fontWeight={700} variant="body1">
              Estamos calculando cuanto vino y cerveza vamos a tomar, es por eso
              que necesitamos que contestes las siguientes preguntas:{" "}
            </Typography>
            <form onSubmit={onSubmit} style={{ width: "100%" }}>
              <Form loading={isLoading} />
            </form>
          </Grid>
          <Alerts success={isSuccess} error={isError} />
        </Section.Content>
      </Section>
    </FormProvider>
  );
};

export default RSVP;
