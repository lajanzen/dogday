import React from "react";
import styles from "./DropdownMenu.module.css";

type DropdownMenuProps = {
  value: string;
  onChange: (value: string) => void;
};

function DropdownMenu({ value, onChange }: DropdownMenuProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="dropdown">
        Erfahrung mit Hunden
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.dropdown}
        name="experience"
        id="dropdown"
      >
        <option value="">-Auswählen-</option>
        <option value="newbie">Hunde-Newbie ({"<"} 1 Jahr)</option>
        <option value="friend">Hunde-Freund (1-3 Jahre)</option>
        <option value="professional">Hunde-Profi ({">"} 3 Jahre)</option>
      </select>
    </div>
  );
}

export default DropdownMenu;
