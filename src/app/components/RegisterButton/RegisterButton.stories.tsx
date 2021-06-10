import React from "react";
import RegisterButton from "./RegisterButton";

export default {
  title: "Component/RegisterButton",
  component: RegisterButton,
};

export const RegisterDog = (): JSX.Element => (
  <RegisterButton>Hund registrieren</RegisterButton>
);
export const RegisterSitter = (): JSX.Element => (
  <RegisterButton>Hundesitter werden</RegisterButton>
);
