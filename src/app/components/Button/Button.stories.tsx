import React from "react";
import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
};

export const LogIn = (): JSX.Element => <Button>Log-In</Button>;

export const RegisterDog = (): JSX.Element => (
  <Button>Hund registrieren</Button>
);
export const RegisterSitter = (): JSX.Element => (
  <Button>Hundesitter werden</Button>
);

export const Back = (): JSX.Element => <Button> </Button>;
