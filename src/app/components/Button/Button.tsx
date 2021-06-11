import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  round?: boolean;
};

function Button({ children, round }: ButtonProps): JSX.Element {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
