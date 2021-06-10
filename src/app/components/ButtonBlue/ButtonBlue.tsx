import React, { ReactNode } from "react";

type ButtonBlueProps = {
  children: ReactNode;
};

function ButtonBlue({ children }: ButtonBlueProps): JSX.Element {
  return <button>{children}</button>;
}

export default ButtonBlue;
