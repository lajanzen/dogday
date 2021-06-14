import React from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import BackIcon from "../Icons/BackIcon";

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <Button variant="round" onClick={() => history.goBack()}>
      <BackIcon />
    </Button>
  );
}

export default BackButton;
