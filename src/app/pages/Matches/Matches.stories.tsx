import React from "react";
import Matches from "./Matches";

export default {
  title: "Page/Matches",
  component: Matches,
  parameters: {
    layout: "fullscreen",
  },
};

export const MatchAll = (): JSX.Element => <Matches />;
