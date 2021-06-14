import React from "react";
import styles from "./LabeledInput.module.css";

type LabeledInputProps = {
  label: string;
  value: string;
  type?: string;
  id: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function LabeledInput({
  label,
  value,
  type,
  required,
  id,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label className={styles.container__label} htmlFor={id}>
        {label}
      </label>

      <input
        className={styles.container__input}
        type={type}
        value={value}
        id={id}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default LabeledInput;
