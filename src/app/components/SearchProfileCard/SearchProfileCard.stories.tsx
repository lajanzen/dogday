import React from "react";
import SearchProfileCard from "./SearchProfileCard";

export default {
  title: "Component/SearchProfileCard",
  component: SearchProfileCard,
};

export const Dog = (): JSX.Element => (
  <SearchProfileCard
    type="dog"
    imgSrc="/dog.png"
    name="Karl"
    info="Alter: 12 Wochen"
  />
);

export const Sitter = (): JSX.Element => (
  <SearchProfileCard
    type="dog"
    imgSrc="/sitter.png"
    name="Jana"
    info="Hundeprofi"
  />
);
