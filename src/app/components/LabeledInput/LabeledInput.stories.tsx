import React from "react";
import LabeledInput from "./LabeledInput";

export default {
  title: "Component/LabeledInput",
  component: "LabeledInput",
};

export const Email = (): JSX.Element => (
  <LabeledInput
    label="E-Mail"
    id="mail"
    htmlFor="mail"
    value=""
    onChange={console.log}
  />
);
