import React, { ReactNode } from "react";
import styles from "./RegisterButton.module.css";

type RegisterButtonProps = {
  children: ReactNode;
};

function RegisterButton({ children }: RegisterButtonProps): JSX.Element {
  return <button className={styles.registerButton}>{children}</button>;
}

export default RegisterButton;
