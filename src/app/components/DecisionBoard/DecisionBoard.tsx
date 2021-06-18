import React from "react";
import styles from "./DecisionBoard.module.css";
import Button from "../Button/Button";
import YesIcon from "../Icons/YesIcon";
import NoIcon from "../Icons/NoIcon";

type DecisionBoardProps = {
  className?: string;
};

function DecisionBoard({ className }: DecisionBoardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
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
