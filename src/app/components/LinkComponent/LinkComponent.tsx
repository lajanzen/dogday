import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkComponent.module.css";

type LinkComponentProps = {
  active?: boolean;
  children: ReactNode;
  variant?: "primary" | "secondary" | "round";
  link: string;
};

function LinkComponent({
  active,
  children,
  variant,
  link,
}: LinkComponentProps): JSX.Element {
  return (
    <Link
      to={link}
      className={`${
        variant ? `${styles[`link--${variant}`]} ${styles.link}` : styles.link
      } ${active ? styles[`link--${variant}-active`] : ""}`}
    >
      {children}
    </Link>
  );
}

export default LinkComponent;
