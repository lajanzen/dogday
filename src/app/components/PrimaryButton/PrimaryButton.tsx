import React, { ReactNode } from "react";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  children: ReactNode;
};

function PrimaryButton({ children }: PrimaryButtonProps): JSX.Element {
  return <button className={styles.primaryButton}>{children}</button>;
}

export default PrimaryButton;
