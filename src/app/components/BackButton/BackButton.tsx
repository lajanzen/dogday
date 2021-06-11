import React from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <Button variant="round" onClick={() => history.goBack()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11.521"
        height="18.969"
        viewBox="0 0 11.521 18.969"
      >
        <g transform="translate(531.621 -181.379) rotate(90)">
          <line
            x2="7"
            y2="7"
            transform="translate(183.5 522.5)"
            fill="none"
            stroke="var(--primary-text-color)"
            stroke-linecap="round"
            stroke-width="3"
          />
          <path
            d="M7.727,2.721,0,10"
            transform="translate(190.5 519.5)"
            fill="none"
            stroke="var(--primary-text-color)"
            stroke-linecap="round"
            stroke-width="3"
          />
        </g>
      </svg>
    </Button>
  );
}

export default BackButton;
