import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import DogIcon from "../../components/Icons/DogIcon";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import styles from "./RegisterSitter.module.css";

function RegisterSitter(): JSX.Element {
  return (
    <div>
      <div className={styles.container}>
        <header className={styles.header}>
          <BackButton />
          <img className={styles.header__logo} src="/smallLogo.png" alt="" />
        </header>

        <main className={styles.main}>
          <form className={styles.main__form}>
            <LabeledInput
              label="Dein Name"
              id="dogName"
              value=""
              onChange={console.log}
            />
            <LabeledInput
              label="Deine E-Mail"
              id="email"
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
            <DropdownMenu />
            <LabeledInput
              label="Passwort"
              id="password"
              value=""
              onChange={console.log}
            />
            <Button variant="primary">Registrieren</Button>
          </form>
        </main>
      </div>
      <footer className={styles.footer}>
        <DogIcon />
      </footer>
    </div>
  );
}

export default RegisterSitter;
