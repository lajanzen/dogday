import React, { ReactNode } from "react";
import styles from "./LogInButton.module.css";

type LogInButtonProps = {
  children: ReactNode;
};

function LogInButton({ children }: LogInButtonProps): JSX.Element {
  return <button className={styles.logInButton}>{children}</button>;
}

export default LogInButton;
