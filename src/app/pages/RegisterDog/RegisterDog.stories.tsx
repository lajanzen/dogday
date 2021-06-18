import React from "react";
import RegisterDog from "./RegisterDog";

export default {
  title: "Page/RegisterDog",
  component: RegisterDog,
  parameters: {
    layout: "fullscreen",
  },
};

export const Dog = (): JSX.Element => <RegisterDog />;
