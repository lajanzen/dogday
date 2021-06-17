import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkComponent.module.css";

type LinkComponentProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "round";
  link: string;
};

function LinkComponent({
  children,
  variant,
  link,
}: LinkComponentProps): JSX.Element {
  return (
    <Link
      to={link}
      className={
        variant ? `${styles[`link--${variant}`]} ${styles.link}` : styles.link
      }
    >
      {children}
    </Link>
  );
}

export default LinkComponent;
