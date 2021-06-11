import React, { ReactNode } from "react";
import styles from "./Link.module.css";

type LinkProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  link: string;
};

function Link({ children, variant, link }: LinkProps): JSX.Element {
  return (
    <a
      href={link}
      className={
        variant ? `${styles[`link--${variant}`]} ${styles.link}` : styles.link
      }
    >
      {children}
    </a>
  );
}

export default Link;
