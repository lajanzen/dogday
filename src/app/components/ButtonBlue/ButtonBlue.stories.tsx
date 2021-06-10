import React from "react";
import ButtonBlue from "./ButtonBlue";

export default {
  title: "Component/ButtonBlue",
  component: ButtonBlue,
};

export const RegisterDog = (): JSX.Element => (
  <ButtonBlue>Hund registrieren</ButtonBlue>
);
export const RegisterSitter = (): JSX.Element => (
  <ButtonBlue>Hundesitter werden</ButtonBlue>
);
