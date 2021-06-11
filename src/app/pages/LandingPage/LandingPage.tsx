import React from "react";
import Button from "../../components/Button/Button";
import styles from "./LandingPage.module.css";

function LandingPage(): JSX.Element {
  return (
    <main className={styles.container}>
      <img className={styles.logo} src={"/mainLogo.png"} alt={"logo"} />

      <Button variant="primary">Hund Registrieren</Button>
      <Button variant="primary">Hundesitter werden</Button>
      <Button variant="secondary">Log-In</Button>
    </main>
  );
}

export default LandingPage;
