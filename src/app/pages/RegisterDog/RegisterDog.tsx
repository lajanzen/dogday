import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import DogIcon from "../../components/Icons/DogIcon";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import styles from "./RegisterDog.module.css";

function RegisterDog(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <img className={styles.header__logo} src="/smallLogo.png" alt="" />
      </header>

      <main className={styles.main}>
        <form className={styles.main__form}>
          <LabeledInput
            label="Hunde-Name"
            id="name"
            value=""
            onChange={console.log}
          />
          <LabeledInput
            label="Geburtsjahr des Hundes"
            id="birth"
            value=""
            onChange={console.log}
          />
          <LabeledInput
            label="Deine E-Mail"
            id="mail"
            value=""
            onChange={console.log}
          />
          <LabeledInput
            label="Deine Handynummer"
            id="phone"
            value=""
            onChange={console.log}
          />
          <LabeledInput
            label="Deine Stadt"
            id="city"
            value=""
            onChange={console.log}
          />
          <LabeledInput
            label="Passwort"
            id="password"
            value=""
            onChange={console.log}
          />
          <Button variant="primary">Hund registrieren</Button>
        </form>
      </main>
      <footer className={styles.footer}>
        <DogIcon />
      </footer>
    </div>
  );
}

export default RegisterDog;
