import React from "react";
import LinkComponent from "../../components/LinkComponent/LinkComponent";
import styles from "./LandingPage.module.css";

function LandingPage(): JSX.Element {
  return (
    <main className={styles.container}>
      <img className={styles.logo} src={"/mainLogo.png"} alt={"logo"} />

      <LinkComponent link="/registerdog" variant="primary">
        Hund Registrieren
      </LinkComponent>
      <LinkComponent link="#" variant="primary">
        Hundesitter werden
      </LinkComponent>
      <LinkComponent link="#" variant="secondary">
        Log-In
      </LinkComponent>
    </main>
  );
}

export default LandingPage;
