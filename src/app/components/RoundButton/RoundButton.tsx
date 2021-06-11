import React, { ReactNode } from "react";
import styles from "./RoundButton.module.css";

type RoundButtonProps = {
  children: ReactNode;
};

function RoundButton({ children }: RoundButtonProps): JSX.Element {
  return <button className={styles.roundButton}>{children}</button>;
}

export default RoundButton;
