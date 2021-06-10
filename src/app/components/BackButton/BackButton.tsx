import React, { ReactNode } from "react";
import styles from "./BackButton.module.css";

type BackButtonProps = {
  children: ReactNode;
};

function BackButton({ children }: BackButtonProps): JSX.Element {
  return <button className={styles.backButton}>{children}</button>;
}

export default BackButton;
