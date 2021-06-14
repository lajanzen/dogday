import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  variant?: "round" | "primary" | "secondary";
  onClick?: () => void;
};

function Button({ children, variant }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={() => alert("Hello World!")}
      className={
        variant
          ? `${styles[`button--${variant}`]} ${styles.button}`
          : styles.button
      }
    >
      {children}
    </button>
  );
}

export default Button;
