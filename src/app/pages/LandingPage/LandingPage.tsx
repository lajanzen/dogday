import React from "react";
import LinkComponent from "../../components/LinkComponent/LinkComponent";
import styles from "./LandingPage.module.css";

function LandingPage(): JSX.Element {
  return (
    <main className={styles.container}>
      <img className={styles.logo} src={"/mainLogo.png"} alt={"logo"} />

      <LinkComponent link="/registerdog" variant="primary">
        Hund registrieren
      </LinkComponent>
      <LinkComponent link="/registersitter" variant="primary">
        Hundesitter werden
      </LinkComponent>
      <LinkComponent link="/login" variant="secondary">
        Log-In
      </LinkComponent>
    </main>
  );
}

export default LandingPage;
