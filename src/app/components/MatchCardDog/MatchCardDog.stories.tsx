import React from "react";
import MatchCard from "./MatchCardDog";

export default {
  title: "Component/MatchCard",
  component: MatchCard,
};

export const Dog = (): JSX.Element => (
  <MatchCard
    imgSrc="/dog.png"
    name="Karl"
    age="12 Monate alt"
    mail="karl@web.de"
    phone="0162123456"
  />
);

export const Dog2 = (): JSX.Element => (
  <MatchCard
    imgSrc="/dog.png"
    name="Karl"
    age="12 Monate alt"
    mail="karl@web.de"
    phone="0162123456"
  />
);
