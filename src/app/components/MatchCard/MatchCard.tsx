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
    <article className={styles.container}>
      <img className={styles.image} src={imgSrc} alt="Profile Image" />
      <div className={styles.info}>
        <span className={styles.info__name}>{name}</span>
        <span>{info}</span>
        <span>{mail}</span>
        <span>{phone}</span>
      </div>
    </article>
  );
}

export default MatchCard;
