import React from "react";
import styles from "./DropdownMenu.module.css";

function DropdownMenu(): JSX.Element {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="dropdown">
        Erfahrung mit Hunden
      </label>
      <select className={styles.dropdown} name="experience" id="dropdown">
        <option value="">-Auswählen-</option>
        <option value="newbie">Hunde-Newbie ({"<"} 1 Jahr)</option>
        <option value="friend">Hunde-Freund (1-3 Jahre)</option>
        <option value="professional">Hunde-Profi ({">"} 3 Jahre)</option>
      </select>
    </div>
  );
}

export default DropdownMenu;
