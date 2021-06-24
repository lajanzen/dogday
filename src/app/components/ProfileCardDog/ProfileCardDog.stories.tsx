import React from "react";
import ProfileCardDog from "./ProfileCardDog";

export default {
  title: "Component/ProfileCardDog",
  component: ProfileCardDog,
};

export const Dog = (): JSX.Element => (
  <ProfileCardDog
    imgSrc="/dog.png"
    name="Karl"
    age="12 Monate alt"
    mail="karl@web.de"
    phone="0162123456"
    city="Köln"
  />
);
