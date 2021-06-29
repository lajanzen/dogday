import React from "react";
import MatchCard from "./MatchCard";

export default {
  title: "Component/MatchCard",
  component: MatchCard,
};

export const DogKarl = (): JSX.Element => (
  <MatchCard
    type="dog"
    imgSrc="/dog.png"
    name="Karl"
    info="12 Monate alt"
    mail="karl@web.de"
    phone="0162123456"
  />
);

export const DogKarla = (): JSX.Element => (
  <MatchCard
    type="dog"
    imgSrc="/dog.png"
    name="Karla"
    info="12 Monate alt"
    mail="karl@web.de"
    phone="0162123456"
  />
);

export const SitterJana = (): JSX.Element => (
  <MatchCard
    type="dog"
    imgSrc="/sitter.png"
    name="Jana"
    info="Hunde-Profi"
    mail="jana@web.de"
    phone="0162123456"
  />
);
