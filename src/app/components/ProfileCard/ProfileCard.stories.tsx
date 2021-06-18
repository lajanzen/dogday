import React from "react";
import ProfileCard from "./ProfileCard";

export default {
  title: "Component/ProfileCard",
  component: ProfileCard,
};

export const Dog = (): JSX.Element => (
  <ProfileCard imgSrc="/dog.png" name="Karl" info="Alter: 12 Wochen" />
);

export const Sitter = (): JSX.Element => (
  <ProfileCard imgSrc="/sitter.png" name="Jana" info="Hundeprofi" />
);
