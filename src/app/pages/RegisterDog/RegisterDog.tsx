import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserDog } from "../../../types";
import { postUser } from "../../api/api";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import DogIcon from "../../components/Icons/DogIcon";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import styles from "./RegisterDog.module.css";

function RegisterDog(): JSX.Element {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [birth, setBirth] = useState(0);
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: UserDog = {
      name,
      email,
      phone,
      city,
      birth,
      password,
      type: "dog",
    };
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
              label="Hunde-Name"
              id="name"
              value={name}
              onChange={setName}
              required
            />
            <LabeledInput
              label="Geburtsjahr des Hundes"
              id="birth"
              value={birth}
              onChange={(value) => setBirth(+value)}
            />
            <LabeledInput
              label="Deine E-Mail"
              id="email"
              value={email}
              onChange={setEmail}
              required
            />
            <LabeledInput
              label="Deine Handynummer"
              id="phone"
              value={phone}
              onChange={setPhone}
              required
            />
            <LabeledInput
              label="Deine Stadt"
              id="city"
              value={city}
              onChange={setCity}
              required
            />
            <LabeledInput
              label="Passwort"
              id="password"
              value={password}
              onChange={setPassword}
              required
            />
            <Button variant="primary">Hund registrieren</Button>
          </form>
        </main>
      </div>
      <footer className={styles.footer}>
        <DogIcon />
      </footer>
    </div>
  );
}

export default RegisterDog;
