import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import MobileLayout from "../src/app/components/MobileLayout/MobileLayout";
import "../src/app/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <MemoryRouter>
    <MobileLayout>{story()}</MobileLayout>
  </MemoryRouter>
));
