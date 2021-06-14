import React, { useState } from "react";
import BackButton from "../components/BackButton/BackButton";
import Button from "../components/Button/Button";
import LabeledInput from "../components/LabeledInput/LabeledInput";
import styles from "./Login.module.css";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("You're logged in");
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <img
          className={styles.header__logo}
          src={"/mainLogo.png"}
          alt={"logo"}
        />
      </header>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <LabeledInput
            label="E-mail"
            value={email}
            type="email"
            required
            id="email"
            onChange={setEmail}
          />
          <LabeledInput
            label="Password"
            value={password}
            type="password"
            required
            id="password"
            onChange={setPassword}
          />
          <Button variant="secondary">Log-In</Button>
        </form>
      </main>
    </div>
  );
}

export default Login;
