import React from "react";
import styles from "./MatchCardDog.module.css";

export type MatchCardProps = {
  imgSrc: string;
  name: string;
  age: string;
  mail: string;
  phone: string;
};

function MatchCardDog({
  imgSrc,
  name,
  age,
  mail,
  phone,
}: MatchCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgSrc} alt="Profile Image" />
      <article className={styles.info}>
        <span className={styles.info__name}>{name}</span>
        <span className={styles.info__age}>{age}</span>
        <span className={styles.info__mail}>{mail}</span>
        <span className={styles.info__phone}>{phone}</span>
      </article>
    </div>
  );
}

export default MatchCardDog;
