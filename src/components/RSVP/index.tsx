import React from "react";
import { Typography, Button } from "@mui/material";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";

const RSVP = () => {
  const { width, height } = useWindowSize();

  return (
    <Section>
      <Confetti
        width={width}
        height={height * 2}
        numberOfPieces={500}
        tweenDuration={2000}
        recycle={false}
        initialVelocityY={40}
        confettiSource={{ x: 0, y: height, w: width, h: 0 }}
      />
      <Section.Title>
        <TitleWithIcon title="RSVP">
          <Calendar />
        </TitleWithIcon>
      </Section.Title>
      <Section.Content
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          href="https://docs.google.com/forms/d/11bKTJ6x6VBGAxFSmF3ImjQDmmznWzwgEjMeFd-P94v0/viewform?edit_requested=true"
          target="_blank"
        >
          <Typography>Confirma tu asistencia aquí</Typography>
        </Button>
      </Section.Content>
    </Section>
  );
};

export default RSVP;
