import React from "react";
import styles from "./MatchCard.module.css";

export type MatchCardProps = {
  imgSrc: string;
  name: string;
  age: string;
  mail: string;
  phone: string;
};

function MatchCard({
  imgSrc,
  name,
  age,
  mail,
  phone,
}: MatchCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.matchImage} src={imgSrc} alt="Profile Image" />
      <div className={styles.matchInfo}>
        <span className={styles.matchName}>{name}</span>
        <span className={styles.matchAge}>{age}</span>
        <span className={styles.matchMail}>{mail}</span>
        <span className={styles.matchPhone}>{phone}</span>
      </div>
    </div>
  );
}

export default MatchCard;
