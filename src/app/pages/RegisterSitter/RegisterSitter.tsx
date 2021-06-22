import React, { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import DogIcon from "../../components/Icons/DogIcon";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import styles from "./RegisterSitter.module.css";
import { UserSitter } from "../../../types";
import { postUser } from "../../api/users";
import { useHistory } from "react-router-dom";

function RegisterSitter(): JSX.Element {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: UserSitter = { name, email, phone, city, password };
    postUser(user);
    history.push("/");
  }

  return (
    <div>
      <div className={styles.container}>
        <header className={styles.header}>
          <BackButton />
          <img className={styles.header__logo} src="/smallLogo.png" alt="" />
        </header>

        <main className={styles.main}>
          <form className={styles.main__form} onSubmit={handleSubmit}>
            <LabeledInput
              label="Dein Name"
              type="text"
              id="name"
              value={name}
              onChange={setName}
              required
            />
            <LabeledInput
              label="Deine E-Mail"
              type="email"
              id="email"
              value={email}
              onChange={setEmail}
              required
            />
            <LabeledInput
              label="Deine Handynummer"
              type="number"
              id="phone"
              value={phone}
              onChange={(value) => setPhone(+value)}
              required
            />
            <LabeledInput
              label="Deine Stadt"
              type="text"
              id="city"
              value={city}
              onChange={setCity}
              required
            />
            <DropdownMenu />
            <LabeledInput
              label="Passwort"
              type="password"
              id="password"
              value={password}
              onChange={setPassword}
              required
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
