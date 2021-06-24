import React from "react";
import MatchCardSitter from "./MatchCardSitter";

export default {
  title: "Component/MatchCardSitter",
  component: MatchCardSitter,
};

export const Sitter = (): JSX.Element => (
  <MatchCardSitter
    imgSrc="/sitter.png"
    name="Jana"
    experience="Hunde-Profi"
    mail="jana@web.de"
    phone="0162123456"
  />
);
