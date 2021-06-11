import React from "react";
import PrimaryButton from "./PrimaryButton";

export default {
  title: "Component/PrimaryButton",
  component: PrimaryButton,
};

export const RegisterDog = (): JSX.Element => (
  <PrimaryButton>Hund registrieren</PrimaryButton>
);
export const RegisterSitter = (): JSX.Element => (
  <PrimaryButton>Hundesitter werden</PrimaryButton>
);
