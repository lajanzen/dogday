import React from "react";
import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
};

export const RegisterDog = (): JSX.Element => (
  <Button variant="primary">Hund registrieren</Button>
);
export const RegisterSitter = (): JSX.Element => (
  <Button variant="primary">Hundesitter werden</Button>
);

export const LogIn = (): JSX.Element => (
  <Button variant="secondary">Log-In</Button>
);

export const No = (): JSX.Element => (
  <Button variant="round-border">Log-In</Button>
);
