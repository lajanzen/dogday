import React from "react";
import styles from "./SearchProfileCard.module.css";

export type SearchProfileCardProps = {
  imgSrc: string;
  name: string;
  info: string;
  className?: string;
};

function SearchProfileCard({
  className,
  imgSrc,
  name,
  info,
}: SearchProfileCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.profileImageWrapper}>
        <img className={styles.profileImage} src={imgSrc} alt="" />
      </div>
      <span className={styles.profileName}>{name}</span>
      <span className={styles.profileInfo}>{info}</span>
    </div>
  );
}

export default SearchProfileCard;
