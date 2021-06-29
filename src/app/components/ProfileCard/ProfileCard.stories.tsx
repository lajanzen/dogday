import React from "react";
import ProfileCardDog from "./ProfileCard";

export default {
  title: "Component/ProfileCardDog",
  component: ProfileCardDog,
};

export const Dog = (): JSX.Element => (
  <ProfileCardDog
    type="dog"
    imgSrc="/dog.png"
    name="Karl"
    age={2}
    mail="karl@web.de"
    phone="0162123456"
    city="Köln"
  />
);
