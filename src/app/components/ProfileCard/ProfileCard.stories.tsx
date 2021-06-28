import React from "react";
import ProfileCardDog from "./ProfileCard";

export default {
  title: "Component/ProfileCardDog",
  component: ProfileCardDog,
};

export const Dog = (): JSX.Element => (
  <ProfileCardDog
    imgSrc="/dog.png"
    name="Karl"
    info="Alter: "
    info2="3 Monate"
    mail="karl@web.de"
    phone="0162123456"
    city="Köln"
  />
);
