import React, { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import DogIcon from "../../components/Icons/DogIcon";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import styles from "./RegisterSitter.module.css";
import { UserSitter } from "../../../types";
import { postUser, uploadProfilePicture } from "../../utils/api";
import { useHistory } from "react-router-dom";

function RegisterSitter(): JSX.Element {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: UserSitter = {
      photo,
      name,
      email,
      phone,
      city,
      experience,
      password,
      type: "sitter",
    };
    postUser(user);
    history.push("/");
  }

  async function handlePictureUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const pictureFile = event.target.files?.item(0);
    if (!pictureFile) {
      return;
    }
    const picturePath = await uploadProfilePicture(pictureFile);
    setPhoto(picturePath.secure_url);
    console.log(picturePath.secure_url);
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
              onChange={setPhone}
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
            <DropdownMenu value={experience} onChange={setExperience} />
            <LabeledInput
              label="Passwort"
              type="text"
              id="password"
              value={password}
              onChange={setPassword}
              required
            />
            <div className={styles.main__form_labeledInput}>
              <label className={styles.main__form_label} htmlFor="file">
                Dein Bild
              </label>
              <input
                className={styles.main__form_input}
                type="file"
                onChange={handlePictureUpload}
                id="file"
              />
            </div>
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
