import React from "react";
import styles from "./ProfileCard.module.css";

export type ProfileCardDogProps = {
  imgSrc?: string;
  name: string;
  mail: string;
  phone: string;
  city: string;
  type: string;
  experience?: string;
  age?: number;
};

function ProfileCardDog({
  imgSrc,
  name,
  mail,
  phone,
  city,
  type,
  experience,
  age,
}: ProfileCardDogProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img className={styles.user__image} src={imgSrc} alt="Profile Image" />
        <span className={styles.user__name}>{name}</span>
      </div>
      <div className={styles.titles}>
        <span>E-Mail:</span>
        <span>Handynummer:</span>
        <span>Stadt:</span>
        <span>{type === "dog" ? "Alter: " : "Erfahrung: "}</span>
      </div>
      <div className={styles.info}>
        <span>{mail}</span>
        <span>{phone}</span>
        <span>{city}</span>
        <span>{type === "dog" ? age : experience}</span>
      </div>
    </div>
  );
}

export default ProfileCardDog;
