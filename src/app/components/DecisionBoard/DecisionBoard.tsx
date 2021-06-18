import React from "react";
import styles from "./DecisionBoard.module.css";
import Button from "../Button/Button";
import YesIcon from "../Icons/YesIcon";
import NoIcon from "../Icons/NoIcon";

function DecisionBoard(): JSX.Element {
  return (
    <div className={styles.container}>
      <Button variant="round-border">
        <NoIcon />
      </Button>
      <Button variant="round-border">
        <YesIcon />
      </Button>
    </div>
  );
}

export default DecisionBoard;
