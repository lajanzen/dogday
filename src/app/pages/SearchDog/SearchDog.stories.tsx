import React from "react";
import SearchDog from "./SearchDog";

export default {
  title: "Page/SearchDog",
  component: SearchDog,
  parameters: {
    layout: "fullscreen",
  },
};

export const Karl = (): JSX.Element => (
  <SearchDog imgSrc="/dog.png" name="Karl" info="Alter: 12 Wochen" />
);
