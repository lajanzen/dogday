import React from "react";
import HeartIcon from "../Icons/HeartIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import SearchIcon from "../Icons/SearchIcon";
import LinkComponent from "./LinkComponent";

export default {
  title: "Component/LinkComponent",
  component: LinkComponent,
};

export const RegisterDog = (): JSX.Element => (
  <LinkComponent link="#" variant="primary">
    Hund registrieren
  </LinkComponent>
);

export const RegisterSitter = (): JSX.Element => (
  <LinkComponent link="#" variant="primary">
    Hundesitter werden
  </LinkComponent>
);

export const LogIn = (): JSX.Element => (
  <LinkComponent link="#" variant="secondary">
    Log-In
  </LinkComponent>
);

export const Profile = (): JSX.Element => (
  <LinkComponent link="#" variant="round">
    <ProfileIcon />
  </LinkComponent>
);

export const Matches = (): JSX.Element => (
  <LinkComponent link="#" variant="round">
    <HeartIcon />
  </LinkComponent>
);

export const Search = (): JSX.Element => (
  <LinkComponent link="#" variant="round">
    <SearchIcon />
  </LinkComponent>
);
