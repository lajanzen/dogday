import React from "react";
import MatchCardDog from "./MatchCardDog";

export default {
  title: "Component/MatchCardDog",
  component: MatchCardDog,
};

export const Dog = (): JSX.Element => (
  <MatchCardDog
    imgSrc="/dog.png"
    name="Karl"
    age="12 Monate alt"
    mail="karl@web.de"
    phone="0162123456"
  />
);

export const Dog2 = (): JSX.Element => (
  <MatchCardDog
    imgSrc="/dog.png"
    name="Karl"
    age="12 Monate alt"
    mail="karl@web.de"
    phone="0162123456"
  />
);
