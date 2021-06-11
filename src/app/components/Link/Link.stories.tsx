import React from "react";
import Link from "./Link";

export default {
  title: "Component/Link",
  component: Link,
};

export const RegisterDog = (): JSX.Element => (
  <Link link="#" variant="primary">
    Hund registrieren
  </Link>
);

export const RegisterSitter = (): JSX.Element => (
  <Link link="#" variant="primary">
    Hundesitter werden
  </Link>
);

export const LogIn = (): JSX.Element => (
  <Link link="#" variant="secondary">
    Log-In
  </Link>
);
