import React from "react";
import RegisterSitter from "./RegisterSitter";

export default {
  title: "Page/RegisterSitter",
  component: RegisterSitter,
  parameters: {
    layout: "fullscreen",
  },
};

export const Sitter = (): JSX.Element => <RegisterSitter />;
