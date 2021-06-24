import React from "react";
import styles from "./MatchCard.module.css";

export type MatchCardProps = {
  imgSrc: string;
  name: string;
  info: string;
  mail: string;
  phone: string;
};

function MatchCard({
  imgSrc,
  name,
  info,
  mail,
  phone,
}: MatchCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgSrc} alt="Profile Image" />
      <article className={styles.info}>
        <span className={styles.info__name}>{name}</span>
        <span className={styles.info__age}>{info}</span>
        <span className={styles.info__mail}>{mail}</span>
        <span className={styles.info__phone}>{phone}</span>
      </article>
    </div>
  );
}

export default MatchCard;
