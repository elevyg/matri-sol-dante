import React from "react";

import MainInfo from "./MainInfo";
import RecommendedItinerary from "./RecommendedItinerary";
import TravelingTips from "./TravelingTips";
import { ReactComponent as MapIcon } from "../../assets/icons/map.svg";
import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";

const HowToGetThere = () => (
  <Section>
    <Section.Title>
      <TitleWithIcon title="¿Cómo llegar ChCh?">
        <MapIcon />
      </TitleWithIcon>
    </Section.Title>
    <Section.Content>
      <MainInfo />
      <RecommendedItinerary />
      <TravelingTips />
    </Section.Content>
  </Section>
);

export default HowToGetThere;
