import React from "react";
import styles from "./MatchCardSitter.module.css";

export type MatchCardSitterProps = {
  imgSrc: string;
  name: string;
  experience: string;
  mail: string;
  phone: string;
};

function MatchCardSitter({
  imgSrc,
  name,
  experience,
  mail,
  phone,
}: MatchCardSitterProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.matchImage} src={imgSrc} alt="Profile Image" />
      <div className={styles.matchInfo}>
        <span className={styles.matchName}>{name}</span>
        <span className={styles.matchAge}>{experience}</span>
        <span className={styles.matchMail}>{mail}</span>
        <span className={styles.matchPhone}>{phone}</span>
      </div>
    </div>
  );
}

export default MatchCardSitter;
