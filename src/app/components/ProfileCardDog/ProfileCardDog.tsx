import React from "react";
import styles from "./ProfileCardDog.module.css";

export type ProfileCardDogProps = {
  imgSrc: string;
  name: string;
  age: string;
  mail: string;
  phone: string;
  city: string;
};

function ProfileCardDog({
  imgSrc,
  name,
  age,
  mail,
  phone,
  city,
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
        <span>Alter:</span>
      </div>
      <div className={styles.info}>
        <span>{mail}</span>
        <span>{phone}</span>
        <span>{city}</span>
        <span>{age}</span>
      </div>
    </div>
  );
}

export default ProfileCardDog;
