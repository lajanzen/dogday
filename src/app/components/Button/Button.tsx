import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  variant?: "round" | "primary" | "secondary" | "round-border";
  onClick?: () => void;
};

function Button({ children, variant, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
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
