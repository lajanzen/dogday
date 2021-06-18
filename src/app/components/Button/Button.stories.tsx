import React from "react";
import NoIcon from "../Icons/NoIcon";
import YesIcon from "../Icons/YesIcon";
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
  <Button variant="round-border">
    <NoIcon />
  </Button>
);

export const Yes = (): JSX.Element => (
  <Button variant="round-border">
    <YesIcon />
  </Button>
);
