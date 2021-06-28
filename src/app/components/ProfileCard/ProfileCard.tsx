import React from "react";
import styles from "./ProfileCard.module.css";

export type ProfileCardDogProps = {
  info: string;
  imgSrc?: string;
  name: string;
  mail: string;
  phone: string;
  city: string;
  info2: number | string;
};

function ProfileCardDog({
  info,
  info2,
  imgSrc,
  name,
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
        <span>{info}</span>
      </div>
      <div className={styles.info}>
        <span>{mail}</span>
        <span>{phone}</span>
        <span>{city}</span>
        <span>{info2}</span>
      </div>
    </div>
  );
}

export default ProfileCardDog;
